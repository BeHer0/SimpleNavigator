import GiteeSvg from "@/svgs/gitee"
import GithubSvg from "@/svgs/github"
import NextraSvg from "@/svgs/nextra"
import SimpleSvg from "@/svgs/simpleLife"
import VueSvg from "@/svgs/vue"

export const MEMOIR = [

  {
    id: 2,
    title: "SimpleLife",
    smallTitle: "使用Nextra搭建的文档主题",
    iconSvg: <SimpleSvg />,
    children: [{
      id: "2-1",
      title: "Github",
      icon: <GithubSvg />,
      link: 'https://simplelifecst.github.io/nextra-template/'
    },
    {
      id: "2-2",
      title: "Gitee",
      icon: <GiteeSvg />,
      link: "https://culala.gitee.io/nextra-template/"
    }]
  }
]

export const COLLECTION = [
  {
    id: 1,
    title: "VuePress",
    smallTitle: "Vue 驱动的静态网站生成器",
    iconSvg: <VueSvg />,
    children: ['https://vuepress.vuejs.org/zh/']
  },
  {
    id: 1,
    title: "Nextra",
    smallTitle: "基于NextJS开发的Nextra主题框架",
    iconSvg: <NextraSvg />,
    children: ["https://nextra.site/docs"]
  },
]