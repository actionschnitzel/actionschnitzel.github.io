# Fragenkatalog Linux-Ratgeber (Entwurf zur Besprechung)

Grundlage: Forum-Kritik aus dem Thread "Knallharter Ratgeber für Linux-Interessierte" (Beitrag 271848 und Vorgänger), sowie die aktuellen Fragen in [linux-ratgeber.html](linux-ratgeber.html).

Die Nummerierung ist neu und folgt einer Reihenfolge, bei der jede Frage auf den vorherigen Antworten aufbaut: erst Ziel, dann Erfahrung, dann Hardware, Software, Spiele, Wartung und Fähigkeiten. Die Spalte "Alt" verweist auf die bisherige `data-question`-ID.

## Block A: Ziel und Rahmen

| Nr | Alt | Frage | Kritik / Vorschlag |
|----|-----|-------|--------------------|
| 1 | 7 | Was ist dein Ziel mit dem System? | Erste Frage, damit alles Folgende einordbar ist. Vorschlag: Option "Windows nur beruflich, privat nicht" ergänzen (joka63, /su). "Mehr Kontrolle" und "Richtig lernen" sind unterschiedlich gewichtet, Gewichtung prüfen. |
| 2 | 18 | Willst du Linux neben Windows nutzen oder Windows komplett ersetzen? | Nach Nr. 1 stellen, da das Ziel die Antwort beeinflusst. Kritik: Dual-Boot wird im Ergebnis genannt, aber ohne konkrete Vorschläge (Arkion). Gewichtung ist bei allen drei Optionen gleich (1 Punkt), prüfen. |

## Block B: Erfahrung mit Windows

| Nr | Alt | Frage | Kritik / Vorschlag |
|----|-----|-------|--------------------|
| 3 | 1 | Hast du schon einmal Windows neu installiert? | Passt als Einstieg in die Erfahrung. Keine Kritik. |
| 4 | 24, 27 | Wie installierst du Programme unter Windows? (Mehrfachauswahl) | Zusammengeführt aus Alt 24 und Alt 27. Optionen: Über den Windows Store / Von Webseiten herunterladen / Ich klicke Installationen ohne zu lesen durch / Ich ändere bei der Installation Einstellungen (z. B. Pfad, Zusatzsoftware) / Ich habe noch nie ein Programm installiert. Kritik Steffen/Stardenver: Meldungen sind unklar, Kontext ergänzen. Nr. 5 entfällt, Nummerierung danach bei Abschluss anpassen. |
| 6 | 28 | Wenn etwas auf dem PC nicht funktioniert, wie gehst du vor? | Option ergänzen: "Mindestens einmal, besser zweimal neu starten" (joka63). Stardenver: "Nichts, ich lasse Freunde machen" ist nicht abgebildet, Option "Ich lasse es machen" aufnehmen. |
| 7 | 29 | Wie gehst du mit Anleitungen aus Tutorials auf YouTube um? | Stardenver: Option "Ich gehe gar nicht damit um" fehlt, weil sie nicht auf YouTube-Anleitungen angewiesen ist. Frage ggf. offener formulieren oder nur stellen, wenn Nr. 6 "Freunde" nicht gewählt wurde. |
| 8 | 3 | Hast du schon einmal in der Eingabeaufforderung (CMD), in PowerShell oder mit .cmd-, .bat- oder .ps1-Dateien gearbeitet? | Keine direkte Kritik. Wichtig für die Terminal-Einordnung, daher früh stellen. |

### Schlüsse für das Ergebnis (aus Nr. 4)

- Nur Windows Store: Hinweis, dass Linux-Software über Software-Center (Discover, GNOME Software) und Flatpak kommt.
- Download von Webseiten: Hinweis, Quellen zu prüfen und Paketquellen oder Flatpak zu bevorzugen.
- Klicken ohne zu lesen: Hinweis, bei der Linux-Installation Optionen wie Partitionierung und Secure Boot bewusst zu prüfen.
- Einstellungen ändern: Hinweis, dass die Ersteinrichtung von Linux machbar ist.
- Noch nie installiert: Einsteigerempfehlung mit Live-USB-Stick und einer Anleitung im Ergebnis.

## Block C: Hardware

