// React component with coming soon information in tailwind
import React, { FC } from 'react';

import { BackToHome } from 'components/Buttons/BackToHome';

export interface IComingSoonProps {
  pageName?: string;
}

export const ComingSoon: FC<IComingSoonProps> = ({ pageName }) => (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Coming Soon
        </h1>
        <p className="mb-8 leading-relaxed">
          Page {pageName} is under construction.
        </p>
        <div className="flex justify-center">
          <BackToHome />
        </div>
      </div>
    </div>
  </section>
);
