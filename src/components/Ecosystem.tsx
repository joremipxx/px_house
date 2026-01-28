import { useTranslation } from 'react-i18next'

export default function Ecosystem() {
  const { t } = useTranslation()
  return (
    <section className="relative bg-paradox-dark py-20 md:py-32">
      <div className="container mx-auto px-8 md:px-12 max-w-7xl">
        {/* Header Section */}
        <div className="mb-20 md:mb-32 max-w-3xl">
          <p className="font-['Clash_Grotesk',sans-serif] text-sm text-paradox-gray uppercase tracking-widest mb-6">
            {t('ecosystem.distributionProtocol')}
          </p>
          <h2 className="font-['Anton',sans-serif] text-5xl md:text-7xl lg:text-[84px] leading-tight text-paradox-bg uppercase mb-8">
            {t('ecosystem.title')}
          </h2>
          <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-brown max-w-2xl">
            {t('ecosystem.description')}
          </p>
        </div>

        {/* Flash Protocol - Last Minute 60% */}
        <div className="mb-24 md:mb-32">
          <div className="border-t border-paradox-bg/10 pt-12 md:pt-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-paradox-bg rounded-full" />
                <p className="font-['Clash_Grotesk',sans-serif] font-semibold text-sm text-paradox-bg uppercase tracking-wider">
                  {t('ecosystem.lastMinute')}
                </p>
              </div>
              <h3 className="font-['Anton',sans-serif] text-4xl md:text-5xl lg:text-6xl text-paradox-bg uppercase mb-6">
                {t('ecosystem.flashProtocol')}
              </h3>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-['Clash_Grotesk',sans-serif] text-6xl md:text-7xl lg:text-8xl text-paradox-bg">
                  60%
                </span>
                <span className="font-['Clash_Grotesk',sans-serif] text-base text-paradox-bg/60 uppercase tracking-wider">
                  {t('ecosystem.discount')}
                </span>
              </div>
              <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-brown max-w-2xl mb-4">
                {t('ecosystem.flashDesc')}
              </p>
              <p className="font-['Clash_Grotesk',sans-serif] text-base text-paradox-bg/60 max-w-2xl">
                {t('ecosystem.flashDesc2')}
              </p>
            </div>
          </div>
        </div>

        {/* Tier Cards - Vertical Stack with Spacing */}
        <div className="space-y-16 md:space-y-24">
          {/* Tier 01 - Free User */}
          <div className="border-t border-paradox-bg/10 pt-12 md:pt-16">
            <div className="max-w-4xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <p className="font-['Clash_Grotesk',sans-serif] text-sm text-paradox-bg/60 uppercase tracking-wider">
                    {t('ecosystem.tier01')}
                  </p>
                  <div className="w-10 h-10 border border-paradox-bg/20 rounded-full flex items-center justify-center">
                    <span className="font-['Anton',sans-serif] text-lg text-paradox-bg">F</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-['Anton',sans-serif] text-5xl md:text-6xl lg:text-7xl text-paradox-bg uppercase mb-3">
                  {t('ecosystem.freeUser')}
                </h3>
                <p className="font-['Clash_Grotesk',sans-serif] text-base text-paradox-bg/60 uppercase tracking-wider mb-8">
                  {t('ecosystem.collectiveMember')}
                </p>
                <div className="mb-12">
                  <span className="font-['Clash_Grotesk',sans-serif] text-7xl md:text-8xl lg:text-9xl text-paradox-bg">
                    -15%
                  </span>
                  <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg mt-4">
                    {t('ecosystem.discountOnHouses')}
                  </p>
                </div>
              </div>
              
              <div className="mb-12">
                <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-brown max-w-2xl mb-6">
                  {t('ecosystem.freeUserDesc')}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                    <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                      {t('ecosystem.accessLisbonDubai')}
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                    <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                      {t('ecosystem.pxEcosystemIntegration')}
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                    <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                      {t('ecosystem.flashProtocolAccess')}
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                    <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                      {t('ecosystem.standardBooking')}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tier 02 - Paid User */}
          <div className="border-t border-paradox-bg/10 pt-12 md:pt-16">
            <div className="max-w-4xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <p className="font-['Clash_Grotesk',sans-serif] text-sm text-paradox-bg/60 uppercase tracking-wider">
                    {t('ecosystem.tier02')}
                  </p>
                  <div className="w-10 h-10 border border-paradox-bg/20 rounded-full flex items-center justify-center bg-paradox-bg/5">
                    <span className="font-['Anton',sans-serif] text-lg text-paradox-bg">P</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-['Anton',sans-serif] text-5xl md:text-6xl lg:text-7xl text-paradox-bg uppercase mb-3">
                  {t('ecosystem.paidUser')}
                </h3>
                <p className="font-['Clash_Grotesk',sans-serif] text-base text-paradox-bg/60 uppercase tracking-wider mb-8">
                  {t('ecosystem.collectiveMember')}
                </p>
                <div className="mb-12">
                  <span className="font-['Clash_Grotesk',sans-serif] text-7xl md:text-8xl lg:text-9xl text-paradox-bg">
                    -40%
                  </span>
                  <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg mt-4">
                    {t('ecosystem.discountOnHouses')}
                  </p>
                </div>
              </div>
              
              <div className="mb-12">
                <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-brown max-w-2xl mb-6">
                  {t('ecosystem.paidUserDesc')}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                    <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                      {t('ecosystem.earlyCheckin')}
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                    <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                      {t('ecosystem.priorityBooking')}
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                    <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                      {t('ecosystem.ouraSync')}
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                    <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                      {t('ecosystem.allLocations')}
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                    <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                      {t('ecosystem.flashEligibility')}
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-paradox-bg/10 pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 border border-paradox-bg/20 rounded-full bg-paradox-bg/10" />
                    <div className="w-6 h-6 border border-paradox-bg/20 rounded-full bg-paradox-bg/10" />
                    <div className="w-6 h-6 border border-paradox-bg/20 rounded-full bg-paradox-bg/10" />
                  </div>
                  <p className="font-['Clash_Grotesk',sans-serif] text-sm text-paradox-bg/60 uppercase tracking-wider">
                    {t('ecosystem.legacyRituals')}
                  </p>
                </div>
                <p className="font-['Clash_Grotesk',sans-serif] text-base text-paradox-bg/60 max-w-2xl">
                  {t('ecosystem.legacyDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Post 4×/year - Alumni & Members */}
          <div className="border-t border-paradox-bg/10 pt-12 md:pt-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-paradox-bg rounded-full" />
                <p className="font-['Clash_Grotesk',sans-serif] font-semibold text-sm text-paradox-bg uppercase tracking-wider">
                  {t('ecosystem.post4x')}
                </p>
              </div>
              <h3 className="font-['Anton',sans-serif] text-4xl md:text-5xl lg:text-6xl text-paradox-bg uppercase mb-6">
                {t('ecosystem.alumniMembers')}
              </h3>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-['Clash_Grotesk',sans-serif] text-6xl md:text-7xl lg:text-8xl text-paradox-bg">
                  30%
                </span>
                <span className="font-['Clash_Grotesk',sans-serif] text-base text-paradox-bg/60 uppercase tracking-wider">
                  {t('ecosystem.offDirectBookings')}
                </span>
              </div>
              <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-brown max-w-2xl mb-4">
                {t('ecosystem.alumniDesc')}
              </p>
              <p className="font-['Clash_Grotesk',sans-serif] text-base text-paradox-bg/60 max-w-2xl mb-6">
                {t('ecosystem.alumniDesc2')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                  <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                    {t('ecosystem.exclusiveAccess')}
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                  <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                    {t('ecosystem.availableLocations')}
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-paradox-bg rounded-full mt-3 flex-shrink-0" />
                  <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg">
                    {t('ecosystem.limitedOffers')}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
