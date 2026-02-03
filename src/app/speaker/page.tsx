import Link from 'next/link';

export default function SpeakerPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Speaking & Activities</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          I'm passionate about sharing knowledge and engaging with the tech community. 
          Here's a list of my talks, workshops, and other activities.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold border-b pb-2">Talks</h2>
        <p className="text-gray-600 italic">
          I'd be very happy to visit your event or company with one of these, just 
          <a href="https://www.linkedin.com/in/perdekdawid" className="text-blue-600 hover:underline mx-1">let me know</a> 
          if you're interested.
        </p>
        <div className="grid gap-4">
          <div className="p-4 rounded-lg border bg-gray-50/50">
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>[PL] Kiedy Angular i React są śrubokrętem, a kiedy wkrętarką?</li>
              <li>[PL] Mapa dobrych praktyk wytwarzania oprogramowania
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li>[EN] You're on a quest for good software quality and here's your map</li>
                </ul>
              </li>
              <li>[EN] My first (well tested) smart contract!
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li>[PL] Twoja pierwsza aplikacja web3</li>
                </ul>
              </li>
              <li>[PL] Angular Signals: A komu to potrzebne? A dlaczego?</li>
              <li>[PL] Event Storming w służbie tokenomii
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li>[EN] How Event Storming can serve tokenomics?</li>
                </ul>
              </li>
              <li>[PL] "Musisz Tylko" Design czyli jak utrudniamy sobie pracę
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li>[EN] "You Just Have To" Design: How we make our lives more difficult?</li>
                </ul>
              </li>
              <li>[PL] Wstęp do inwestowania (4-częściowa seria dla tych co nie wiedzą czy i jak się za to zabrać)</li>
              <li>[PL] Czy AI przejmie Twój soft house?</li>
              <li>[PL] DDD na froncie + krótkie case study
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li>[EN] DDD at the front + short case study</li>
                </ul>
              </li>
              <li>[PL] Testy mutacyjne - trochę teorii i trochę praktyki ze Stryker.js</li>
              <li>[PL] Intro to Angular 18</li>
              <li>[PL] 5 sposobów na uwalenie startupu</li>
              <li>[PL/EN] Angular Forms Showdown: Template vs. Reactive vs. Signal</li>
              <li>[PL] Czego rapujący prawnik nauczy Cię o programowaniu?</li>
              <li>[PL] Jak projektowana jest elektronika, której używasz na co dzień?</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold border-b pb-2">Activities and Appearances</h2>
        
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">2026</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>[PL] Mentor (online) @ <a href="https://criticalhackathon.com/" className="text-blue-600 hover:underline">European Critical Infrastructure Hackathon</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">2025</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>[PL] Mentor @ <a href="https://bkihack.pl/history/8-bydgoski-hackathon" className="text-blue-600 hover:underline">BKI Hack hackathon</a></li>
              <li>[PL] <a href="https://www.meetup.com/gdansk-typescript/events/306376219/" className="text-blue-600 hover:underline">#14 Gdańsk Typescript meetup</a> (#8)</li>
              <li>[PL] <a href="https://2025.boilingfrogs.pl/" className="text-blue-600 hover:underline">Boiling Frogs</a> (#8)</li>
              <li>[PL] 2x individual public speaking mentoring</li>
              <li>[PL] <a href="https://crossweb.pl/en/events/meet-js-poznan-03-2025-60/" className="text-blue-600 hover:underline">#60 Meet.js Poznań</a> (#8)</li>
              <li>[PL] <a href="https://sfi.pl/pl" className="text-blue-600 hover:underline">20. Studencki Festiwal Informatyczny</a> (#12) + acting as a host for a couple of talks</li>
              <li>[PL] <a href="https://www.meetup.com/ng-lodz/events/307300288/" className="text-blue-600 hover:underline">ngŁodź #17</a> (#2)</li>
              <li>[PL] <a href="https://www.meetup.com/ngkato/events/307420140/" className="text-blue-600 hover:underline">ngKato #6</a> (#8)</li>
              <li>[EN] <a href="https://www.meetup.com/angular-warsaw/events/310498423/" className="text-blue-600 hover:underline">Angular Summer Camp 2025 Beach Edition</a> panelist in two discussion panels: "Evolution of Signal-based APIs" and "AI in Angular Development"</li>
              <li>[PL] <a href="https://www.meetup.com/toru%C5%84-web-development/events/310732606/" className="text-blue-600 hover:underline">GDG Toruń</a> (#13)</li>
              <li>[PL] <a href="https://phpers.pl/meetup/2025/09/23/phpers-wroclaw-23/" className="text-blue-600 hover:underline">PHPers Wrocław #23</a> (#14)</li>
              <li>[PL] <a href="https://www.beyondcode.pl/" className="text-blue-600 hover:underline">Beyond Code</a> (#14) + panelist in two discussion panels: "Kreatywność poza schematami" and "AI w codziennej pracy developera"</li>
              <li>[PL] Mentor, lead judge & speaker @ <a href="https://hackyeah.pl/pl/" className="text-blue-600 hover:underline">HackYeah hackathon</a> (#12)</li>
              <li>[PL] general support to <a href="https://www.meetup.com/pl-PL/angularwroclaw/" className="text-blue-600 hover:underline">Angular Wrocław</a> organizers</li>
              <li>[PL] pitching <a href="https://www.followuper.pl/" className="text-blue-600 hover:underline">Followuper</a> at <a href="https://pitchmeetup.pl/" className="text-blue-600 hover:underline">PitchMeetUp</a></li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=NCulfWc9r7Q" className="text-blue-600 hover:underline">SysOps/DevOps Katowice MeetUp #21</a> (#15)</li>
              <li>[PL] <a href="https://4developers.org.pl/4developers-katowice-2025/" className="text-blue-600 hover:underline">4 Developers Katowice</a> (#15) + moderator of the discussion panel "Przyszłość napędzana technologią: energetyka, elektronika, automatyka, AI, software." + program committee (Future Industry track)</li>
              <li>[PL] Online Mentor @ <a href="https://bkihack.pl/history/2-torunski-hackathon" className="text-blue-600 hover:underline">BKI Hack hackathon</a></li>
              <li>[PL] <a href="https://www.youtube.com/live/NQS12C5droM?si=FU9Xy-Se8atTm0Ck&t=3530" className="text-blue-600 hover:underline">meet.js Gdansk TypeScript Meetup #17</a> (#15)</li>
              <li>[PL] Mentor @ <a href="https://hacknation.pl/" className="text-blue-600 hover:underline">HackNation 2025 hackathon</a></li>
              <li>[EN] <a href="https://www.meetup.com/heitech-meetup/events/312009979/" className="text-blue-600 hover:underline">HeiTech Meetup Xmass Edition: JavaScript</a> (#13)</li>
              <li>[PL] Frontend Meetup @ Xebia (#13)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">2024</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>[PL] <a href="https://crossweb.pl/wydarzenia/torun-web-development-meetup-2/" className="text-blue-600 hover:underline">Toruń Web Development Meetup #2 (now: GDG Toruń)</a> (#2)</li>
              <li>[PL] <a href="https://crossweb.pl/wydarzenia/codefrenzy-2024/" className="text-blue-600 hover:underline">Codefrenzy 2024</a> (#9)</li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=-XywVCYFM0o&list=PLJB1QdtU1vs-CzGyra6xchMek5MglGx5t&index=3&ab_channel=SynergyCodes" className="text-blue-600 hover:underline">Synergy Codes' "Dev in 5 minutes" episode about Slack features</a>
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li><a href="https://www.youtube.com/shorts/MqAF0TteTgk" className="text-blue-600 hover:underline">short no. 1</a></li>
                  <li><a href="https://www.instagram.com/reel/C4iKJ_dsy_3/?hl=pl" className="text-blue-600 hover:underline">short no. 2</a></li>
                </ul>
              </li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=-PGcGUfjJRE&t=2s&ab_channel=SlaskaGrupaMicrosoft" className="text-blue-600 hover:underline">Śląska Grupa Microsoft</a> (#2)</li>
              <li>[PL] <a href="https://www.instagram.com/reel/C4u6UolMoAb/?hl=pl" className="text-blue-600 hover:underline">Synergy Codes' reel about Gallup talent: Strategic</a></li>
              <li>[PL] Leading "Synergy Speakers" - internal public speaking mentoring in Synergy Codes</li>
              <li>[PL] 2x individual public speaking mentoring</li>
              <li>[PL] <a href="https://www.meetup.com/angularwroclaw/events/301151447/?eventOrigin=group_events_list" className="text-blue-600 hover:underline">Angular Wrocław #39</a> (#8)</li>
              <li>[PL] Mentor and lead judge @ <a href="https://hackyeah.pl/pl/" className="text-blue-600 hover:underline">HackYeah hackathon</a> + mentoring session with six teams after the event</li>
              <li>[PL] 2x <a href="https://www.merito.pl/poznan/studia-i-szkolenia/studia-podyplomowe/kierunki/zarzadzanie-projektem-akademia-project-managera-0" className="text-blue-600 hover:underline">WSB Merito Akademia Project Managera</a> - conducting one day of workshops about Agile methodologies, MVP, identifying personas, project roadmaps, Event Storming, User Story Mapping, etc.</li>
              <li>[EN] <a href="https://warszawskiedniinformatyki.pl/en/" className="text-blue-600 hover:underline">Warsaw IT Days 2024</a> (#9)</li>
              <li>[PL] <a href="https://katowice.infoshare.pl/" className="text-blue-600 hover:underline">Infoshare Katowice 2024</a> (#9)</li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=DxT3jKdO2Ng&ab_channel=mergeIT" className="text-blue-600 hover:underline">Merge IT #4</a> (#10)</li>
              <li>[PL] <a href="https://crossweb.pl/wydarzenia/at-an-angle-into-angular-18/" className="text-blue-600 hover:underline">GDG Toruń</a> (#11)</li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=X4iQxlq0irY&ab_channel=EscolaAI" className="text-blue-600 hover:underline">#10 Gdańsk TypeScript meetup</a> (#9)</li>
              <li>[PL] <a href="https://www.youtube.com/live/xrCgvfS5xLU?si=u3CgkZCvVd4sT_Nh&t=7810" className="text-blue-600 hover:underline">#12 Gdańsk TypeScript meetup</a> (#10)</li>
              <li>[PL] 4 Developers 2024 (#8)</li>
              <li>[PL] 4 Developers Katowice (#10)</li>
              <li>[PL] 4 Developers Wrocław (#10)</li>
              <li>[PL] 4 Developers Łódź (#10) + program committee (Application Architecture track)</li>
              <li>[PL] Reviewer of <a href="https://horyzontlidera.pl/" className="text-blue-600 hover:underline">Horyzont Lidera</a></li>
              <li>[PL] general support to <a href="https://www.meetup.com/pl-PL/angularwroclaw/" className="text-blue-600 hover:underline">Angular Wrocław</a> organizers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">2023</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>[PL] <a href="https://www.youtube.com/watch?v=IC0CZfiEZCk&ab_channel=BoredFoundersClub" className="text-blue-600 hover:underline">BFC Fiesta 2023</a> (#6)</li>
              <li>[PL] <a href="https://crossweb.pl/wydarzenia/phpers-wroclaw-16/" className="text-blue-600 hover:underline">PHPers Wrocław #16</a> (#6)</li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=9G2tiEu-1DQ" className="text-blue-600 hover:underline">18. Studencki Festiwal Informatyczny Kraków</a> (#2)</li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=ug0Fre9TbCM&list=PLJB1QdtU1vs-x2I9pbC3anN3_rufFxyKO" className="text-blue-600 hover:underline">Dev.js Summit</a> (#4)</li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=hrmHQ6qLDHg&list=PLJB1QdtU1vs-x2I9pbC3anN3_rufFxyKO" className="text-blue-600 hover:underline">Dev.js Summit autumn edition</a> (#4)</li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=lA8UHKyWjVE&list=PLJB1QdtU1vs-x2I9pbC3anN3_rufFxyKO" className="text-blue-600 hover:underline">Frontend Architecture podcast about frontend state management</a></li>
              <li>[EN] <a href="https://www.synergycodes.com/blog/how-to-boost-public-speaking-skills" className="text-blue-600 hover:underline">Synergy Codes' article about internal public speaking workshops I was hosting for almost two years</a></li>
              <li>[PL] <a href="https://www.instagram.com/reel/CrdBBcAAja7/?hl=pl" className="text-blue-600 hover:underline">Synergy Codes' reel about Gallup talent: Learner</a></li>
              <li>[PL] Leading "Synergy Speakers" - internal public speaking mentoring in Synergy Codes</li>
              <li>[PL] Individual public speaking mentoring</li>
              <li>[PL] Mentor and judge @ <a href="https://hackyeah.pl/pl/" className="text-blue-600 hover:underline">HackYeah hackathon</a></li>
              <li>[PL] <a href="https://www.meetup.com/angularwroclaw/events/295774941/?eventOrigin=group_events_list" className="text-blue-600 hover:underline">Angular Wrocław #35</a> (#4)
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li><a href="https://www.youtube.com/watch?v=DkaTYhU3p4M&ab_channel=SynergyCodes" className="text-blue-600 hover:underline">behind the scenes</a></li>
                </ul>
              </li>
              <li>[PL] Webinar for Nowoczesny Junior community (#9)</li>
              <li>[PL] <a href="https://crossweb.pl/wydarzenia/meet-js-wroclaw-26-10/" className="text-blue-600 hover:underline">Meet.js Wrocław</a> (#2)</li>
              <li>[PL] 4 Developers Katowice (#4)</li>
              <li>[PL] 4 Developers Poznań (#4)</li>
              <li>[PL] 4 Developers Wrocław (#4) — <a href="https://www.youtube.com/watch?v=QPi0C9xW9AM&ab_channel=Micha%C5%82Bia%C5%82ecki" className="text-blue-600 hover:underline">Michał's vlog</a></li>
              <li>[PL] 4 Developers Łódź (#2)</li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=zWWUdhTewCE&list=PLnKL6-WWWE_WGVQynCR2WrC2P0_OsGq_r&index=13&ab_channel=PROIDEAEvents" className="text-blue-600 hover:underline">4 Developers Łódź</a> (#4)</li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=vn-_GzQlduY&list=PLnKL6-WWWE_WGVQynCR2WrC2P0_OsGq_r&index=17&ab_channel=PROIDEAEvents" className="text-blue-600 hover:underline">4 Developers Łódź</a> (#9)</li>
              <li>[PL] general support to <a href="https://www.meetup.com/pl-PL/angularwroclaw/" className="text-blue-600 hover:underline">Angular Wrocław</a> organizers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">2022</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>[EN] <a href="https://www.synergycodes.com/blog/effective-recruitment-process-through-the-eyes-of-synergy-codes" className="text-blue-600 hover:underline">Synergy Codes' article about recruitment process in which I was heavily involved</a></li>
              <li>[PL] <a href="https://open.spotify.com/episode/1lKfg4AOG3kjeIVZlKexu3?si=OgGq-NRjT7yra8yAgv_MPA" className="text-blue-600 hover:underline">DevStory podcast about software developer career vol. 1</a>
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li>[EN] <a href="https://www.synergycodes.com/blog/how-to-become-a-software-developer-tips-from-synergy-codes-pros" className="text-blue-600 hover:underline">related Synergy Codes' article I collaborated on</a></li>
                </ul>
              </li>
              <li>[PL] <a href="https://open.spotify.com/episode/5dxj5l6vHtig837ziaAE3s?si=ba8a25a850d44a8e" className="text-blue-600 hover:underline">DevStory podcast about software developer career vol. 2</a></li>
              <li>[PL] BFC Fiesta 2022 (#5)</li>
              <li>[PL] <a href="https://spolecznosc.eduweb.pl/c/ogloszenia/live-dzis-o-19-00-twoja-pierwsza-aplikacja-web3" className="text-blue-600 hover:underline">Webinar for Ahoy / Eduweb community</a> (#3)</li>
              <li>[PL] Webinar for <a href="https://boredfoundersclub.pl/" className="text-blue-600 hover:underline">BFC</a> community (#3)</li>
              <li>[PL] Web3 topic as a devmeeting in another company (#3)</li>
              <li>[PL] <a href="https://justjoin.it/blog/nie-wymyslaj-sobie-wymagan-krotka-historia-naszego-babola" className="text-blue-600 hover:underline">Synergy Codes x Just Join IT: Article - case study of our failure while building component library</a>
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li><a href="https://www.synergycodes.com/blog/do-not-make-up-your-own-requirements-a-short-story-of-our-howler" className="text-blue-600 hover:underline">EN version</a></li>
                </ul>
              </li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=lBgcqzjTBfg&ab_channel=JustJoinIT" className="text-blue-600 hover:underline">Synergy Codes x Just Join IT: Webinar</a> (#2)</li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=mYWXk05zkWo&list=PLJB1QdtU1vs-UovIT7kQi6YAuHPa99Lte&index=3&ab_channel=SynergyCodes" className="text-blue-600 hover:underline">Synergy Cafe about Async JS - Push vs. Pull</a>
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li><a href="https://www.youtube.com/shorts/eWL0QHTPJpo" className="text-blue-600 hover:underline">short no. 1</a></li>
                  <li><a href="https://www.youtube.com/shorts/V0qvN-NUPhQ" className="text-blue-600 hover:underline">short no. 2</a></li>
                </ul>
              </li>
              <li>[EN] <a href="https://www.youtube.com/watch?v=CX7y2SqZif4&ab_channel=TestDiveConference" className="text-blue-600 hover:underline">Test Dive 2022</a> (#3)</li>
              <li>[PL] Synergy Codes Afterhours: series of four internal talks on basics of investing and money management (#7)</li>
              <li>[PL] Leading "Synergy Speakers" - internal public speaking mentoring in Synergy Codes</li>
              <li>[PL] (charity auction) Career mentoring for person entering IT</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">2021</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>[EN] <a href="https://www.youtube.com/watch?v=ahLaM8By0lI&list=PLJB1QdtU1vs-UovIT7kQi6YAuHPa99Lte&ab_channel=SynergyCodes" className="text-blue-600 hover:underline">First episode of Synergy Cafe about Angular vs. React (my first time, I'm basically reading)</a>
                <ul className="list-disc list-inside ml-6 text-sm text-gray-500">
                  <li><a href="https://www.synergycodes.com/blog/angular-vs-react-which-technology-is-more-efficient" className="text-blue-600 hover:underline">EN version</a></li>
                </ul>
              </li>
              <li>[PL] <a href="https://justjoin.it/blog/angular-vs-react-ktora-z-technologii-jest-wydajniejsza" className="text-blue-600 hover:underline">Synergy Codes x Just Join IT: Article - performance comparison Angular vs. React</a></li>
              <li>[PL] <a href="https://www.youtube.com/watch?v=YPrFyhiGLcs&list=PLJB1QdtU1vs-x2I9pbC3anN3_rufFxyKO&index=10&ab_channel=JustJoinIT" className="text-blue-600 hover:underline">Synergy Codes x Just Join IT: Webinar</a> (#1)</li>
              <li>[PL] <a href="https://videopoint.pl/kurs/testy-e2e-kurs-video-protractor-cypress-cucumber-dawid-perdek,vrodop.htm" className="text-blue-600 hover:underline">Video course on E2E tests: Protractor, Cypress, Cucumber (outdated)</a></li>
              <li>[PL] Leading "Synergy Speakers" - internal public speaking mentoring in Synergy Codes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">2020</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>[EN] <a href="https://www.synergycodes.com/blog/a-newcomer-on-board-concerns-or-wind-in-the-sails" className="text-blue-600 hover:underline">Synergy Codes' article on me transforming the way we do retrospectives soon after joining the team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">2019</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>[PL] <a href="https://videopoint.pl/kurs/testowanie-w-angularze-kurs-video-karma-i-jasmine-dawid-perdek,vtesan.htm" className="text-blue-600 hover:underline">Video course on Angular unit testing with Jasmine & Karma (outdated, bad, do not recommend)</a></li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="pt-8 border-t flex justify-center">
        <p className="text-gray-600">
          Interested in having me at your event? 
          <a href="https://www.linkedin.com/in/perdekdawid" className="ml-2 font-medium text-blue-600 hover:underline">Let's connect on LinkedIn</a>
        </p>
      </div>
    </div>
  );
}
