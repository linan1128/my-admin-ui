<template>
  <n-layout style="height: 100vh">
    <n-layout-header style="height: 64px;" :inverted="inverted">
      <div class="flex h-full">
        <div class="bg-blue-500" style="position: fixed;width: 200px;height: 64px">
          logo
        </div>
        <div class="flex justify-between" style="width: 100%;padding-left: 200px">
          <div>
            <n-breadcrumb>
              <n-breadcrumb-item>
                  I'm ok
              </n-breadcrumb-item>
              <n-breadcrumb-item>
                  I'm ok
              </n-breadcrumb-item>
            </n-breadcrumb>
          </div>
          <div>
            <n-button type="primary">
              Primary
            </n-button>
          </div>
        </div>
      </div>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 0" has-sider>
      <n-layout-sider
          :width="200"

          :native-scrollbar="false"
          bordered
          :inverted="inverted"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
      >
        <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :inverted="inverted"
        />
      </n-layout-sider>
      <n-layout content-style="" :native-scrollbar="false">
        <div class="bg-blue-500" style="height: 30px">

        </div>
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </n-layout>
<!--  <n-layout>-->
<!--    <n-layout-header :inverted="inverted">-->
<!--      <div class="flex">-->
<!--        <div class="logo bg-blue-500" style="width: 200px;height: 60px"></div>-->
<!--      </div>-->
<!--    </n-layout-header>-->
<!--    <n-layout has-sider>-->
<!--      <n-layout-sider-->
<!--          bordered-->
<!--          show-trigger-->
<!--          collapse-mode="width"-->
<!--          :collapsed-width="64"-->
<!--          :width="200"-->
<!--          :native-scrollbar="false"-->
<!--          :inverted="inverted"-->
<!--          style="height: calc(100vh - 60px)"-->
<!--      >-->
<!--        <n-menu-->
<!--            :inverted="inverted"-->
<!--            :collapsed-width="64"-->
<!--            :collapsed-icon-size="22"-->
<!--            :options="menuOptions"-->
<!--        />-->
<!--      </n-layout-sider>-->
<!--    </n-layout>-->
<!--  </n-layout>-->
<!--  <div class="relative h-screen w-full">-->
<!--    <sidebar></sidebar>-->
<!--    <navbar></navbar>-->
<!--  </div>-->


</template>

<script lang="ts" setup>
import Navbar from "./components/navbar/index.vue"
import Sidebar from "./components/sidebar/index.vue"
import type { MenuOption } from 'naive-ui'
const inverted = ref(true)
const collapsed = ref(false)
const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199'
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator'
          },
          {
            label: '羊男',
            key: 'sheep-man'
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky',
            href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
</script>

<style scoped>

</style>