| Nr | Alt | Frage | Kritik / Vorschlag |
|----|-----|-------|--------------------|
| 9 | 4 | Weißt du, welche Hardware in deinem PC steckt? | Stardenver: "Nein, keine Ahnung" ist eine klare Antwort, Frage passt. Ergänzen: "Laptop, den ich nicht öffnen kann" (dunkelklausner). |
| 9a | neu | Kennst du die wichtigsten Komponenten deines PCs (z. B. Grafikkarte, Prozessor, Mainboard)? | Ersetzt die Frage zum Selbstbau (Alt 2). Wichtiger, da man damit gezielt nach Linux-Kompatibilität recherchieren kann. Optionen: Ja / Teilweise / Nein. Überschneidung mit Nr. 9 prüfen, ggf. zusammenlegen. |
| 10 | 5 | Wie alt ist deine Hardware? | Unklare Gewichtung: Unter 3 Jahre und 3 bis 6 Jahre geben je 1 Punkt, über 6 Jahre 2 Punkte. Begründung klären, bevor die Frage bleibt. |
| 11 | 25 | Hast du mindestens 100 GiB freien Speicher? | Gehört eher in den Installationsblock (Nr. 27 ff.), da es die Installation betrifft. Die Option "Weiß ich nicht" ist mit 1 Punkt bewertet, prüfen. |
| 12 | 22 | Nutzt du eine Nvidia-Grafikkarte? | Keine Kritik. Folgefrage Nr. 13 hängt davon ab. |
| 13 | 23 | Welche Nvidia-Grafikkarte hast du? | Nur sichtbar bei Nr. 12 "Ja". Optionen sind sehr technisch. Vorschlag: Frage für Laien erklären, z. B. mit Hinweis "Name steht im Gerätemanager". |
| 14 | 34 | Nutzt du Spezial-Hardware mit eigener Software? | Keine direkte Kritik. Stellen erst nach Nr. 9 bis 13, damit Kontext vorhanden ist. |

## Block D: Software

| Nr | Alt | Frage | Kritik / Vorschlag |
|----|-----|-------|--------------------|
| 15 | 8 | Welche dieser Programme nutzt du unter Windows? | Steffen: Edge, Discord, Steam, Rockstar Launcher, Paint und Microsoft 365 fehlen. Vorschlag: Option "Anderes Programm (nicht aufgelistet)" ergänzen und die Liste zu den wichtigsten Programmen erweitern. Dunkelklausner: Fragen wirken teils seltsam, Zusammenhang mit der Auswertung klarer machen. |
| 16 | 32 | Ist dir wichtig, dass deine Software frei (Open Source) ist? | Steffen: Erklärung ergänzen, dass Open Source oft kostenlos bedeutet, damit Begriff verständlich ist. |

## Block E: Gaming

| Nr | Alt | Frage | Kritik / Vorschlag |
|----|-----|-------|--------------------|
| 17 | 10 | Wie viel zockst du? | Keine direkte Kritik. Zeigt Nr. 18 nur bei Auswahl "Kaum" oder "Regelmäßig". |
| 18 | 11 | Welche Spiele zockst du? | Steffen: "Kernel-Anti-Cheat" braucht eine Erklärung im Text, z. B. "Schutzprogramm mit tiefem Zugriff auf das System". Liste der Spiele prüfen, Stardenver findet Kernel-Anti-Cheat-Hinweise zu pauschal. |

## Block F: Wartung und Oberfläche

| Nr | Alt | Frage | Kritik / Vorschlag |
|----|-----|-------|--------------------|
| 19 | 12 | Willst du regelmäßig Updates und Änderungen am System? | Steffen: Frage vermischt Updates und Neuerungen. Vorschlag: aufteilen in "Sicherheitsupdates" und "neue Funktionen". |
| 20 | 13 | Willst du immer die neueste Software haben? | Überschneidung mit Nr. 19, daher zusammenlegen oder die Abgrenzung klar machen. |
| 21 | neu | Am meisten stört mich an Updates...? | Vorschlag von Arkion: "Veränderung", "Lästige Pflicht, obwohl ich keine Änderungen sehe", "Mögliche Arbeit danach/Risiko", "Updates stören nicht". Nur übernehmen, wenn die Antwort im Ergebnis genutzt wird. |
| 22 | neu | Welche Windows-Version war dir am angenehmsten? | Vorschlag von Arkion, damit Desktop-Umgebungen (KDE, Cinnamon, GNOME, XFCE) passend gewählt werden. Optionen: XP, 7, 10, angepasst, offen für Neues. Bei Arkions Hinweis zur Distro-Wahl: Distributionen nach Desktop-Umgebung gruppieren. |

## Block G: Fähigkeiten (technisch)

| Nr | Alt | Frage | Kritik / Vorschlag |
|----|-----|-------|--------------------|
| 23 | 14 | Hast du schon einmal einen Windows-Installationsstick erstellt? | Keine direkte Kritik. |
| 24 | 15 | Weißt du, was eine Partition ist? | Keine direkte Kritik. Mit Nr. 25 verknüpfen, da beide zur Festplatte gehören. |
| 25 | 17 | Könntest du eine weitere Festplatte für Linux einbauen? | Freydis: Relevanz für Dual-Boot klären, z. B. "Platz für Linux auf vorhandener Platte" vs. "zweite Platte". Frage ggf. nur bei Nr. 2 "Dual-Boot" stellen. |
| 26 | 16 | Kennst du Secure Boot? | Stardenver/joka63: Hinweis "Deaktivierung Secure Boot" im Ergebnis einordnen, damit Option verständlich ist. |

