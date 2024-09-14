<template>
  <div class="tree-node">
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item v-for="node in nodes" :key="node.id" :name="node.id">
        <template #title>
          <div class="node-header" @click.stop="toggleExpand(node)">
            <img :src="node.image" alt="Node Image" class="node-image" />
            <div class="node-content">
              <div class="node-header">
                <div class="node-date">{{ node.date }} 发布</div>
                <h3>{{ node.title }}</h3>
                <div class="node-description">{{ node.description }}</div>
              </div>
              <div class="node-actions">
                <el-button size="mini" type="primary">
                  {{ node.title.includes('1') ? '重大活动' : '重要会议' }}
                </el-button>
                <el-button size="mini" type="primary">
                  <i
                    :class="[
                      'iconfont',
                      node.isExpanded ? 'icon-up' : 'icon-down'
                    ]"
                  ></i>
                </el-button>
                <el-button size="mini" type="primary">
                  <i class="iconfont icon-snapshot"></i>
                </el-button>
              </div>
            </div>
          </div>
        </template>

        <!-- 子节点内容 -->
        <div v-if="node.children" class="children">
          <TreeNodeComponent :nodes="node.children"></TreeNodeComponent>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TreeNode } from './model';

@Component
export default class TreeNodeComponent extends Vue {
  @Prop({ required: true }) nodes!: TreeNode[];

  activeNames: number[] = [];

  toggleExpand(node: TreeNode) {
    if (this.activeNames.includes(node.id)) {
      this.activeNames = this.activeNames.filter((id) => id !== node.id);
    } else {
      this.activeNames.push(node.id);
    }
  }
}
</script>

<style lang="scss">
.tree-node {
  .el-collapse-item__header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .node-image {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    margin-right: 20px;
  }

  .node-content {
    flex: 1;

    .node-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        font-size: 20px;
        margin: 0;
      }
    }

    .node-actions {
      display: flex;
      align-items: center;

      .iconfont {
        font-size: 20px;
        margin-left: 10px;

        &.icon-up::before {
          content: '\f106';
        }

        &.icon-down::before {
          content: '\f107';
        }

        &.icon-snapshot::before {
          content: '\f030';
        }
      }
    }
  }

  .children {
    padding-left: 20px;
    margin-top: 10px;
  }
}
</style>
