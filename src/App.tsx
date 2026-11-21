import { useState } from 'react';
import { SITE_CONTENT, type ActivityItem, type NewsItem, type StoryItem } from './data/siteContent';
import type { DonationResolution } from './utils/communityLogic';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MissionStatement } from './components/MissionStatement';
import { AboutSection } from './components/AboutSection';
import { CommunityMap } from './components/CommunityMap';
import { DonationFeature } from './components/DonationFeature';
import { WaysToHelp } from './components/WaysToHelp';
import { EventList } from './components/EventList';
import { StoryCarousel } from './components/StoryCarousel';
import { FeaturedProject } from './components/FeaturedProject';
import { NewsGrid } from './components/NewsGrid';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import {
  CollaborateModal,
  EditorialModal,
  type EditorialModalContent,
} from './components/Modals';

export default function App() {
  const [collabModal, setCollabModal] = useState<{
    open: boolean;
    topic: string;
    summary?: string;
  }>({
    open: false,
    topic: '',
  });

  const [editorialModal, setEditorialModal] = useState<EditorialModalContent | null>(null);

  const openCollaborate = (presetTopic?: string, summary?: string) => {
    setCollabModal({
      open: true,
      topic: presetTopic ?? 'Quiero colaborar con Red Palermo',
      summary,
    });
  };

  const handleDonationProceed = (resolution: DonationResolution) => {
    openCollaborate(resolution.topic, resolution.summary);
  };

  const handleOpenHistory = () => {
    setEditorialModal({
      kicker: SITE_CONTENT.about.label,
      title: SITE_CONTENT.about.modalTitle,
      paragraphs: SITE_CONTENT.about.modalBody,
      ctaLabel: 'Quiero acercarme',
      ctaTopic: 'Conocer y acercarme a Red Palermo',
    });
  };

  const handleOpenActivity = (activity: ActivityItem) => {
    setEditorialModal({
      kicker: `${activity.category} · ${activity.location}`,
      title: activity.title,
      subtitle: `${activity.dateLabel} ${activity.dateSubLabel}`,
      paragraphs: [activity.description, ...activity.details],
      ctaLabel: 'Recibir confirmación de fecha',
      ctaTopic: `Actividad: ${activity.title}`,
    });
  };

  const handleOpenStory = (story: StoryItem) => {
    setEditorialModal({
      kicker: story.category,
      title: story.title,
      subtitle: story.subtitle,
      image: story.image,
      imageAlt: story.imageAlt,
      paragraphs: story.body,
      ctaLabel: 'Sumarme al trabajo colectivo',
      ctaTopic: `Historia: ${story.title}`,
    });
  };

  const handleViewAllStories = () => {
    setEditorialModal({
      kicker: 'HISTORIAS DEL BARRIO',
      title: 'Relatos del trabajo colectivo en Palermo',
      subtitle: 'Olla popular, organización vecinal y redes de apoyo mutuo.',
      paragraphs: SITE_CONTENT.stories.items.map(
        (item) => `${item.title} — ${item.subtitle} ${item.body[0]}`
      ),
      ctaLabel: 'Quiero participar',
      ctaTopic: 'Participar en Red Palermo',
    });
  };

  const handleOpenFeaturedProject = () => {
    setEditorialModal({
      kicker: 'INICIATIVA BARRIAL',
      title: SITE_CONTENT.featuredProject.title,
      subtitle: SITE_CONTENT.featuredProject.description,
      image: SITE_CONTENT.featuredProject.image,
      imageAlt: SITE_CONTENT.featuredProject.imageAlt,
      paragraphs: SITE_CONTENT.featuredProject.modalBody,
      ctaLabel: 'Articular con el proyecto',
      ctaTopic: 'Proyecto Redes que sostienen',
    });
  };

  const handleOpenNews = (item: NewsItem) => {
    setEditorialModal({
      kicker: `${item.category} · ${item.dateLabel}`,
      title: item.title,
      subtitle: item.summary,
      image: item.image,
      imageAlt: item.imageAlt,
      paragraphs: item.body,
      ctaLabel: 'Quiero colaborar',
      ctaTopic: `Novedad: ${item.title}`,
    });
  };

  const handleOpenSocialInfo = (network: 'Instagram' | 'Facebook') => {
    setEditorialModal({
      kicker: 'CANALES DE DIFUSIÓN',
      title: `${network} de Red Palermo`,
      subtitle: 'Enlace provisional listo para conectar el perfil oficial.',
      paragraphs: [
        `El acceso a ${network} está preparado para vincular la cuenta oficial de la organización apenas se defina el nombre final y los canales definitivos.`,
        'Mientras tanto, podés comunicarte directamente mediante el formulario de coordinación comunitaria.',
      ],
      ctaLabel: 'Escribir a Red Palermo',
      ctaTopic: `Contacto vía ${network}`,
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      {/* Section 01 — Announcement Bar */}
      <AnnouncementBar />

      {/* Section 01 (Navigation over Hero) + Section 02 (Hero) */}
      <div className="relative">
        <Header onOpenCollaborate={openCollaborate} />
        <main>
          <Hero onOpenCollaborate={openCollaborate} />

        {/* Section 03 — Institutional Statement */}
        <MissionStatement />

        {/* Section 04 — About Us */}
        <AboutSection onOpenHistory={handleOpenHistory} />

        {/* Section 05 — Community Territory Visual */}
        <CommunityMap />

        {/* Section 06 — Full-Width Donation Feature */}
        <DonationFeature onDonationProceed={handleDonationProceed} />

        {/* Section 07 — Ways to Help */}
        <WaysToHelp onSelectTopic={(topic) => openCollaborate(topic)} />

        {/* Section 08 — Upcoming Activities */}
        <EventList onSelectEvent={handleOpenActivity} />

        {/* Section 09 — Community Stories Carousel */}
        <StoryCarousel
          onOpenStory={handleOpenStory}
          onViewAllStories={handleViewAllStories}
        />

        {/* Section 10 — Featured Community Project Banner */}
        <FeaturedProject onOpenProject={handleOpenFeaturedProject} />

        {/* Section 11 — Latest News (Instagram embed grid) */}
        <NewsGrid
          onOpenNews={handleOpenNews}
          onOpenInstagramInfo={() => handleOpenSocialInfo('Instagram')}
        />

        {/* Section 12 — Full-Width Final CTA */}
        <FinalCTA onOpenCollaborate={openCollaborate} />
      </main>
      </div>

      {/* Section 13 — Footer */}
      <Footer
        onOpenCollaborate={openCollaborate}
        onOpenSocialInfo={handleOpenSocialInfo}
      />

      {/* Interactive Coordination & Editorial Reader Modals */}
      <CollaborateModal
        open={collabModal.open}
        initialTopic={collabModal.topic}
        initialSummary={collabModal.summary}
        onClose={() => setCollabModal((prev) => ({ ...prev, open: false }))}
      />

      <EditorialModal
        content={editorialModal}
        onClose={() => setEditorialModal(null)}
        onCollaborateFromModal={(topic) => openCollaborate(topic)}
      />
    </div>
  );
}