## Block H: Sprache und Einrichtung

| Nr | Alt | Frage | Kritik / Vorschlag |
|----|-----|-------|--------------------|
| 27 | 30 | Soll das System nach der Installation sofort einsatzbereit sein? | Keine direkte Kritik. Passt zur Wartung (Block F). |
| 28 | 19 | Wie gut kannst du Englisch lesen? | Überschneidung mit Nr. 29, Ergebnis gemeinsam auswerten. |
| 29 | 20 | Wie bereit bist du, englischsprachige Anleitungen zu nutzen? | Siehe Nr. 28. Frage zusammenlegen, falls nur ein Wert gebraucht wird. |
| 30 | 21 | Welche IT-Begriffe kennst du? | Arkion: Das Ergebnis sollte erklären, welche Antworten zum Ergebnis geführt haben ("warum"). Option "Bootloader (z. B. GRUB)" ist nicht getaggt, prüfen. |

## Entfernt bzw. offen

- Alt 2 "Hast du schon einmal einen PC selbst zusammengebaut?": Freydis und dunkelklausner halten sie für wenig aussagekräftig (Handwerk ist nicht IT-Kenntnis). Vorschlag: streichen und durch Nr. 9a ersetzen.
- Mac-Nutzer und Windows nur für Beruf: Die Fragen schließen sie aus (joka63, /su). Klären, ob eine Option "Ich nutze Mac" ergänzt wird.
- Tonfall des Ergebnisses: Steffen und Arkion kritisieren, dass "nur eingeschränkt geeignet" abschreckt und das "warum" fehlt. Gehört zur Ergebnisseite, nicht zum Fragenkatalog.
## Abh\u00e4ngigkeiten (Filterregeln)

Eine Frage wird nur gestellt, wenn die Antwort auf die Vorfrage sie betrifft. Verneint jemand eine Frage, entfallen die Folgefragen.

| Nr | Wird gestellt, wenn | Begr\u00fcndung |
|----|-----------------|--------------|
| 17 (Alt 10) | immer | Vorfrage zum Zocken |
| 18 (Alt 11) | Nr. 17 nicht "Nein" | Spieleliste nur bei Spielern |
| 13 (Alt 23) | Nr. 12 (Alt 22) = "Ja" | Modellauswahl nur bei Nvidia |
| 20 (Alt 13 bzw. Teil von 19) | Nr. 19 (Alt 12) = "Ja" | Nachfrage zu neuster Software nur bei Update-Freunden |
| 21 (neu) | Nr. 19 = "Nur gelegentlich" oder "Nein" | Was st\u00f6rt an Updates, nur bei Updatemuffeln |
| 22 (neu) | Nr. 1 = Ziel "Windows-Oberfl\u00e4che" oder "Mehr Kontrolle" | Desktop-Wahl nur bei Oberfl\u00e4chenwunsch |
| 7 (Alt 29) | Nr. 6 (Alt 28) nicht "Freunde" | Wer Hilfe von Freunden holt, nutzt kein YouTube |
| 29 (Alt 20) | Nr. 28 (Alt 19) nicht "Kaum" | Englischbereitschaft nur bei Englischkenntnissen |
| 11 (Alt 25) | Nr. 2 = "Windows ersetzen" oder "Dual-Boot" | Speicherplatz nur bei Installation |
| 25 (Alt 17) | Nr. 2 = "Dual-Boot" | Zweite Festplatte nur bei Dual-Boot |
| 24 (Alt 15) | Nr. 2 = "Dual-Boot" oder Nr. 25 bejaht | Partitionen nur bei Dual-Boot |
| 23 (Alt 14) | Nr. 2 = "Windows ersetzen" oder "Dual-Boot" | Installationsstick nur bei Installation |
| 26 (Alt 16) | Nr. 2 = "Windows ersetzen" oder "Dual-Boot" | Secure Boot nur bei Installation |

Nr. 2 meint die Frage "Willst du Linux neben Windows nutzen oder Windows komplett ersetzen?", Nr. 1 die Ziel-Frage. Die Zuordnung der Nummern ist vorl\u00e4ufig.
## Zu besprechen

1. Reihenfolge der Blöcke A bis H bestätigen.
2. Streichung von Alt 2 und Ersatz durch Nr. 9a bestätigen; Mac-Option klären.
3. Aufteilung der Update-Fragen (Nr. 19 und 20).
4. Gewichtung bei Nr. 5, 10, 11 und 2.
5. Neue Fragen Nr. 21 und 22 übernehmen?
