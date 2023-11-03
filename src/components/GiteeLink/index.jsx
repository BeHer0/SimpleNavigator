import GiteeSvg from '@/svgs/gitee';

function GiteeLink() {
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => window.open('https://gitee.com/culala/docs', '_blank')}
    >
      <GiteeSvg width="25" height="25" />
    </div>
  );
}

export default GiteeLink;
