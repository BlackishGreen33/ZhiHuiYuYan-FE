import { useEffect } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import Pagination from '@/common/components/elements/Pagination';
import {
  PaperItem as PaperItemType,
  usePaperInfo,
} from '@/common/hooks/useInfo';
import { useRouter } from 'next/navigation';

interface PaperItemProps {
  item: PaperItemType;
}

export const PaperItem: React.FC<PaperItemProps> = ({ item }) => {
  const { filteredList } = usePaperInfo();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/query/paper/${item.article_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex h-[20vh] w-full flex-col items-center bg-gray-100"
    >
      <div className="relative my-[3vh] flex h-[14vh] w-full items-center">
        <p className="absolute left-[5%] top-0 line-clamp-1 w-[65%] cursor-pointer overflow-hidden text-ellipsis text-[2vh] font-semibold hover:underline">
          {item.article_name}
        </p>
        <p className="absolute left-[5%] top-[3vh] flex items-center gap-[2vh] text-[1.5vh] text-blue-800">
          {item.article_author}
        </p>
        <div className="absolute left-[5%] top-[5.5vh] line-clamp-3 w-[50%] overflow-hidden text-ellipsis text-[1.3vh] text-gray-700 md:lg:w-[70%]">
          <p className="flex-1">{item.abstract}</p>
        </div>
        <div className="absolute left-[5%] top-[12vh] flex items-center gap-[5vh] text-[1.3vh] text-gray-700">
          <p>{item.topics}</p>
          <p>收藏数：{item.download_count}</p>
        </div>
        <p className="absolute right-[7%] top-[2vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-red-800">
          {item.isCollected ? <IoHeart /> : <IoHeartOutline />}
          未收藏
        </p>
        <p className="absolute right-[8%] top-[12vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-gray-700">
          查看全文
        </p>
      </div>
      {item.article_id !== filteredList[length - 1]?.article_id && (
        <BreaklineDashed className="w-[90%] border-t-2" />
      )}
    </div>
  );
};

const Paper = () => {
  const {
    filteredList,
    setFilteredList,
    search,
    pageSize,
    sort,
    filters,
    totalNum,
    curPage,
    setCurPage,
  } = usePaperInfo();
  const handleChoose = (index: number) => {
    setCurPage(index);
    setFilteredList({
      page: index,
      search,
      name: 'paper',
      pageSize: pageSize,
      sort: sort || 'publish_time',
      filters,
    });
  };
  useEffect(() => {
    setFilteredList({
      name: 'paper',
      search,
      page: 1,
      pageSize: pageSize,
      sort: sort || 'publish_time',
      filters,
    });
  }, [filters]);
  return (
    <>
      {filteredList.map((item) => (
        <PaperItem key={item.article_id} item={item} />
      ))}
      <Pagination
        pageSize={pageSize}
        dataLength={totalNum}
        onChosen={handleChoose}
        className="relative flex w-full justify-center"
      ></Pagination>
    </>
  );
};

export default Paper;
