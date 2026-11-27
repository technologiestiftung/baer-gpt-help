# Sicherheitshinweise

## Eine Schwachstelle melden

Bitte melde mutmaßliche Sicherheitslücken per Mail an `security@baergpt.berlin` und eröffne dafür kein öffentliches Issue.

Hilfreich für die Bearbeitung sind:

- Beschreibung des Problems und der möglichen Auswirkung
- betroffene Komponente und URL
- Schritte zur Reproduktion oder ein Proof of Concept
- falls vorhanden: ein Vorschlag zur Behebung

Wir melden uns innerhalb von 5 Werktagen zurück. Gib uns bitte angemessen Zeit, den Fehler zu beheben, bevor du ihn veröffentlichst.

## Geltungsbereich

Dieses Repository enthält das Hilfe-Portal unter `hilfe.baergpt.berlin`. Die Hauptanwendung und das Backend liegen in `technologiestiftung/baergpt`.

Bitte vermeide bei Tests:

- Tests gegen Produktionsdaten
- automatisierte Scanner mit hohem Volumen
- Zugriffe auf Daten, die dir nicht gehören

## Nicht abgedeckt

- Meldungen, die ein bereits kompromittiertes Konto oder Endgerät voraussetzen
- Fehlende HTTP-Sicherheitsheader ohne nachgewiesene Auswirkung
- Denial of Service durch Ressourcenerschöpfung

## Kontakt

Maschinenlesbare Kontaktinformationen:
[https://hilfe.baergpt.berlin/.well-known/security.txt](https://hilfe.baergpt.berlin/.well-known/security.txt)

Hinweise zur Meldepflicht stehen in den Nutzungsbedingungen (§ 6.3):
[https://www.baergpt.berlin/terms-of-use/](https://www.baergpt.berlin/terms-of-use/)
