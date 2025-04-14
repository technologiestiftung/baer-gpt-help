import { AnchorLink } from "../components/primitives/anchor-links/anchor-link";
import { VideoItem } from "../components/faq-content-elements/video-item";

export const faq = {
	top5: {
		questions: [
			{
				question: "Was ist BärGPT und wofür kann ich es nutzen?",
				answer:
					"BärGPT ist ein KI-Assistent mit dem Sie Ihre Dokumente schneller verstehen und bearbeiten können. Sie können Dateien hochladen, im Chat Fragen zu deren Inhalt stellen und auch allgemeine Fragen beantworten lassen. BärGPT hilft Ihnen, Informationen effizient zu finden, Texte zu analysieren oder Inhalte zusammenzufassen.",
			},
			{
				question: "Darf ich vertrauliche Dokumente hochladen?",
				answer:
					"Nein. Bitte laden Sie keine sensiblen oder vertraulichen Daten hoch. BärGPT ist nicht für die Verarbeitung personenbezogener oder schutzwürdiger Informationen vorgesehen. Achten Sie darauf, nur allgemeine oder unkritische Inhalte zu verwenden.",
			},
			{
				question: "Wie beginne ich mit der Nutzung von BärGPT?",
				answer: (
					<div className="flex flex-col gap-5 lg:gap-9">
						<div>
							<p className="mb-3">
								Nach der Anmeldung können Sie direkt loslegen. So starten Sie:
							</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>
									<strong>Datei hochladen</strong> – Klicken Sie auf „Datei
									hochladen“ oder ziehen Sie Ihre Datei per Drag & Drop ins
									Upload-Feld.
								</li>
								<li>
									<strong>Frage stellen</strong> – Geben Sie Ihre erste Frage im
									Chat ein, z.B. „Was steht im Abschnitt zur Budgetplanung?“
								</li>
							</ul>
							<p className="mt-3">
								BärGPT liest Ihre Datei und liefert Ihnen passende Antworten.
							</p>
						</div>
						<div>
							<h4 className="px-3 text-base leading-6 font-semibold">
								Weitere Links, Tutorials und Downloads
							</h4>
							<VideoItem
								title="Erste Schritte mit BärGPT"
								subtitle="Video-Tutorial"
								href="/" //TODO: add the correct link
							/>
							<VideoItem
								title="Dokumente einfach hochladen"
								subtitle="Video-Tutorial"
								href="/" //TODO: add the correct link
							/>
							<VideoItem
								title="Effektive Fragen stellen mit BärGPT"
								subtitle="Video-Tutorial"
								href="/" //TODO: add the correct link
							/>
							<p className="mt-3 italic">
								Tipp: Sie müssen keine formellen Sätze formulieren – schreiben
								Sie Ihre Fragen einfach so, wie Sie sie einem Kollegen oder
								einer Kollegin stellen würden.
							</p>
						</div>
					</div>
				),
			},
			{
				question: "Wie lade ich eine Datei hoch?",
				answer: (
					<div className="flex flex-col gap-5 lg:gap-9">
						<div>
							<p className="mb-3">Sie haben zwei einfache Möglichkeiten:</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>
									<strong>Über die Schaltfläche:</strong> Klicken Sie auf „Datei
									hochladen“ und wählen Sie ein PDF-Dokument von Ihrem Computer
									aus.
								</li>
								<li>
									<strong>Per Drag & Drop:</strong> Ziehen Sie die Datei direkt
									in das Upload-Feld im oberen Bereich der Anwendung.
								</li>
							</ul>
							<p className="mt-3 italic">
								Hinweis: BärGPT unterstützt derzeit nur PDF-Dateien. Achten Sie
								darauf, dass die Datei unbeschädigt ist und die maximale
								Dateigröße nicht überschreitet.
							</p>
						</div>
						<div>
							<h4 className="px-3 text-base leading-6 font-semibold">
								Weitere Links, Tutorials und Downloads
							</h4>
							<VideoItem
								title="Dokumente hochladen leicht gemacht"
								subtitle="Video-Tutorial"
								href="/" //TODO: add the correct link
							/>
						</div>
					</div>
				),
			},
			{
				question: "Wie stelle ich meinem Dokument eine Frage?",
				answer: (
					<div className="flex flex-col gap-5 lg:gap-9">
						<div>
							<p className="mb-3">
								Sobald Sie eine Datei hochgeladen haben, können Sie direkt im
								Chat Fragen zum Inhalt stellen. BärGPT analysiert Ihre Datei und
								liefert relevante Antworten – direkt aus dem Text. Auch mehrere
								hochgeladene Dokumente können gleichzeitig durchsucht werden.
							</p>
						</div>
						<div>
							<h4 className="px-3 text-base leading-6 font-semibold">
								Weitere Links, Tutorials und Downloads
							</h4>
							<VideoItem
								title="Fragen zu Ordnern und Dokumenten im Chat stellen"
								subtitle="Video-Tutorial"
								href="/" //TODO: add the correct link
							/>
						</div>
					</div>
				),
			},
		],
	},

	sections: [
		{
			title: "Einstieg in BärGPT",
			questions: [
				{
					question: "Was ist BärGPT und wofür kann ich es nutzen?",
					answer:
						"BärGPT ist ein KI-Assistent für die Berliner Verwaltung mit dem Sie Ihre Dokumente schneller verstehen und bearbeiten können. Sie können Dateien hochladen, im Chat Fragen zu deren Inhalt stellen und auch allgemeine Fragen beantworten lassen. BärGPT hilft Ihnen, Informationen effizient zu finden, Texte zu analysieren oder Inhalte zusammenzufassen.",
				},
				{
					question: "Wie beginne ich mit der Nutzung von BärGPT?",
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">
									Nach der Anmeldung können Sie direkt loslegen. So starten Sie:
								</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>
										<strong>Datei hochladen</strong> – Klicken Sie auf „Datei
										hochladen“ oder ziehen Sie Ihre Datei per Drag & Drop ins
										Upload-Feld.
									</li>
									<li>
										<strong>Frage stellen</strong> – Geben Sie Ihre erste Frage
										im Chat ein, z.B. „Was steht im Abschnitt zur
										Budgetplanung?“
									</li>
								</ul>
								<p className="mt-3">
									BärGPT liest Ihre Datei und liefert Ihnen passende Antworten.
								</p>
							</div>
							<div>
								<h4 className="px-3 text-base leading-6 font-semibold">
									Weitere Links, Tutorials und Downloads
								</h4>
								<VideoItem
									title="Erste Schritte mit BärGPT"
									subtitle="Video-Tutorial"
									href="/" //TODO: add the correct link
								/>
								<VideoItem
									title="Dokumente einfach hochladen"
									subtitle="Video-Tutorial"
									href="/" //TODO: add the correct link
								/>
								<VideoItem
									title="Effektive Fragen stellen mit BärGPT"
									subtitle="Video-Tutorial"
									href="/" //TODO: add the correct link
								/>
								<p className="mt-3 italic">
									Tipp: Sie müssen keine formellen Sätze formulieren – schreiben
									Sie Ihre Fragen einfach so, wie Sie sie einem Kollegen oder
									einer Kollegin stellen würden.
								</p>
							</div>
						</div>
					),
				},
			],
		},
		{
			title: "Datenschutz & Sicherheit",
			questions: [
				{
					question:
						"Gibt es eine offizielle Orientierungshilfe zur Nutzung von KI-Chatbots in der Berliner Verwaltung?",
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							Ja. Die Senatskanzlei hat eine „Orientierungshilfe zum Umgang mit
							LLM-basierten Chatbots im Land Berlin“ veröffentlicht. Sie enthält
							Empfehlungen, Einsatzgrenzen und datenschutzrechtliche Hinweise
							zur Nutzung generativer KI in der Verwaltung.
							<div>
								<AnchorLink
									href="https://www.berlin.de/politik-und-verwaltung/rundschreiben/download.php/4329261"
									rel="noopener noreferrer"
									title='Link zum Rundschreiben „Orientierungshilfe zum Umgang mit LLM-basierten Chatbots im Land Berlin"'
								/>
							</div>
						</div>
					),
				},
				{
					question: "Darf ich vertrauliche Dokumente hochladen?",
					answer:
						"Nein. BärGPT ist nicht für die Verarbeitung von personenbezogenen, vertraulichen oder schutzwürdigen Informationen geeignet. Bitte laden Sie ausschließlich allgemeine und unkritische Inhalte hoch – z.B. öffentlich zugängliche Berichte, Informationsmaterial oder neutralisierte Arbeitsdokumente.",
				},
				{
					question: "Werden meine Daten zum Training des KI-Modells verwendet?",
					answer:
						"Nein. Die Inhalte, die Sie in BärGPT eingeben oder hochladen, werden nicht zur Weiterentwicklung oder zum Training des zugrunde liegenden Sprachmodells verwendet. Das Modell greift nicht auf Ihre Inhalte zurück, um andere Nutzende zu bedienen. Ihre Daten bleiben isoliert und kontrolliert.",
				},
				{
					question: "Wo und wie werden meine Daten gespeichert?",
					answer:
						"Die Speicherung erfolgt DSGVO-konform auf Servern innerhalb der Europäischen Union. Zugriff haben ausschließlich autorisierte Systeme innerhalb der BärGPT-Infrastruktur. Es erfolgt keine Verarbeitung außerhalb der EU.",
				},
				{
					question:
						"Welche Risiken bestehen bei der Nutzung von KI-Chatbots wie BärGPT? ",
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p>
									KI-Chatbots arbeiten probabilistisch – sie „vermuten“
									Antworten auf Basis von Wahrscheinlichkeiten.
								</p>
								<p className="my-3">
									Auch wenn BärGPT sehr präzise arbeitet, kann es:
								</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>zu falschen oder unvollständigen Antworten kommen</li>
									<li>
										Kontext falsch interpretieren, wenn Informationen fehlen
									</li>
									<li>keine jurisch verbindlichen Aussagen treffen</li>
								</ul>
								<p className="mt-3">
									Verwenden Sie BärGPT zur Unterstützung – nicht zur finalen
									Bewertung oder Entscheidung
								</p>
							</div>
						</div>
					),
				},
				{
					question:
						"Was kann ich tun, wenn ich unsicher bin, ob ein Dokument geeignet ist?",
					answer: (
						<div>
							<p className="mb-3">
								Wenn Sie Zweifel haben, ob ein Dokument datenschutzkonform
								hochgeladen werden kann:
							</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>Prüfen Sie, ob personenbezogene Daten enthalten sind. </li>
								<li>
									Klären Sie bei Bedarf mit Ihrer Datenschutzbeauftragten
									Stelle, ob eine Nutzung erlaubt ist.
								</li>
								<li>
									Alternativ: Anonymisieren oder abstrahieren Sie die Inhalte
									vor dem Upload.
								</li>
							</ul>
						</div>
					),
				},
				{
					question: "Welches Modell wird aktuell verwendet für BärGPT?",
					answer:
						"BärGPT nutzt derzeit das Modell mistral-small-latest, das vom Unternehmen Mistral entwickelt und gehostet wird. Es handelt sich um ein Open-Source-Modell des Unternehmens Mistral, das datenschutzkonform auf Servern in Frankreich betrieben wird. Das Modell erfüllt die Anforderungen der Datenschutz-Grundverordnung (DSGVO) und wurde so in BärGPT eingebunden, dass Ihre Daten nicht für Trainingszwecke verwendet werden. Alle Inhalte, die Sie in den Chat eingeben oder hochladen, werden lediglich zur direkten Beantwortung Ihrer Anfrage genutzt und verlassen nicht die gesicherte Umgebung.",
				},
				{
					question: "Ist BärGPT Open Source und kann frei genutzt werden?",
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>
								Ja. BärGPT ist ein Open Source-Projekt, das von der
								Technologiestiftung Berlin entwickelt wurde. Der Quellcode ist
								öffentlich zugänglich und kann transparent eingesehen,
								weiterentwickelt oder angepasst werden.
							</p>
							<div>
								<h4 className="px-3 pt-3 text-base leading-6 font-semibold">
									Hier finden Sie die Repositories:
								</h4>

								<div className="px-1 lg:px-3 py-3 border-b-[0.5px] border-dunkelblau-200">
									<AnchorLink
										href="https://github.com/technologiestiftung/baer-gpt-v2-api-database"
										rel="noopener noreferrer"
										title="BärGPT Backend (API & Datenbank)"
									/>
								</div>

								<div className="px-1 lg:px-3 py-3">
									<AnchorLink
										href="https://github.com/technologiestiftung/baer-gpt-v2-frontend"
										rel="noopener noreferrer"
										title="BärGPT Frontend (Weboberfläche)"
									/>
								</div>
							</div>
						</div>
					),
				},
			],
		},
		{
			title: "Arbeiten mit Dateien",
			questions: [
				{
					question: "Wie lade ich eine Datei hoch?",
					answer: (
						<div>
							<p className="mb-3">Sie haben zwei einfache Möglichkeiten:</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>
									<strong>Über die Schaltfläche:</strong> Klicken Sie auf „Datei
									hochladen“ und wählen Sie ein PDF-Dokument von Ihrem Computer
									aus.
								</li>
								<li>
									<strong>Per Drag & Drop:</strong> Ziehen Sie die Datei direkt
									in das Upload-Feld im oberen Bereich der Anwendung.
								</li>
							</ul>
							<p className="mt-3 italic">
								Hinweis: BärGPT unterstützt derzeit nur PDF-Dateien. Achten Sie
								darauf, dass die Datei unbeschädigt ist und die maximale
								Dateigröße nicht überschreitet.
							</p>
						</div>
					),
				},
				{
					question: "Welche Dateiformate unterstützt BärGPT?",
					answer:
						"Aktuell unterstützt BärGPT das Hochladen von PDF-Dateien und wird zu einem späteren Zeitpunkt um weitere Dateiformate erweitert.",
				},
				{
					question: "Warum dauert der Dateiupload so lange?",
					answer:
						"Nach dem Hochladen wird Ihre Datei nicht nur gespeichert, sondern auch im Hintergrund verarbeitet – z. B. analysiert, in lesbare Textformate umgewandelt und für den Chat vorbereitet. Je nach Größe und Inhalt der Datei kann das einige Sekunden dauern.",
				},
				{
					question: "Was passiert, wenn ich eine Datei lösche?",
					answer:
						"Gelöschte Dateien werden unwiderruflich entfernt und sind nicht wiederherstellbar.",
				},
				{
					question: "Warum kann ich mein Dokument nicht hochladen?",
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">
									Wenn der Upload nicht funktioniert, kann das verschiedene
									Gründe haben.
								</p>
								<p className="mb-3">Häufige Ursachen:</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>
										<strong>Die Datei ist zu groß:</strong> BärGPT unterstützt
										Dateien bis maximal 50 MB.
									</li>
									<li>
										<strong>Falsches Dateiformat:</strong> Aktuell werden nur
										PDF-Dateien akzeptiert.
									</li>
									<li>
										<strong>Technisches Problem beim Upload:</strong> Die
										Verbindung war möglicherweise instabil oder der Server
										vorübergehend nicht erreichbar. Versuchen Sie es bitte nach
										kurzer Zeit erneut.
									</li>
									<li>
										<strong>Datei mit gleichem Namen existiert bereits:</strong>
										In diesem Fall können Sie entweder die bestehende Datei
										löschen und dann neu hochladen oder die neue Datei unter
										einem leicht veränderten Namen abspeichern.
									</li>
								</ul>
								<p className="mt-3 italic">
									Tipp: Wenn das Problem weiterhin besteht, laden Sie eine
									andere Testdatei hoch – so können Sie eingrenzen, ob es am
									Dokument selbst liegt.
								</p>
							</div>
							<div>
								<h4 className="px-3 text-base leading-6 font-semibold">
									Weitere Links, Tutorials und Downloads
								</h4>
								<VideoItem
									title="Dokumente hochladen leicht gemacht"
									subtitle="Video-Tutorial"
									href="/" //TODO: add the correct link
								/>
							</div>
						</div>
					),
				},
				{
					question: "Wie lege ich einen Ordner an?",
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>
								Klicken Sie im Dateibereich auf die Schaltfläche „Neuer Ordner“.
								Geben Sie anschließend einen Namen ein und bestätigen Sie mit
								Enter. Der Ordner erscheint sofort in Ihrer Übersicht.
							</p>
							<div>
								<h4 className="px-3 pt-3 text-base leading-6 font-semibold">
									Weitere Links, Tutorials und Downloads
								</h4>
								<VideoItem
									title="Ordner erstellen und Dateien sortieren"
									subtitle="Video-Tutorial"
									href="/" //TODO: add the correct link
								/>
							</div>
						</div>
					),
				},
				{
					question: "Wie lösche ich einen Ordner?",
					answer: (
						<div>
							<p className="mb-3">
								Um einen Ordner zu löschen, gehen Sie wie folgt vor:
							</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>Wählen Sie den Ordner aus, den Sie entfernen möchten.</li>
								<li>Klicken Sie auf das Papierkorb-Symbol oben rechts.</li>
								<li>Bestätigen Sie die Löschung im angezeigten Dialog.</li>
							</ul>
						</div>
					),
				},
				{
					question: "Kann ich Dateien und Ordner umbenennen? ",
					answer:
						"Derzeit ist das Umbenennen von Dateien und Ordnern leider nicht möglich. Wir arbeiten daran, diese Funktion in einer zukünftigen Version bereitzustellen. Bis dahin empfehlen wir, Dateien bereits vor dem Hochladen sinnvoll zu benennen, um die Übersicht zu behalten.",
				},
				{
					question: "Wie verschiebe ich eine Datei in einen anderen Ordner?",
					answer:
						"Ziehen Sie die Datei einfach per Drag & Drop in den gewünschten Ordner.",
				},
			],
		},
		{
			title: "Arbeiten im Chat (Prompting)",
			questions: [
				{
					question: "Wie chatte ich mit meinen Dateien?",
					answer:
						"Sobald Sie eine Datei hochgeladen haben, können Sie Fragen zu deren Inhalt stellen. Beispiel: „Was steht im Abschnitt zur Budgetplanung?“ BärGPT analysiert die Datei und liefert relevante Antworten aus dem Text. Auch mehrere Dateien können gleichzeitig durchsucht werden",
				},
				{
					question: "Kann ich mehrere Dateien gleichzeitig befragen? ",
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>
								Ja, BärGPT berücksichtigt alle hochgeladenen und danach
								ausgewählten Dateien beim Beantworten Ihrer Fragen.
							</p>
							<div>
								<h4 className="px-3 pt-3 text-base leading-6 font-semibold">
									Weitere Links, Tutorials und Downloads
								</h4>
								<VideoItem
									title="Fragen zu Ordnern und Dokumenten im Chat stellen"
									subtitle="Video-Tutorial"
									href="/" //TODO: add the correct link
								/>
							</div>
						</div>
					),
				},
			],
		},
		{
			title: "Konto & Anmeldung",
			questions: [
				{
					question: "Wie erstelle ich ein Benutzerkonto?",
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>
								Sie können Ihr Konto direkt auf der Startseite erstellen, indem
								Sie ein Konto erstellen, indem Sie Ihre E-Mail-Adresse und ein
								Passwort eingeben. Im Anschluss klicken Sie auf den Link in der
								Bestätigungs-E-Mail.
							</p>
							<div>
								<h4 className="px-3 pt-3 text-base leading-6 font-semibold">
									Weitere Links, Tutorials und Downloads
								</h4>
								<VideoItem
									title="Erste Schritte mit BärGPT"
									subtitle="Video-Tutorial"
									href="/" //TODO: add the correct link
								/>
							</div>
						</div>
					),
				},
				{
					question: "Warum kann ich mich nicht einloggen? ",
					answer: (
						<div>
							<p className="mb-3">
								Es kann mehrere Gründe geben, warum der Login nicht
								funktioniert:
							</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>
									Falsche E-Mail-Adresse oder Passwort: Stellen Sie sicher, dass
									Sie die korrekten Anmeldedaten verwenden. Achten Sie auf
									Tippfehler und Groß-/Kleinschreibung.
								</li>
								<li>
									Passwort vergessen: Klicken Sie auf „Passwort vergessen?“ auf
									der Login-Seite, um ein neues Passwort festzulegen.
								</li>
								<li>
									Konto noch nicht erstellt: Wenn Sie sich zum ersten Mal
									anmelden, müssen Sie zunächst ein Benutzerkonto anlegen.
								</li>
								<li>
									Technisches Problem: Es kann vorübergehend zu Störungen
									kommen. Versuchen Sie es später noch einmal.
								</li>
							</ul>
						</div>
					),
				},
			],
		},
		{
			title: "Weitere Hilfe",
			questions: [
				{
					question: "Wo finde ich weitere Unterstützung?",
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							{/* todo add email */}
							<p>
								Schauen Sie in unsere Video-Tutorials oder kontaktieren Sie den
								Support über [E-Mail-Adresse].
							</p>
							<div>
								<h4 className="px-3 pt-3 text-base leading-6 font-semibold">
									Weitere Links, Tutorials und Downloads
								</h4>
								<div className="px-1 lg:px-3 py-3">
									<AnchorLink
										href="/tutorials"
										rel="noopener noreferrer"
										title="Link zur Video-Tutorials Seite"
									/>
								</div>
							</div>
						</div>
					),
				},
				{
					question: "Kann ich BärGPT für meinen Bereich anpassen lassen?",
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p>
									BärGPT ist eine flexible KI-Infrastruktur, die für
									unterschiedliche Anwendungsfälle und Kontexte angepasst werden
									kann – speziell für die Anforderungen in der Berliner
									Verwaltung.
								</p>
								<p>
									Hinweise und Empfehlungen zum Umgang mit generativen
									KI-Anwendungen finden Sie in dem Rundschreiben des Landes
									Berlin. Dort erhalten Sie offizielle Informationen zu
									Einsatzgrenzen, Datenschutz und Nutzungsempfehlungen.
								</p>
							</div>
							<div>
								<h4 className="px-3 pt-3 text-base leading-6 font-semibold">
									Weitere Links, Tutorials und Downloads
								</h4>
								<div className="px-1 lg:px-3 py-3">
									<AnchorLink
										href="https://www.berlin.de/politik-und-verwaltung/rundschreiben/download.php/4329258"
										rel="noopener noreferrer"
										title="Rundschreiben zum Umgang mit generativen KI-Anwendungen in der Berliner Verwaltung"
									/>
								</div>
							</div>
						</div>
					),
				},
			],
		},
	],
};
