'use client';

import React, { use } from 'react';
import DigitalMarketingPolitics2025 from '../blog-content/digital-marketing-politics-2025';
import NewPatientsClinic2025 from '../blog-content/new-patients-clinic-2025';
import ProfessionalWebsiteUttarPradesh from '../blog-content/professional-website-uttar-pradesh';

const getBlogContent = (slug: string) => {
  switch (slug) {
    case 'digital-marketing-politics-2025':
      return <DigitalMarketingPolitics2025 />;
    case 'new-patients-clinic-2025':
      return <NewPatientsClinic2025 />;
    case 'professional-website-uttar-pradesh':
      return <ProfessionalWebsiteUttarPradesh />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center text-white">
          <h1 className="text-3xl font-bold">404 | Blog Not Found</h1>
        </div>
      );
  }
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const BlogDetailPage = ({ params }: Props) => {
  const { slug } = use(params);

  return <div className="bg-[#0f0f0f] min-h-screen">{getBlogContent(slug)}</div>;
};

export default BlogDetailPage;
