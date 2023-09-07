import Head from '@/components/Head';
import Logo from '@/components/Logo';

export default {
  logo: Logo,
  head: <Head />,
  project: {
    link: 'https://github.com/SimpleLifecst/docs',
  },
  docsRepositoryBase: 'https://github.com/SimpleLifecst/docs/tree/main/',
  sidebar: {
    toggleButton: true,
  },
  search: {
    emptyResult: <span className='empty-result'>找不到结果</span>,
    loading: '加载中',
    error: '搜索错误',
    placeholder: '搜索',
  },
  navigation: false,
  // 底部版权标识
  footer: {
    text: (
      <div className='sl-footer'>
        <span>一个简单的人，做一件简单的事😀</span>
        <br />
        <span>Copyright {new Date().getFullYear()} © SimpleLife.</span>
      </div>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – SimpleLife',
    };
  },
  themeSwitch: {
    useOptions() {
      return {
        light: '白天',
        dark: '黑夜',
        system: '系统',
      };
    },
  },
  gitTimestamp: null,
};
