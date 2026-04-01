import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "anfragen.json");

interface Anfrage {
  id: number;
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
  datum: string;
  gelesen: boolean;
}

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
}

function readAnfragen(): Anfrage[] {
  ensureDataFile();
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

function writeAnfragen(anfragen: Anfrage[]) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(anfragen, null, 2));
}

// GET: Alle Anfragen abrufen (für Admin)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const auth = searchParams.get("auth");

  // Einfache Auth-Prüfung
  if (auth !== "galabau2026") {
    return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  }

  const anfragen = readAnfragen();
  return NextResponse.json(anfragen);
}

// POST: Neue Anfrage erstellen (vom Kontaktformular)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, telefon, nachricht } = body;

    if (!name || !email || !nachricht) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind Pflichtfelder" },
        { status: 400 }
      );
    }

    const anfragen = readAnfragen();

    const neueAnfrage: Anfrage = {
      id: Date.now(),
      name,
      email,
      telefon: telefon || "",
      nachricht,
      datum: new Date().toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      gelesen: false,
    };

    anfragen.unshift(neueAnfrage);
    writeAnfragen(anfragen);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Fehler beim Speichern der Anfrage" },
      { status: 500 }
    );
  }
}

// PATCH: Anfrage als gelesen markieren
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, auth } = body;

    if (auth !== "galabau2026") {
      return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
    }

    const anfragen = readAnfragen();
    const index = anfragen.findIndex((a) => a.id === id);

    if (index === -1) {
      return NextResponse.json({ error: "Anfrage nicht gefunden" }, { status: 404 });
    }

    anfragen[index].gelesen = true;
    writeAnfragen(anfragen);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Fehler beim Aktualisieren" },
      { status: 500 }
    );
  }
}

// DELETE: Anfrage löschen
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, auth } = body;

    if (auth !== "galabau2026") {
      return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
    }

    let anfragen = readAnfragen();
    anfragen = anfragen.filter((a) => a.id !== id);
    writeAnfragen(anfragen);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Fehler beim Löschen" },
      { status: 500 }
    );
  }
}
