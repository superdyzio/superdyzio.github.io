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
              <li>[PL] Wstęp do inwestowania (4-częściowa seria)</li>
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
              <li>[PL] <a href="https://www.meetup.com/gdansk-typescript/events/306376219/" className="text-blue-600 hover:underline">#14 Gdańsk Typescript meetup</a></li>
              <li>[PL] <a href="https://2025.boilingfrogs.pl/" className="text-blue-600 hover:underline">Boiling Frogs</a></li>
              <li>[PL] 2x individual public speaking mentoring</li>
              <li>[PL] <a href="https://crossweb.pl/en/events/meet-js-poznan-03-2025-60/" className="text-blue-600 hover:underline">#60 Meet.js Poznań</a></li>
              <li>[PL] <a href="https://sfi.pl/pl" className="text-blue-600 hover:underline">20. Studencki Festiwal Informatyczny</a> + host</li>
              <li>[PL] <a href="https://www.meetup.com/ng-lodz/events/307300288/" className="text-blue-600 hover:underline">ngŁodź #17</a></li>
              <li>[PL] <a href="https://www.meetup.com/ngkato/events/307420140/" className="text-blue-600 hover:underline">ngKato #6</a></li>
              <li>[EN] <a href="https://www.meetup.com/angular-warsaw/events/310498423/" className="text-blue-600 hover:underline">Angular Summer Camp 2025</a> - Panelist</li>
            </ul>
          </div>
          
          <p className="text-gray-500 text-sm italic">...and many more from previous years.</p>
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
