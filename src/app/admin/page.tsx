"use client";

import { useState, useEffect, useCallback } from "react";

// Login-Daten für den Kunden
const ADMIN_USER = "eifler";
const ADMIN_PASS = "galabau2026";

interface Anfrage {
  id: number;
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
  datum: string;
  gelesen: boolean;
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      localStorage.setItem("galabau-admin", "true");
      onLogin();
    } else {
      setError("Benutzername oder Passwort falsch");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#009746]">Galabau Eifler</h1>
          <p className="text-neutral-500 mt-2">Admin-Bereich</p>
        </div>
        <form onSubmit={handleLogin} className="bg-white rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Benutzername
            </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-[#009746] focus:ring-1 focus:ring-[#009746]"
              placeholder="Benutzername eingeben"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Passwort
            </label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-[#009746] focus:ring-1 focus:ring-[#009746]"
              placeholder="Passwort eingeben"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#009746] text-white font-bold py-3 rounded-lg hover:bg-[#007a38] transition-colors"
          >
            ANMELDEN
          </button>
        </form>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-white rounded-2xl p-6">
      <p className="text-sm text-neutral-500 mb-1">{label}</p>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

function Dashboard() {
  const [anfragen, setAnfragen] = useState<Anfrage[]>([]);
  const [activeTab, setActiveTab] = useState<"dashboard" | "anfragen" | "infos" | "hilfe">("dashboard");
  const [showAnfrageDetail, setShowAnfrageDetail] = useState<Anfrage | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAnfragen = useCallback(async () => {
    try {
      const res = await fetch("/api/anfragen?auth=galabau2026");
      if (res.ok) {
        const data = await res.json();
        setAnfragen(data);
      }
    } catch (err) {
      console.error("Fehler beim Laden der Anfragen:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnfragen();
    // Auto-Refresh alle 30 Sekunden
    const interval = setInterval(fetchAnfragen, 30000);
    return () => clearInterval(interval);
  }, [fetchAnfragen]);

  const ungelesen = anfragen.filter((a) => !a.gelesen).length;

  const markAsRead = async (id: number) => {
    setAnfragen((prev) =>
      prev.map((a) => (a.id === id ? { ...a, gelesen: true } : a))
    );
    await fetch("/api/anfragen", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, auth: "galabau2026" }),
    });
  };

  const deleteAnfrage = async (id: number) => {
    if (!confirm("Anfrage wirklich löschen?")) return;
    await fetch("/api/anfragen", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, auth: "galabau2026" }),
    });
    setAnfragen((prev) => prev.filter((a) => a.id !== id));
    setShowAnfrageDetail(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("galabau-admin");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#009746]">Galabau Eifler</h1>
            <p className="text-xs text-neutral-400">Admin-Bereich</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm text-neutral-500 hover:text-[#009746] transition-colors"
            >
              → Website ansehen
            </a>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
            >
              Abmelden
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { key: "dashboard" as const, label: "Übersicht" },
            { key: "anfragen" as const, label: `Anfragen ${ungelesen > 0 ? `(${ungelesen})` : ""}` },
            { key: "infos" as const, label: "Meine Daten" },
            { key: "hilfe" as const, label: "Hilfe" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setShowAnfrageDetail(null); }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.key
                  ? "bg-[#009746] text-white"
                  : "bg-white text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-1">
                Willkommen, Herr Eifler 👋
              </h2>
              <p className="text-neutral-500">
                Hier sehen Sie alles Wichtige auf einen Blick.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard label="Neue Anfragen" value={String(ungelesen)} color="text-[#009746]" />
              <StatCard label="Gesamt Anfragen" value={String(anfragen.length)} color="text-neutral-900" />
              <StatCard label="Website Status" value="Online ✓" color="text-[#009746]" />
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-neutral-900 mb-4">Letzte Anfragen</h3>
              <div className="space-y-3">
                {loading ? (
                  <p className="text-neutral-400 text-sm py-4 text-center">Anfragen werden geladen...</p>
                ) : anfragen.length === 0 ? (
                  <p className="text-neutral-400 text-sm py-4 text-center">Noch keine Anfragen eingegangen.</p>
                ) : (
                  anfragen.slice(0, 3).map((a) => (
                  <div
                    key={a.id}
                    className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-colors ${
                      a.gelesen ? "bg-neutral-50" : "bg-green-50 border border-[#009746]/20"
                    }`}
                    onClick={() => { setActiveTab("anfragen"); setShowAnfrageDetail(a); markAsRead(a.id); }}
                  >
                    <div>
                      <p className="font-medium text-neutral-900">
                        {!a.gelesen && <span className="inline-block w-2 h-2 bg-[#009746] rounded-full mr-2" />}
                        {a.name}
                      </p>
                      <p className="text-sm text-neutral-500 truncate max-w-xs md:max-w-md">
                        {a.nachricht}
                      </p>
                    </div>
                    <span className="text-xs text-neutral-400 whitespace-nowrap ml-4">{a.datum}</span>
                  </div>
                ))
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold text-neutral-900 mb-4">Schnellzugriff</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a
                  href="https://www.galabaueifler.de"
                  target="_blank"
                  className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
                >
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-medium text-neutral-900">Website ansehen</p>
                    <p className="text-sm text-neutral-500">www.galabaueifler.de</p>
                  </div>
                </a>
                <a
                  href="https://search.google.com/search-console"
                  target="_blank"
                  className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
                >
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="font-medium text-neutral-900">Google Search Console</p>
                    <p className="text-sm text-neutral-500">SEO & Suchleistung</p>
                  </div>
                </a>
                <a
                  href="mailto:galabau-eifler@gmx.de"
                  className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-medium text-neutral-900">E-Mail öffnen</p>
                    <p className="text-sm text-neutral-500">galabau-eifler@gmx.de</p>
                  </div>
                </a>
                <button
                  onClick={() => setActiveTab("hilfe")}
                  className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors text-left"
                >
                  <span className="text-2xl">❓</span>
                  <div>
                    <p className="font-medium text-neutral-900">Hilfe & Support</p>
                    <p className="text-sm text-neutral-500">Fragen zur Website</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Anfragen Tab */}
        {activeTab === "anfragen" && !showAnfrageDetail && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">Kontaktanfragen</h2>
            <p className="text-neutral-500 mb-6">
              Hier sehen Sie alle Anfragen, die über Ihre Website eingegangen sind.
            </p>
            {loading ? (
              <div className="bg-white rounded-2xl p-8 text-center">
                <p className="text-neutral-400">Anfragen werden geladen...</p>
              </div>
            ) : anfragen.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center">
                <p className="text-neutral-400 text-lg">📭 Noch keine Anfragen eingegangen.</p>
                <p className="text-neutral-400 text-sm mt-2">Sobald jemand das Kontaktformular auf Ihrer Website ausfüllt, erscheinen die Anfragen hier.</p>
              </div>
            ) : (
            anfragen.map((a) => (
              <div
                key={a.id}
                className={`bg-white rounded-2xl p-6 cursor-pointer transition-all hover:ring-2 hover:ring-[#009746]/30 ${
                  !a.gelesen ? "border-l-4 border-[#009746]" : ""
                }`}
                onClick={() => { setShowAnfrageDetail(a); markAsRead(a.id); }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-neutral-900 flex items-center gap-2">
                      {!a.gelesen && (
                        <span className="bg-[#009746] text-white text-xs px-2 py-0.5 rounded-full">
                          Neu
                        </span>
                      )}
                      {a.name}
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">{a.email}</p>
                    <p className="text-neutral-600 mt-3">{a.nachricht}</p>
                  </div>
                  <span className="text-sm text-neutral-400 whitespace-nowrap">{a.datum}</span>
                </div>
              </div>
            ))
            )}
          </div>
        )}

        {/* Anfrage Detail */}
        {activeTab === "anfragen" && showAnfrageDetail && (
          <div className="space-y-6">
            <button
              onClick={() => setShowAnfrageDetail(null)}
              className="text-sm text-neutral-500 hover:text-[#009746] transition-colors"
            >
              ← Zurück zu allen Anfragen
            </button>
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">{showAnfrageDetail.name}</h2>
                  <a
                    href={`mailto:${showAnfrageDetail.email}`}
                    className="text-[#009746] hover:underline"
                  >
                    {showAnfrageDetail.email}
                  </a>
                  {showAnfrageDetail.telefon && (
                    <p className="text-neutral-500 text-sm mt-1">
                      Tel: {showAnfrageDetail.telefon}
                    </p>
                  )}
                </div>
                <span className="text-sm text-neutral-400">{showAnfrageDetail.datum}</span>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed">{showAnfrageDetail.nachricht}</p>
              </div>
              <div className="mt-6 flex gap-3 flex-wrap">
                <a
                  href={`mailto:${showAnfrageDetail.email}?subject=Ihre Anfrage bei Galabau Eifler`}
                  className="bg-[#009746] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#007a38] transition-colors"
                >
                  Per E-Mail antworten
                </a>
                {showAnfrageDetail.telefon && (
                  <a
                    href={`tel:${showAnfrageDetail.telefon}`}
                    className="bg-neutral-100 text-neutral-700 px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                  >
                    Anrufen
                  </a>
                )}
                <button
                  onClick={() => deleteAnfrage(showAnfrageDetail.id)}
                  className="bg-red-50 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-100 transition-colors ml-auto"
                >
                  Löschen
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Meine Daten Tab */}
        {activeTab === "infos" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">Ihre Firmendaten</h2>
            <p className="text-neutral-500">
              Diese Daten werden auf Ihrer Website angezeigt. Bei Änderungen kontaktieren Sie bitte Ihren Webentwickler.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-neutral-900 text-lg">Kontaktdaten</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Firma</p>
                    <p className="text-neutral-900 font-medium">Galabau Eifler</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Inhaber</p>
                    <p className="text-neutral-900 font-medium">Kevin Eifler</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Telefon</p>
                    <p className="text-neutral-900 font-medium">+49 1590 1776367</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">E-Mail</p>
                    <p className="text-neutral-900 font-medium">galabau-eifler@gmx.de</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-neutral-900 text-lg">Adresse & Zeiten</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Adresse</p>
                    <p className="text-neutral-900 font-medium">Rastbachweg 13, 66113 Saarbrücken</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Öffnungszeiten</p>
                    <p className="text-neutral-900 font-medium">Mo–Fr: 8:00–17:00 Uhr</p>
                    <p className="text-neutral-900 font-medium">Sa: 8:00–13:00 Uhr</p>
                    <p className="text-neutral-500 text-sm">Sonntags geschlossen</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 space-y-4 md:col-span-2">
                <h3 className="font-bold text-neutral-900 text-lg">Website</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Domain</p>
                    <p className="text-neutral-900 font-medium">www.galabaueifler.de</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Status</p>
                    <p className="text-[#009746] font-medium">● Online</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Erstellt von</p>
                    <p className="text-neutral-900 font-medium">fylu marketing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <p className="text-yellow-800 font-medium">💡 Daten ändern?</p>
              <p className="text-yellow-700 text-sm mt-1">
                Wenn Sie Ihre Kontaktdaten, Öffnungszeiten oder andere Informationen ändern möchten, 
                kontaktieren Sie bitte Ihren Webentwickler bei{" "}
                <a href="https://fylumarketing.de" target="_blank" className="underline font-medium">
                  fylu marketing
                </a>.
              </p>
            </div>
          </div>
        )}

        {/* Hilfe Tab */}
        {activeTab === "hilfe" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">Hilfe & Häufige Fragen</h2>

            <div className="space-y-4">
              {[
                {
                  frage: "Wie bekomme ich neue Anfragen?",
                  antwort:
                    "Wenn jemand über Ihre Website das Kontaktformular ausfüllt oder Sie per E-Mail kontaktiert, erscheint die Anfrage hier im Admin-Bereich. Sie bekommen außerdem eine E-Mail an galabau-eifler@gmx.de.",
                },
                {
                  frage: "Kann ich die Website-Texte selbst ändern?",
                  antwort:
                    "Die Texte und Bilder auf der Website werden von Ihrem Webentwickler bei fylu marketing gepflegt. Schreiben Sie einfach eine Nachricht, was geändert werden soll – das wird dann zeitnah umgesetzt.",
                },
                {
                  frage: "Wie kann ich meine Öffnungszeiten ändern?",
                  antwort:
                    "Kontaktieren Sie Ihren Webentwickler bei fylu marketing. Die Öffnungszeiten werden dann auf der Website und bei Google aktualisiert.",
                },
                {
                  frage: "Was ist die Google Search Console?",
                  antwort:
                    "Die Google Search Console zeigt Ihnen, wie Ihre Website bei Google gefunden wird. Sie können sehen, welche Suchbegriffe Besucher zu Ihrer Seite führen. Das wird für Sie von fylu marketing betreut.",
                },
                {
                  frage: "Meine Website sieht komisch aus – was tun?",
                  antwort:
                    "Versuchen Sie, die Seite neu zu laden (Strg + F5 oder Cmd + Shift + R). Wenn das Problem weiterhin besteht, kontaktieren Sie fylu marketing.",
                },
                {
                  frage: "Wer kümmert sich um die Technik?",
                  antwort:
                    "Die komplette Technik, Updates und Wartung wird von fylu marketing übernommen. Sie müssen sich um nichts kümmern!",
                },
              ].map((item, index) => (
                <details key={index} className="bg-white rounded-2xl overflow-hidden group">
                  <summary className="p-6 cursor-pointer font-medium text-neutral-900 hover:text-[#009746] transition-colors list-none flex items-center justify-between">
                    {item.frage}
                    <svg
                      className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-neutral-600">{item.antwort}</div>
                </details>
              ))}
            </div>

            <div className="bg-[#009746] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Noch Fragen?</h3>
              <p className="text-white/80 mb-4">
                Bei Fragen oder Problemen erreichen Sie Ihren Webentwickler hier:
              </p>
              <div className="space-y-2">
                <p className="font-medium">fylu marketing</p>
                <a
                  href="https://fylumarketing.de"
                  target="_blank"
                  className="text-[#AFCA1F] hover:underline block"
                >
                  fylumarketing.de
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("galabau-admin");
    setIsLoggedIn(auth === "true");
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#009746] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return <Dashboard />;
}
