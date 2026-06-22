import { setRequestLocale } from 'next-intl/server';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import CofavGrantSection from '@/components/sections/CofavGrantSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import HistorySection from '@/components/sections/HistorySection';
import MissionSection from '@/components/sections/MissionSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TeamSection from '@/components/sections/TeamSection';
import ImpactMetricsSection from '@/components/sections/ImpactMetricsSection';
import InteractiveTimelineSection from '@/components/sections/InteractiveTimelineSection';
import ExpertNetworkSection from '@/components/sections/ExpertNetworkSection';
import PartnersSection from '@/components/sections/PartnersSection';
import GeographicMapSection from '@/components/sections/GeographicMapSection';
import FieldGallerySection from '@/components/sections/FieldGallerySection';
import CofavActionsSection from "@/components/sections/CofavActionsSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="pt-[72px]">
      <HeroSection />
      <ImpactMetricsSection />
      {/* <CofavGrantSection /> */}
      <CofavActionsSection/>
      <InteractiveTimelineSection />
      <MissionSection />
      <ActivitiesSection />
      <TeamSection />
      <ExpertNetworkSection />
      <PartnersSection />
      <GeographicMapSection />
      {/* <ProjectsSection /> */}
      <FieldGallerySection />
      <ContactSection />
    </main>
  );
}
