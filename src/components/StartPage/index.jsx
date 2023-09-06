import Link from 'next/link';

export default function StartPage() {
  return (
    <div className='start-page-container'>
      <div className='title'>
        <header>使用Nextra框架和MDX语法打造优美的文档网站</header>
        <div className='small_title'>
          简单、强大、灵活的站点生成框架 用Next. js中你喜欢的一切
        </div>
      </div>

      <div className='btn'>
        <Link href='/docs/instruction'>Get Started</Link>
        <span>→</span>
      </div>
    </div>
  );
}
