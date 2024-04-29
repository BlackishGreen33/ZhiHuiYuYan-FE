'use client';

import { AnimatePresence, motion } from 'framer-motion';

import Breakline from '@/common/components/elements/Breakline';
import { MockArticle, splitWords } from '@/modules/articles/components/mock';

const ArticlePage: React.FC<{ article: string }> = ({ article }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {MockArticle[article] && (
          <div className="relative mx-auto box-border h-full w-[90vw] bg-mdGray px-8 py-8">
            <header className="m-8 mt-4 text-center text-3xl font-bold text-gray-700">
              国际音标
            </header>
            <div className="mx-auto flex w-4/5 justify-between text-gray-400">
              <span>作者：XXXX</span>
              <span>日期：XXXX</span>
              <span>浏览次数：XXXX</span>
            </div>
            <Breakline className="mx-auto mb-12 w-11/12"></Breakline>
            {splitWords(MockArticle[article]).map((item) => (
              <div className="mx-auto mb-2 w-4/5 whitespace-pre-wrap break-words text-xl font-bold">
                {item}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ArticlePage;
