import { additionalElem } from '@/common/hooks/utils';
import { genKey } from '@/common/utils/keyGen';
import { create } from 'zustand';

export interface ChatRecordProps {
  role?: bubbleType;
  children?: string;
  additionalElem?: React.ReactNode;
  last?: boolean;
  renderFunction?: (
    children: string,
    additionalElem?: React.ReactNode,
    setReadyState?: () => void,
    last?: boolean
  ) => React.ReactNode;
}
export type fileInfoType = {
  url: string;
  status: 'success' | 'progressing' | 'fail';
};
export type inputType = {
  text: string;
  files?: fileInfoType[];
};
export type ChatHistoryItemType = {
  date: string;
  title: string;
  id: string;
};

export type HistoryByDateType = {
  [key: string]: ChatHistoryItemType[];
};

export type bubbleType = 'robot' | 'user';
interface ChatStore {
  chatHistories: ChatHistoryItemType[];
  chatRecords: ChatRecordProps[];
  currentSelect: string;
  addNewHistory: (title: string) => void;
  sendMessage: (role: bubbleType, text: string) => void;
  replaceMessage: (role: bubbleType, text: string) => void;
  refreshChatRecords: (id?: string) => void;
  setCurrentSelect: (id: string) => void;
}
interface ChatInputStore {
  inputs: inputType;
  setText: (text: string) => void;
  setFiles: (texts: any[]) => void;
  setPlugins: (name: string, res: string) => void;
  removeFiles: () => void;
}
export const useChat = create<ChatStore>((set) => ({
  chatHistories: [
    {
      date: '2024/04/12',
      title: '候晓舟博士生平',
      id: '1',
    },
  ],
  chatRecords: [
    {
      role: 'robot',
      children: `## 你好👋\n #### 我是语言科研小助手～ \n #### 试着这样问我：
      `,
      additionalElem: additionalElem,
    },
    {
      role: 'user',
      children: '侯晓舟教授在语料库语言学领域有哪些主要的研究成果？'
    }, {
    role: 'robot',
      children: '### 侯晓舟教授在语料库语言学领域有多项研究成果，根据搜索得到的信息，以下是一些主要的成果：\n' +
        '\n' +
        '1. 主持并完成了多个与语料库语言学相关的科研项目，包括基于逐步多元回归的高校学生语言能力影响因素研究、专业英语（教育学）课程思政示范课程、基于语料库语用学的英语语用知识显性教学模式研究、基于ERP的汉英词汇语用信息加工处理研究等。\n' +
        '\n' +
        '2. 发表了多篇与语料库语言学相关的学术论文，例如探讨语境信息对词汇语用信息认知理解的构建、基于反应时的第二语言学习者语用负迁移、话语标记语语料库赋码原则研究等。\n' +
        '\n' +
        '3. 侯晓舟教授在语料库语言学的教学和研究方面具有丰富的经验，主讲的课程包括基础英语、英语语言学、现代理论语言学、语料库语言学等。\n' +
        '\n' +
        '4. 侯晓舟教授的研究成果在学术界获得了一定的认可，获得了包括河北省社会科学优秀成果奖、河北省研究生课程思政教学名师（团队）、河北省“三三三人才工程”三层次人才等荣誉。\n' +
        '\n' +
        '5. 侯晓舟教授还积极参与学术团体工作，担任全国话语语言学研究会副秘书长、河北大学高等教育与区域发展研究中心研究员等职务。\n' +
        '\n' +
        '侯晓舟教授的研究成果体现了他在语料库语言学领域的深入研究和专业贡献。'
    },
    {
      role: 'user',
      children: '说说这篇文章的主要内容'
    },
    {
      role: 'robot',
      children: '这篇文章的标题是《语料库语言学未来的发展路径研究——以“基于语料库”的研究范式为视角》，主要探讨了语料库语言学的发展历程、两种主要研究范式及其特点、分歧，并对未来的发展方向进行了展望。\n' +
        '\n' +
        '## 1. 引言\n' +
        '文章从20世纪60年代世界上第一个语料库——布朗语料库的建立讲起，说明了语料库语言学的起源和它在80年代的普及。文章指出，语料库语言学的发展与两个对立的研究范式有关：基于语料库的研究范式和语料库驱动的研究范式。\n' +
        '\n' +
        '## 2. 两种研究范式的起源\n' +
        '基于语料库的研究范式：由布朗语料库团队、夸克团队和利奇团队的相互交流影响形成。这些团队的工作为语料库语言学奠定了基础，并且对后来的研究产生了深远影响。\n' +
        '语料库驱动的研究范式：起源于弗斯的语境论，由他的学生们发展，特别是辛克莱尔，他们主张从语料库中建构理论，强调搭配和意义的密不可分。\n' +
        '## 3. 两种研究范式的分歧\n' +
        '文章详细区分了两种范式在哲学基础、学科属性、研究目的和操作手段上的不同：\n' +
        '\n' +
        '哲学基础：基于语料库的研究范式倾向于“温和的经验主义”，而语料库驱动的研究范式倾向于“激进的经验主义”。\n' +
        '学科属性：前者不认为语料库语言学是独立学科，而后者则认为它是独立的，并且提倡摆脱现有语言分类体系。\n' +
        '研究目的：基于语料库的研究范式旨在验证或修正理论，而语料库驱动的研究范式则着重于语言本身的描写。\n' +
        '操作手段：基于语料库的研究范式可能需要多个语料库进行比较，而语料库驱动的研究通常使用单一语料库。\n' +
        '## 4. 发展与应用\n' +
        '文章讨论了语料库语言学的未来发展，指出它已经成为语言学家和其他领域研究者的主要研究方法之一。同时，文章也提到了语料库在国内应用的现状和挑战，尤其是在中小学教育中的应用尚未普及。\n' +
        '\n' +
        '## 5. “语料库驱动”研究范式的局限性\n' +
        '文章指出，由于其哲学基础和研究手段的特殊性，语料库驱动的研究范式存在局限性，可能难以被其他领域的研究者接纳。\n' +
        '\n' +
        '## 6. 结语\n' +
        '文章最后总结，语料库语言学虽然发展历史不长，但已成为跨学科领域的重要研究方法。文章预测，基于语料库的研究范式由于其开放性和包容性，可能会比语料库驱动的研究范式有更广阔的发展前景。\n' +
        '\n' +
        '整体而言，这篇文章为读者提供了语料库语言学领域的深入分析，包括其历史、主要研究范式及其特点、面临的挑战和未来的发展方向。'
    }
  ],
  currentSelect: '1',
  replaceMessage: (role, text) =>
    set((state) => {
      let newMessage = state.chatRecords;
      newMessage.at(-1)!.children = text;
      return { chatRecords: newMessage };
    }),
  setCurrentSelect: (id) =>
    set((state) => {
      id !== state.currentSelect && state.refreshChatRecords(id);
      return { currentSelect: id };
    }),
  refreshChatRecords: (id) =>
    set((state) => {
      console.log(id || state.currentSelect);
      return { chatRecords: state.chatRecords };
    }),
  addNewHistory: (title) =>
    set((state) => {
      let id = String(genKey.next().value);
      const date = new Date().toLocaleDateString();
      state.setCurrentSelect(id);
      return {
        chatHistories: [{ id, date, title }].concat(state.chatHistories),
      };
    }),
  sendMessage: (role, text) =>
    set((state) => ({
      chatRecords: state.chatRecords.concat({
        children: text,
        role: role,
      }),
    })),
}));

export const useChatInput = create<ChatInputStore>((set) => ({
  inputs: {
    text: '',
    files: [],
  },
  removeFiles: () => set((state) => ({inputs: {...state.inputs, files: state.inputs.files!.slice(1)}})),
  setText: (text) => set((state) => ({ inputs: { ...state.inputs, text } })),
  setFiles: (texts) => set((state) => ({inputs: {...state.inputs, files: texts}})),
  setPlugins: (name, res) =>
    set((state) => ({ inputs: { ...state.inputs, [name]: res } })),
}));
