import * as dagre from '@dagrejs/dagre';
import { LayoutNode } from './LayoutNode';
export class DagreNode extends LayoutNode implements dagre.Node {
  getUpdatableNode(): dagre.Node {
    return {
      width: this.width,
      height: this.height,
      x: this.x,
      y: this.y
    };
  }
  updateToNode(updatedNode: dagre.Node | undefined): void {
    if (updatedNode) {
      this.x = updatedNode.x;
      this.y = updatedNode.y;
      this.update();
    }
  }
}
