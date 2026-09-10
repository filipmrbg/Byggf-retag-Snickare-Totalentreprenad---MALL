import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

const PIN = '2024';

interface DayStat {
  date: string;
  count: number;
}

interface PageStat {
  path: string;
  count: number;
}

interface ReferrerStat {
  source: string;
  count: number;
}

const PAGE_LABELS: Record<string, string> = {
  '/': 'Startsidan',
  '/tjanster': 'Tjanster',
  '/om-oss': 'Om oss',
  '/kontakt': 'Kontakt',
  '/offert': 'Offert',
};

function formatPageName(path: string): string {
  if (PAGE_LABELS[path]) return PAGE_LABELS[path];
  if (path.startsWith('/tjanster/')) {
    const slug = path.replace('/tjanster/', '');
    return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  }
  return path;
}

function formatReferrer(ref: string | null): string {
  if (!ref) return 'Direktbesok';
  try {
    const host = new URL(ref).hostname.replace('www.', '');
    if (host.includes('google')) return 'Google';
    if (host.includes('facebook') || host.includes('fb.')) return 'Facebook';
    if (host.includes('instagram')) return 'Instagram';
    if (host.includes('bing')) return 'Bing';
    return host;
  } catch {
    return 'Okand';
  }
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
      <p className="text-sm text-stone-500 mb-1">{label}</p>
      <p className="text-3xl font-bold text-stone-900">{value}</p>
      {sub && <p className="text-xs text-stone-400 mt-1">{sub}</p>}
    </div>
  );
}

