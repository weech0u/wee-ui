import { h } from 'vue'
import Button from '@/views/doc/button/index.vue'
import Dialog from '@/views/doc/dialog/index.vue'
import Link from '@/views/doc/link/index.vue'
import Tag from '@/views/doc/tag/index.vue'
import Input from '@/views/doc/input/index.vue'
import Switch from '@/views/doc/switch/index.vue'
import Select from '@/views/doc/select/index.vue'
import Radio from '@/views/doc/radio/index.vue'
import Divider from '@/views/doc/divider/index.vue'
import Message from '@/views/doc/message/index.vue'
import Backup from '@/views/doc/backup/index.vue'
import Breadcrumb from '@/views/doc/breadcrumb/index.vue'
import Tabs from '@/views/doc/tabs/index.vue'
import Affix from '@/views/doc/affix/index.vue'

import Markdown from '@/components/Markdown.vue'

const md = (html: any) => h(Markdown, { content: html })
import { html as Intro } from '../markdown/intro.md'
const IntroDoc = md(Intro)

const routes = [
  {
    path: 'intro',
    component: IntroDoc,
    meta: {
      name: '介绍'
    }
  },
  {
    path: 'button',
    component: Button,
    meta: {
      name: 'Button 按钮'
    }
  },
  {
    path: 'dialog',
    component: Dialog,
    meta: {
      name: 'Dialog 对话框'
    }
  },
  {
    path: 'link',
    component: Link,
    meta: {
      name: 'Link 文字链接'
    }
  },
  {
    path: 'tag',
    component: Tag,
    meta: {
      name: 'Tag 标签'
    }
  },
  {
    path: 'input',
    component: Input,
    meta: {
      name: 'Input 输入框'
    }
  },
  {
    path: 'switch',
    component: Switch,
    meta: {
      name: 'Switch 开关'
    }
  },
  {
    path: 'select',
    component: Select,
    meta: {
      name: 'Select 选择器'
    }
  },
  {
    path: 'radio',
    component: Radio,
    meta: {
      name: 'Radio 单选框'
    }
  },
  {
    path: 'divider',
    component: Divider,
    meta: {
      name: 'Divider 分割线'
    }
  },
  {
    path: 'message',
    component: Message,
    meta: {
      name: 'Message 消息'
    }
  },
  {
    path: 'backup',
    component: Backup,
    meta: {
      name: 'Backup 回到顶部'
    }
  },
  {
    path: 'breadcrumb',
    component: Breadcrumb,
    meta: {
      name: 'Breadcrumb 面包屑'
    }
  },
  {
    path: 'tabs',
    component: Tabs,
    meta: {
      name: 'Tabs 标签页'
    }
  },
  {
    path: 'affix',
    component: Affix,
    meta: {
      name: 'affix 固钉'
    }
  },
]

export default routes