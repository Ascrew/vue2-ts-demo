<template>
  <div>
    <TreeNodeComponent :nodes="treeData"></TreeNodeComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TreeNodeComponent from './TreeNodeComponent.vue';
import { TreeNode } from './model';
@Component({
  components: { TreeNodeComponent }
})
export default class MainComponent extends Vue {
  treeData: TreeNode[] = [
    {
      id: 1,
      title: '专题库1',
      description: '专题描述专题描述专题描述专题描述',
      date: '2023-09-28 09:45:57',
      image: 'image1.jpg',
      children: [
        {
          id: 2,
          title: '专题库2',
          description: '专题描述专题描述专题描述专题描述',
          date: '2023-09-28 09:45:57',
          image: 'image2.jpg'
        },
        {
          id: 3,
          title: '专题库3',
          description: '专题描述专题描述专题描述专题描述',
          date: '2023-09-28 09:45:57',
          image: 'image3.jpg'
        }
      ]
    },
    {
      id: 4,
      title: '专题库4',
      description: '专题描述专题描述专题描述专题描述',
      date: '2023-09-28 09:45:57',
      image: 'image4.jpg'
    }
  ];
}
</script>