function BarChart({ items, max }: { items: { label: string; value: number }[]; max: number }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-stone-700">{item.label}</span>
            <span className="text-stone-500 font-medium">{item.value}</span>
          </div>
          <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-700"
              style={{ width: `${max > 0 ? (item.value / max) * 100 : 0}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

type Period = '7d' | '30d' | '90d';

export default function Statistik() {
  const [authed, setAuthed] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [period, setPeriod] = useState<Period>('30d');
  const [loading, setLoading] = useState(true);
  const [totalViews, setTotalViews] = useState(0);
  const [todayViews, setTodayViews] = useState(0);
  const [dailyStats, setDailyStats] = useState<DayStat[]>([]);
  const [pageStats, setPageStats] = useState<PageStat[]>([]);
  const [referrerStats, setReferrerStats] = useState<ReferrerStat[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === PIN) {
      setAuthed(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const daysBack = period === '7d' ? 7 : period === '30d' ? 30 : 90;

  const fetchStats = useCallback(async () => {
    setLoading(true);
    const since = new Date();
    since.setDate(since.getDate() - daysBack);
    const sinceISO = since.toISOString();

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const { data: rows } = await supabase
      .from('page_views')
      .select('path, referrer, created_at')
      .gte('created_at', sinceISO)
      .order('created_at', { ascending: true });

    if (!rows) {
      setLoading(false);
      return;
    }

    setTotalViews(rows.length);
    setTodayViews(rows.filter((r) => new Date(r.created_at) >= todayStart).length);

    const byDay = new Map<string, number>();
    const byPage = new Map<string, number>();
    const byRef = new Map<string, number>();

    for (const row of rows) {
      const day = row.created_at.slice(0, 10);
      byDay.set(day, (byDay.get(day) || 0) + 1);

      const page = row.path;
      byPage.set(page, (byPage.get(page) || 0) + 1);

      const ref = formatReferrer(row.referrer);
      byRef.set(ref, (byRef.get(ref) || 0) + 1);
    }

    setDailyStats(
      Array.from(byDay.entries())
        .map(([date, count]) => ({ date, count }))
        .sort((a, b) => a.date.localeCompare(b.date)),
    );

    setPageStats(
      Array.from(byPage.entries())
        .map(([path, count]) => ({ path, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10),
    );

    setReferrerStats(
      Array.from(byRef.entries())
        .map(([source, count]) => ({ source, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 8),
    );

    setLoading(false);
  }, [daysBack]);

  useEffect(() => {
    if (authed) fetchStats();
  }, [authed, fetchStats]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <h1 className="text-xl font-bold text-stone-900 mb-2">Besoksstatistik</h1>
          <p className="text-sm text-stone-500 mb-6">Ange PIN-koden for att se statistiken.</p>
          <input
            type="password"
            inputMode="numeric"
            maxLength={6}
            value={pin}
            onChange={(e) => { setPin(e.target.value); setPinError(false); }}
            placeholder="PIN-kod"
            className={`w-full px-4 py-3 rounded-xl border text-center text-lg tracking-widest font-mono ${
              pinError ? 'border-red-400 bg-red-50' : 'border-stone-300'
            } focus:outline-none focus:ring-2 focus:ring-orange-500/40`}
            autoFocus
          />
          {pinError && <p className="text-red-500 text-sm mt-2 text-center">Fel PIN-kod</p>}
          <button
            type="submit"
            className="mt-4 w-full bg-orange-600 text-white font-semibold py-3 rounded-xl hover:bg-orange-700 transition"
          >
            Visa statistik
          </button>
        </form>
      </div>
    );
  }

  const periodLabels: Record<Period, string> = { '7d': '7 dagar', '30d': '30 dagar', '90d': '90 dagar' };
  const avgPerDay = dailyStats.length > 0 ? Math.round(totalViews / daysBack) : 0;
  const maxDaily = Math.max(...dailyStats.map((d) => d.count), 1);

  return (
    <div className="min-h-screen bg-stone-50 pt-28 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">Besoksstatistik</h1>
            <p className="text-sm text-stone-500">WSH Bygg -- wshbygg.se</p>
          </div>
          <div className="flex bg-white rounded-xl border border-stone-200 overflow-hidden">
            {(['7d', '30d', '90d'] as Period[]).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-2 text-sm font-medium transition ${
                  period === p
                    ? 'bg-orange-600 text-white'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {periodLabels[p]}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="w-8 h-8 border-3 border-orange-200 border-t-orange-600 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard label="Besok totalt" value={totalViews} sub={`Senaste ${periodLabels[period]}`} />
              <StatCard label="Idag" value={todayViews} />
              <StatCard label="Snitt per dag" value={avgPerDay} />
              <StatCard label="Unika sidor" value={pageStats.length} />
            </div>

            {/* Daily chart */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 mb-6">
              <h2 className="font-semibold text-stone-900 mb-4">Besok per dag</h2>
              <div className="flex items-end gap-[2px] h-40 overflow-x-auto">
                {dailyStats.map((d) => (
                  <div key={d.date} className="flex-1 min-w-[6px] flex flex-col items-center justify-end h-full group relative">
                    <div
                      className="w-full bg-orange-500 rounded-t-sm hover:bg-orange-600 transition-colors cursor-default"
                      style={{ height: `${(d.count / maxDaily) * 100}%`, minHeight: d.count > 0 ? '4px' : '0px' }}
                    />
                    <div className="absolute -top-8 bg-stone-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
                      {d.date}: {d.count} besok
                    </div>
                  </div>
                ))}
              </div>
              {dailyStats.length > 0 && (
                <div className="flex justify-between text-xs text-stone-400 mt-2">
                  <span>{dailyStats[0].date}</span>
                  <span>{dailyStats[dailyStats.length - 1].date}</span>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
                <h2 className="font-semibold text-stone-900 mb-4">Populara sidor</h2>
                {pageStats.length === 0 ? (
                  <p className="text-stone-400 text-sm">Ingen data annu</p>
                ) : (
                  <BarChart
                    items={pageStats.map((s) => ({ label: formatPageName(s.path), value: s.count }))}
                    max={pageStats[0]?.count || 1}
                  />
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
                <h2 className="font-semibold text-stone-900 mb-4">Var besokarna kommer ifran</h2>
                {referrerStats.length === 0 ? (
                  <p className="text-stone-400 text-sm">Ingen data annu</p>
                ) : (
                  <BarChart
                    items={referrerStats.map((s) => ({ label: s.source, value: s.count }))}
                    max={referrerStats[0]?.count || 1}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
