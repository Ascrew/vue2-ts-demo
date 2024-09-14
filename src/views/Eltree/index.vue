<!--
 * @Date: 2024-04-08 15:19:38
 * @LastEditors: Please set LastEditors
 * @Description: el tree demo
 * @FilePath: src/views/Eltree/index.vue
-->
<template>
  <main class="el-tree-container">
    <el-tree
      show-checkbox
      :node-key="nodeKey"
      ref="tree"
      lazy
      highlight-current
      :check-strictly="true"
      :props="defaultProps"
      :load="loadNode"
      @node-click="onClickNode"
    ></el-tree>
    <el-button @click="setCurrentKey">设置高亮 key</el-button>
    <el-button @click="getCheckedNodes">通过 node 获取</el-button>
    <el-button @click="getCheckedKeys">通过 key 获取</el-button>
    <el-button @click="setCheckedNodes">通过 node 设置</el-button>
    <el-button @click="setCheckedKeys">通过 key 设置</el-button>
    <el-button @click="resetChecked">清空</el-button>
    <el-button @click="checkSonNodes">选中子节点</el-button>
    <el-button @click="nodeLabelPlusOne">增加label</el-button>
    <el-button @click="refreshSomeNode">刷新部分节点</el-button>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'tree'
})
export default class extends Vue {
  public nodeKey = 'uid';
  public id = 0;

  public deepClone(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
  public resolve1 = null;
  public resolve2 = null;
  public loadNode(node: any, resolve: any) {
    console.log('listen loadnode node', node);
    console.log('listen loadnode resolve', resolve);
    if (node.level === 0) {
      return resolve(this.deepClone(this.sourceData.slice(0, 2)));
    }
    if (node.level === 1) {
      this.resolve1 = resolve;
      return resolve(this.deepClone(this.sourceData.slice(2, 4)));
    }
    if (node.level === 2) {
      this.resolve2 = resolve;
      return resolve(this.deepClone(this.sourceData.slice(4)));
    }
    return resolve([]);
  }
  public sourceData: any[] = [
    {
      id: 0,
      uid: 0,
      label: 0
    },
    {
      id: 1,
      uid: 1,
      label: 1
    },
    {
      id: 2,
      uid: 2,
      label: 2
    },
    {
      id: 3,
      uid: 3,
      label: 3
    },
    {
      id: 4,
      uid: 4,
      label: 4,
      isLeaf: true
    },
    {
      id: 5,
      uid: 6,
      label: 5,
      isLeaf: true
    }
  ];

  public defaultProps = {
    children: 'children',
    label: 'label'
  };
  public selectNodes: any[] = [];
  get treeRef(): any {
    return this.$refs.tree;
  }
  public getCheckedNodes() {
    let a = 0;
    console.log(a);

    this.selectNodes = (this as any).$refs.tree.getCheckedNodes();
    console.log(this.treeRef.getCheckedNodes());
  }
  public getCheckedKeys() {
    console.log(this.treeRef.getCheckedKeys());
  }

  public setCheckedNodes() {
    this.treeRef.setCheckedNodes([
      {
        id: 5,
        label: '二级 2-1'
      },
      {
        id: 9,
        label: '三级 1-1-1'
      }
    ]);
  }
  public setCheckedKeys() {
    this.treeRef.setCheckedKeys([3]);
  }
  public resetChecked() {
    this.treeRef.setCheckedKeys([]);
  }
  public checkSonNodes() {
    console.log(this.treeRef.getNode(this.treeRef.getCheckedNodes()[0].id));
    this.treeRef.setCheckedNodes(this.treeRef.getCheckedNodes()[0].children);
  }

  public onClickNode(node: any, data: any) {
    console.log('listen clic node node', node);
    console.log('listen clic node data', data);
  }

  public nodeLabelPlusOne() {
    this.sourceData[4].label = this.sourceData[4].label + 1;
    console.log(this.resolve1 === this.resolve2);
  }

  public refreshSomeNode() {
    let node = this.treeRef.getNode(this.treeRef.getCurrentNode().id);
    node.parent.loaded = false; // 设置节点为未加载状态
    node.parent.expand(); // 主动调用展开节点方法，重新查询该节点下的所有子节点
  }

  public setCurrentKey() {
    this.treeRef.setCurrentKey(6);
  }
}
</script>
<style lang="stylus" scoped></style>
