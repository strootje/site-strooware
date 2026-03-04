import { getFlags } from "#/functions/env.functions.ts";
import { createFileRoute, redirect } from "@tanstack/solid-router";

// just for the lint rule :)
const tw = (names: TemplateStringsArray) => names.join();

const article = () => tw`grid gap-4 px-8 py-4`;
const header = () => tw`font-title text-2xl`;
const h = () => tw`w-fit text-stone-800 dark:text-stone-200`;

const aside = () => tw`b-l-8 b-teal-800 dark:b-teal-300 rounded bg-stone-100 p-4 dark:bg-stone-600`;

export const Route = createFileRoute("/_site/terms")({
  beforeLoad: async () => {
    const { isFreelancing } = await getFlags();

    if (!isFreelancing) {
      throw redirect({ to: "/" });
    }
  },

  component: () => {
    let articleNum = 0;

    return (
      <div class="prose grid max-w-64ch divide-y divide-teal-800 dark:text-stone-200">
        <article class={article()}>
          <header class={header()}>
            <h2 class={h()}>Algemene Voorwaarden Strooware</h2>
          </header>

          <span>
            <b>Strooware</b>. KvK 75604442 Burgemeester H Spruytlaan 37, 3958 GL Amerongen Versie januari 2025
          </span>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Definities</h3>
          </header>

          In deze algemene voorwaarden wordt verstaan onder:

          <ol>
            <li>
              <b>Strooware:</b>
              de eenmanszaak Strooware, ingeschreven bij de Kamer van Koophandel onder nummer 75604442, gevestigd te
              Burgemeester H Spruytlaan 37, 3958 GL Amerongen.
            </li>

            <li>
              <b>Opdrachtgever:</b>
              de natuurlijke persoon of rechtspersoon die met Strooware een overeenkomst aangaat of wenst aan te gaan.
            </li>

            <li>
              <b>Opdracht/Overeenkomst:</b>
              de schriftelijke of mondeling overeengekomen opdracht tot het verlenen van diensten door Strooware aan
              opdrachtgever.
            </li>

            <li>
              <b>Diensten:</b>
              alle werkzaamheden die Strooware ten behoeve van opdrachtgever verricht, waaronder
              .NET/C#-softwareontwikkeling, infrastructuurbeheer (Kubernetes, cloud), DevOps-diensten en
              ICT-consultancy.
            </li>

            <li>
              <b>Schriftelijk:</b>
              communicatie per brief, e-mail of een andere elektronische weg die redelijkerwijs als schriftelijk kan
              worden aangemerkt.
            </li>
          </ol>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Toepasselijkheid</h3>
          </header>

          <span>
            Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, overeenkomsten en overige
            rechtsbetrekkingen tussen Strooware en opdrachtgever, tenzij uitdrukkelijk en schriftelijk anders
            overeengekomen.
          </span>

          <span>
            Eventuele algemene voorwaarden van opdrachtgever worden uitdrukkelijk van de hand gewezen, tenzij Strooware
            deze schriftelijk en uitdrukkelijk heeft aanvaard.
          </span>

          <span>
            Afwijkingen van en aanvullingen op deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk en
            schriftelijk zijn overeengekomen.
          </span>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Offertes & Totstandkoming</h3>
          </header>

          <span>
            Alle offertes en aanbiedingen van Strooware zijn vrijblijvend en hebben een geldigheidsduur van 30 dagen,
            tenzij anders vermeld.
          </span>

          <span>
            Een overeenkomst komt tot stand op het moment dat opdrachtgever de offerte schriftelijk aanvaardt, of op het
            moment dat Strooware feitelijk is begonnen met de uitvoering van de werkzaamheden na akkoord van
            opdrachtgever.
          </span>

          <span>
            Strooware behoudt zich het recht voor een opdracht te weigeren zonder opgave van redenen.
          </span>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Uitvoering van de opdracht</h3>
          </header>

          <span>
            Strooware zal de opdracht naar beste inzicht en vermogen uitvoeren, overeenkomstig de eisen van goed
            vakmanschap. Alle opdrachten worden aangemerkt als inspanningsverbintenissen, tenzij uitdrukkelijk
            schriftelijk een resultaatsverbintenis is overeengekomen.
          </span>

          <span>
            Opdrachtgever is gehouden alle informatie en medewerking te verlenen die redelijkerwijs noodzakelijk is voor
            de goede uitvoering van de opdracht. Vertragingen die voortvloeien uit het niet of niet tijdig aanleveren
            van benodigde informatie zijn voor rekening en risico van opdrachtgever.
          </span>

          <span>
            Strooware is gerechtigd de opdracht (gedeeltelijk) uit te laten voeren door derden, na overleg met
            opdrachtgever.
          </span>

          <aside class={aside()}>
            Strooware hanteert gangbare professionele normen voor softwareontwikkeling en infrastructuurbeheer,
            waaronder gebruik van versiebeheer, gedocumenteerde configuratie en geaccepteerde beveiligingspraktijken.
          </aside>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Tarieven & Facturering</h3>
          </header>

          <span>
            Alle diensten worden gefactureerd op basis van uurtarief, tenzij schriftelijk anders overeengekomen. Het
            geldende uurtarief is vermeld in de offerte of opdrachtbevestiging.
          </span>

          <span>
            Strooware hanteert een minimale factureereenheid van 30 minuten per activiteit. Reistijd wordt gefactureerd
            op 50% van het geldende uurtarief, tenzij anders overeengekomen.
          </span>

          <span>
            Strooware is gerechtigd het tarief jaarlijks per 1 januari te indexeren met maximaal het
            CBS-consumentenprijsindexcijfer (CPI) over het voorafgaande jaar. Strooware zal opdrachtgever hiervan
            minimaal één maand van tevoren schriftelijk op de hoogte stellen.
          </span>

          <span>
            Alle tarieven zijn exclusief btw, tenzij uitdrukkelijk anders vermeld. Strooware kan op grond van de KOR
            (kleineondernemersregeling) vrijgesteld zijn van btw-afdracht; de toepasselijke situatie wordt op de offerte
            vermeld.
          </span>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Betaling</h3>
          </header>

          <span>
            Facturen dienen te worden voldaan binnen 30 dagen na factuurdatum, tenzij schriftelijk anders
            overeengekomen.
          </span>

          <span>
            Bij overschrijding van de betalingstermijn is opdrachtgever van rechtswege in verzuim en is Strooware
            gerechtigd de wettelijke handelsrente ({++articleNum}:119a BW) in rekening te brengen over het openstaande
            bedrag, te rekenen vanaf de vervaldatum.
          </span>

          <span>
            Indien invordering noodzakelijk blijkt, komen alle buitengerechtelijke en gerechtelijke incassokosten voor
            rekening van opdrachtgever, met een minimum van € 75,–.
          </span>

          <span>
            Strooware behoudt zich het recht voor werkzaamheden op te schorten indien facturen langer dan 14 dagen na de
            vervaldatum onbetaald blijven, na schriftelijke aanmaning.
          </span>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Wijziging van de opdracht</h3>
          </header>

          <span>
            Indien tijdens de uitvoering van de opdracht blijkt dat wijziging of aanvulling van de overeengekomen
            werkzaamheden noodzakelijk is (meerwerk), zal Strooware opdrachtgever hiervan zo spoedig mogelijk
            schriftelijk op de hoogte stellen.
          </span>

          <span>
            Meerwerk wordt gefactureerd op basis van het geldende uurtarief. Strooware is gerechtigd meerwerk reeds te
            beginnen na mondelinge of schriftelijke akkoordverklaring van opdrachtgever.
          </span>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Opzegging & Ontbinding</h3>
          </header>

          <span>
            Beide partijen kunnen de overeenkomst schriftelijk opzeggen met inachtneming van een opzegtermijn van één
            kalendermaand, tenzij anders overeengekomen. Reeds verrichte werkzaamheden en gemaakte kosten worden in dat
            geval naar rato gefactureerd.
          </span>

          <span>
            Strooware is gerechtigd de overeenkomst met onmiddellijke ingang te ontbinden, zonder rechterlijke
            tussenkomst en zonder schadeplichtig te zijn, indien:

            <ol>
              <li>opdrachtgever surseance van betaling aanvraagt of in staat van faillissement wordt verklaard;</li>
              <li>
                opdrachtgever zijn verplichtingen uit de overeenkomst ernstig of herhaaldelijk schendt en herstel niet
                of niet tijdig plaatsvindt na schriftelijke ingebrekestelling;
              </li>
              <li>
                uitvoering van de opdracht naar oordeel van Strooware redelijkerwijs niet langer mogelijk of verantwoord
                is.
              </li>
            </ol>
          </span>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Aansprakelijkheid</h3>
          </header>

          <span>
            Strooware is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van een
            toerekenbare tekortkoming in de nakoming van de overeenkomst.
          </span>

          <span>
            De aansprakelijkheid van Strooware is in alle gevallen beperkt tot het bedrag dat in het desbetreffende
            geval door de beroepsaansprakelijkheidsverzekering van Strooware wordt uitbetaald, dan wel. bij gebreke van
            uitkering. tot het bedrag dat voor de betreffende opdracht in de drie maanden voorafgaand aan het
            schadegeval is gefactureerd, met een maximum van € 10.000,–.
          </span>

          <div>
            <span>Strooware is nimmer aansprakelijk voor:</span>

            <ul>
              <li>indirecte schade, gevolgschade, gederfde winst of omzet;</li>
              <li>
                schade voortvloeiend uit onjuiste, onvolledige of te laat verstrekte informatie door opdrachtgever;
              </li>
              <li>
                schade veroorzaakt door tekortkomingen van door Strooware ingeschakelde derden;
              </li>
              <li>
                schade door het gebruik van of het vertrouwen op adviezen die buiten de schriftelijk overeengekomen
                opdracht vallen.
              </li>
            </ul>

            <span>
              Opdrachtgever vrijwaart Strooware voor aanspraken van derden die verband houden met de uitvoering van de
              opdracht, voor zover deze aanspraken de aansprakelijkheid van Strooware te boven gaan.
            </span>
          </div>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Intellectueel eigendom</h3>
          </header>

          <span>
            Tenzij schriftelijk anders overeengekomen, berusten alle intellectuele eigendomsrechten op door Strooware
            ontwikkelde software, documentatie, ontwerpen en andere werken bij Strooware.
          </span>

          <span>
            Na volledige betaling verleent Strooware aan opdrachtgever een niet-exclusief, niet-overdraagbaar
            gebruiksrecht op de in het kader van de opdracht geproduceerde werken, voor het overeengekomen gebruiksdoel.
          </span>

          <span>
            Opdrachtgever is niet gerechtigd werken van Strooware te verkopen, te verhuren, te sublicentiëren of
            anderszins aan derden ter beschikking te stellen, tenzij schriftelijk anders overeengekomen.
          </span>

          <aside class={aside()}>
            Hergebruik van door Strooware ontwikkelde generieke componenten, bibliotheken of frameworks in andere
            projecten is voorbehouden aan Strooware, tenzij uitdrukkelijk anders overeengekomen.
          </aside>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Vertrouwelijkheid</h3>
          </header>

          <span>
            Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van
            de overeenkomst van elkaar ontvangen. Informatie geldt als vertrouwelijk indien dit uitdrukkelijk is
            aangegeven of indien de vertrouwelijkheid redelijkerwijs uit de aard van de informatie voortvloeit.
          </span>

          <span>
            Deze geheimhoudingsverplichting geldt niet voor informatie die reeds openbaar was, die op rechtmatige wijze
            door de ontvangende partij is verkregen van een derde, of waarvan openbaarmaking wettelijk verplicht is.
          </span>

          <span>
            De geheimhoudingsverplichting geldt gedurende de looptijd van de overeenkomst en twee jaar na beëindiging
            daarvan.
          </span>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Gegevensbescherming</h3>
          </header>

          <span>
            Strooware verwerkt persoonsgegevens van opdrachtgever uitsluitend voor zover noodzakelijk voor de uitvoering
            van de overeenkomst en in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
          </span>

          <span>
            Indien Strooware in het kader van de opdracht persoonsgegevens verwerkt namens opdrachtgever, treden
            partijen zo nodig in overleg over het sluiten van een verwerkersovereenkomst.
          </span>
        </article>

        <article class={article()}>
          <header class={header()}>
            <h3 class={h()}>{++articleNum}. Toepasselijk recht & Geschillen</h3>
          </header>

          <span>
            Op alle overeenkomsten tussen Strooware en opdrachtgever is uitsluitend Nederlands recht van toepassing.
          </span>

          <span>
            Geschillen worden bij voorkeur in goed overleg opgelost. Indien partijen er onderling niet uitkomen, is de
            bevoegde rechter in het arrondissement Midden-Nederland (Utrecht) bij uitsluiting bevoegd kennis te nemen
            van het geschil.
          </span>

          <span>
            Deze algemene voorwaarden zijn gedeponeerd bij de Kamer van Koophandel te Utrecht.
          </span>
        </article>
      </div>
    );
  },
});
