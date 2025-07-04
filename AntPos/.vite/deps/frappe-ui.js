import {
  computed,
  customRef,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  isRef,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  reactive,
  readonly,
  ref,
  shallowRef,
  toRef,
  toValue,
  unref,
  watch,
  watchEffect
} from "./chunk-GY7FY3NU.js";
import {
  __export,
  __publicField
} from "./chunk-UVKRO5ER.js";

// node_modules/frappe-ui/src/components/Alert/index.ts
import { default as default2 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Alert/Alert.vue";

// node_modules/frappe-ui/src/components/Autocomplete/index.ts
import { default as default3 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Autocomplete/Autocomplete.vue";

// node_modules/frappe-ui/src/components/Avatar/index.ts
import { default as default4 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Avatar/Avatar.vue";

// node_modules/frappe-ui/src/components/Badge/index.ts
import { default as default5 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Badge/Badge.vue";

// node_modules/frappe-ui/src/components/Breadcrumbs/index.ts
import { default as default6 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Breadcrumbs/Breadcrumbs.vue";

// node_modules/frappe-ui/src/components/Button/index.ts
import { default as default7 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Button/Button.vue";

// node_modules/frappe-ui/src/index.ts
import { default as default33 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Card.vue";

// node_modules/frappe-ui/src/components/Combobox/index.ts
import { default as default8 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Combobox/Combobox.vue";

// node_modules/frappe-ui/src/components/Checkbox/index.ts
import { default as default9 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Checkbox/Checkbox.vue";

// node_modules/frappe-ui/src/index.ts
import { default as default34 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/DatePicker/DatePicker.vue";
import { default as default35 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/DatePicker/DateTimePicker.vue";
import { default as default36 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/DatePicker/DateRangePicker.vue";

// node_modules/frappe-ui/src/components/Dialog/index.ts
import { default as default10 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Dialog/Dialog.vue";

// node_modules/frappe-ui/src/index.ts
import { default as default37 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Dialogs.vue";

// node_modules/frappe-ui/src/components/Divider/index.ts
import { default as default11 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Divider/Divider.vue";

// node_modules/frappe-ui/src/components/Dropdown/index.ts
import { default as default12 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Dropdown/Dropdown.vue";

// node_modules/frappe-ui/src/components/ErrorMessage/index.ts
import { default as default13 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ErrorMessage/ErrorMessage.vue";

// node_modules/frappe-ui/src/index.ts
import { default as default38 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/FeatherIcon.vue";

// node_modules/frappe-ui/src/components/FileUploader/index.ts
import { default as default14 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/FileUploader/FileUploader.vue";

// node_modules/frappe-ui/src/components/FormControl/index.ts
import { default as default15 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/FormControl/FormControl.vue";

// node_modules/frappe-ui/src/index.ts
import { default as default39 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/FormLabel.vue";
import { default as default40 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/GreenCheckIcon.vue";
import { default as default41 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Input.vue";
import { default as default42 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Link.vue";
import { default as default43 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListItem.vue";
import { default as default44 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/LoadingIndicator.vue";
import { default as default45 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/LoadingText.vue";

// node_modules/frappe-ui/src/components/Progress/index.ts
import { default as default16 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Progress/Progress.vue";

// node_modules/frappe-ui/src/components/Popover/index.ts
import { default as default17 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Popover/Popover.vue";

// node_modules/frappe-ui/src/components/Rating/index.ts
import { default as default18 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Rating/Rating.vue";

// node_modules/frappe-ui/src/index.ts
import { default as default46 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Resource.vue";

// node_modules/frappe-ui/src/components/Select/index.ts
import { default as default19 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Select/Select.vue";

// node_modules/frappe-ui/src/components/Spinner/index.ts
import { default as default20 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Spinner/Spinner.vue";

// node_modules/frappe-ui/src/components/Switch/index.ts
import { default as default21 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Switch/Switch.vue";

// node_modules/frappe-ui/src/components/TabButtons/index.ts
import { default as default22 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/TabButtons/TabButtons.vue";

// node_modules/frappe-ui/src/index.ts
import { default as default47 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Tabs/Tabs.vue";
import { default as default48 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Tabs/TabList.vue";
import { default as default49 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Tabs/TabPanel.vue";

// node_modules/frappe-ui/src/components/TextInput/index.ts
import { default as default23 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/TextInput/TextInput.vue";

// node_modules/frappe-ui/src/components/Textarea/index.ts
import { default as default24 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Textarea/Textarea.vue";

// node_modules/frappe-ui/src/components/TextEditor/index.js
import { default as default25 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/TextEditor/TextEditor.vue";
import { default as default26 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/TextEditor/TextEditor.vue";
import { default as default27 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/TextEditor/TextEditorBubbleMenu.vue";
import { default as default28 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/TextEditor/TextEditorFixedMenu.vue";
import { default as default29 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/TextEditor/TextEditorFloatingMenu.vue";

// node_modules/orderedmap/dist/index.js
function OrderedMap(content) {
  this.content = content;
}
OrderedMap.prototype = {
  constructor: OrderedMap,
  find: function(key) {
    for (var i = 0; i < this.content.length; i += 2)
      if (this.content[i] === key) return i;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(key) {
    var found2 = this.find(key);
    return found2 == -1 ? void 0 : this.content[found2 + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(key, value2, newKey) {
    var self2 = newKey && newKey != key ? this.remove(newKey) : this;
    var found2 = self2.find(key), content = self2.content.slice();
    if (found2 == -1) {
      content.push(newKey || key, value2);
    } else {
      content[found2 + 1] = value2;
      if (newKey) content[found2] = newKey;
    }
    return new OrderedMap(content);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(key) {
    var found2 = this.find(key);
    if (found2 == -1) return this;
    var content = this.content.slice();
    content.splice(found2, 2);
    return new OrderedMap(content);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(key, value2) {
    return new OrderedMap([key, value2].concat(this.remove(key).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(key, value2) {
    var content = this.remove(key).content.slice();
    content.push(key, value2);
    return new OrderedMap(content);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(place, key, value2) {
    var without = this.remove(key), content = without.content.slice();
    var found2 = without.find(place);
    content.splice(found2 == -1 ? content.length : found2, 0, key, value2);
    return new OrderedMap(content);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(f) {
    for (var i = 0; i < this.content.length; i += 2)
      f(this.content[i], this.content[i + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(map) {
    map = OrderedMap.from(map);
    if (!map.size) return this;
    return new OrderedMap(map.content.concat(this.subtract(map).content));
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(map) {
    map = OrderedMap.from(map);
    if (!map.size) return this;
    return new OrderedMap(this.subtract(map).content.concat(map.content));
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(map) {
    var result = this;
    map = OrderedMap.from(map);
    for (var i = 0; i < map.content.length; i += 2)
      result = result.remove(map.content[i]);
    return result;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var result = {};
    this.forEach(function(key, value2) {
      result[key] = value2;
    });
    return result;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
OrderedMap.from = function(value2) {
  if (value2 instanceof OrderedMap) return value2;
  var content = [];
  if (value2) for (var prop in value2) content.push(prop, value2[prop]);
  return new OrderedMap(content);
};
var dist_default = OrderedMap;

// node_modules/prosemirror-model/dist/index.js
function findDiffStart(a, b, pos) {
  for (let i = 0; ; i++) {
    if (i == a.childCount || i == b.childCount)
      return a.childCount == b.childCount ? null : pos;
    let childA = a.child(i), childB = b.child(i);
    if (childA == childB) {
      pos += childA.nodeSize;
      continue;
    }
    if (!childA.sameMarkup(childB))
      return pos;
    if (childA.isText && childA.text != childB.text) {
      for (let j = 0; childA.text[j] == childB.text[j]; j++)
        pos++;
      return pos;
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffStart(childA.content, childB.content, pos + 1);
      if (inner != null)
        return inner;
    }
    pos += childA.nodeSize;
  }
}
function findDiffEnd(a, b, posA, posB) {
  for (let iA = a.childCount, iB = b.childCount; ; ) {
    if (iA == 0 || iB == 0)
      return iA == iB ? null : { a: posA, b: posB };
    let childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
    if (childA == childB) {
      posA -= size;
      posB -= size;
      continue;
    }
    if (!childA.sameMarkup(childB))
      return { a: posA, b: posB };
    if (childA.isText && childA.text != childB.text) {
      let same = 0, minSize = Math.min(childA.text.length, childB.text.length);
      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++;
        posA--;
        posB--;
      }
      return { a: posA, b: posB };
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
      if (inner)
        return inner;
    }
    posA -= size;
    posB -= size;
  }
}
var Fragment = class _Fragment {
  /**
  @internal
  */
  constructor(content, size) {
    this.content = content;
    this.size = size || 0;
    if (size == null)
      for (let i = 0; i < content.length; i++)
        this.size += content[i].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(from, to, f, nodeStart = 0, parent) {
    for (let i = 0, pos = 0; pos < to; i++) {
      let child = this.content[i], end2 = pos + child.nodeSize;
      if (end2 > from && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
        let start2 = pos + 1;
        child.nodesBetween(Math.max(0, from - start2), Math.min(child.content.size, to - start2), f, nodeStart + start2);
      }
      pos = end2;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(f) {
    this.nodesBetween(0, this.size, f);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(from, to, blockSeparator, leafText) {
    let text = "", first2 = true;
    this.nodesBetween(from, to, (node, pos) => {
      let nodeText = node.isText ? node.text.slice(Math.max(from, pos) - pos, to - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
      if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
        if (first2)
          first2 = false;
        else
          text += blockSeparator;
      }
      text += nodeText;
    }, 0);
    return text;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(other) {
    if (!other.size)
      return this;
    if (!this.size)
      return other;
    let last = this.lastChild, first2 = other.firstChild, content = this.content.slice(), i = 0;
    if (last.isText && last.sameMarkup(first2)) {
      content[content.length - 1] = last.withText(last.text + first2.text);
      i = 1;
    }
    for (; i < other.content.length; i++)
      content.push(other.content[i]);
    return new _Fragment(content, this.size + other.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(from, to = this.size) {
    if (from == 0 && to == this.size)
      return this;
    let result = [], size = 0;
    if (to > from)
      for (let i = 0, pos = 0; pos < to; i++) {
        let child = this.content[i], end2 = pos + child.nodeSize;
        if (end2 > from) {
          if (pos < from || end2 > to) {
            if (child.isText)
              child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos));
            else
              child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1));
          }
          result.push(child);
          size += child.nodeSize;
        }
        pos = end2;
      }
    return new _Fragment(result, size);
  }
  /**
  @internal
  */
  cutByIndex(from, to) {
    if (from == to)
      return _Fragment.empty;
    if (from == 0 && to == this.content.length)
      return this;
    return new _Fragment(this.content.slice(from, to));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(index2, node) {
    let current = this.content[index2];
    if (current == node)
      return this;
    let copy2 = this.content.slice();
    let size = this.size + node.nodeSize - current.nodeSize;
    copy2[index2] = node;
    return new _Fragment(copy2, size);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(node) {
    return new _Fragment([node].concat(this.content), this.size + node.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(node) {
    return new _Fragment(this.content.concat(node), this.size + node.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(other) {
    if (this.content.length != other.content.length)
      return false;
    for (let i = 0; i < this.content.length; i++)
      if (!this.content[i].eq(other.content[i]))
        return false;
    return true;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(index2) {
    let found2 = this.content[index2];
    if (!found2)
      throw new RangeError("Index " + index2 + " out of range for " + this);
    return found2;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(index2) {
    return this.content[index2] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(f) {
    for (let i = 0, p = 0; i < this.content.length; i++) {
      let child = this.content[i];
      f(child, p, i);
      p += child.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(other, pos = 0) {
    return findDiffStart(this, other, pos);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(other, pos = this.size, otherPos = other.size) {
    return findDiffEnd(this, other, pos, otherPos);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(pos, round2 = -1) {
    if (pos == 0)
      return retIndex(0, pos);
    if (pos == this.size)
      return retIndex(this.content.length, pos);
    if (pos > this.size || pos < 0)
      throw new RangeError(`Position ${pos} outside of fragment (${this})`);
    for (let i = 0, curPos = 0; ; i++) {
      let cur = this.child(i), end2 = curPos + cur.nodeSize;
      if (end2 >= pos) {
        if (end2 == pos || round2 > 0)
          return retIndex(i + 1, end2);
        return retIndex(i, curPos);
      }
      curPos = end2;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((n) => n.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(schema, value2) {
    if (!value2)
      return _Fragment.empty;
    if (!Array.isArray(value2))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new _Fragment(value2.map(schema.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(array) {
    if (!array.length)
      return _Fragment.empty;
    let joined, size = 0;
    for (let i = 0; i < array.length; i++) {
      let node = array[i];
      size += node.nodeSize;
      if (i && node.isText && array[i - 1].sameMarkup(node)) {
        if (!joined)
          joined = array.slice(0, i);
        joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
      } else if (joined) {
        joined.push(node);
      }
    }
    return new _Fragment(joined || array, size);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(nodes) {
    if (!nodes)
      return _Fragment.empty;
    if (nodes instanceof _Fragment)
      return nodes;
    if (Array.isArray(nodes))
      return this.fromArray(nodes);
    if (nodes.attrs)
      return new _Fragment([nodes], nodes.nodeSize);
    throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
Fragment.empty = new Fragment([], 0);
var found = { index: 0, offset: 0 };
function retIndex(index2, offset2) {
  found.index = index2;
  found.offset = offset2;
  return found;
}
function compareDeep(a, b) {
  if (a === b)
    return true;
  if (!(a && typeof a == "object") || !(b && typeof b == "object"))
    return false;
  let array = Array.isArray(a);
  if (Array.isArray(b) != array)
    return false;
  if (array) {
    if (a.length != b.length)
      return false;
    for (let i = 0; i < a.length; i++)
      if (!compareDeep(a[i], b[i]))
        return false;
  } else {
    for (let p in a)
      if (!(p in b) || !compareDeep(a[p], b[p]))
        return false;
    for (let p in b)
      if (!(p in a))
        return false;
  }
  return true;
}
var Mark = class _Mark {
  /**
  @internal
  */
  constructor(type, attrs) {
    this.type = type;
    this.attrs = attrs;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(set3) {
    let copy2, placed = false;
    for (let i = 0; i < set3.length; i++) {
      let other = set3[i];
      if (this.eq(other))
        return set3;
      if (this.type.excludes(other.type)) {
        if (!copy2)
          copy2 = set3.slice(0, i);
      } else if (other.type.excludes(this.type)) {
        return set3;
      } else {
        if (!placed && other.type.rank > this.type.rank) {
          if (!copy2)
            copy2 = set3.slice(0, i);
          copy2.push(this);
          placed = true;
        }
        if (copy2)
          copy2.push(other);
      }
    }
    if (!copy2)
      copy2 = set3.slice();
    if (!placed)
      copy2.push(this);
    return copy2;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(set3) {
    for (let i = 0; i < set3.length; i++)
      if (this.eq(set3[i]))
        return set3.slice(0, i).concat(set3.slice(i + 1));
    return set3;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(set3) {
    for (let i = 0; i < set3.length; i++)
      if (this.eq(set3[i]))
        return true;
    return false;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(other) {
    return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let obj = { type: this.type.name };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    return obj;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(schema, json) {
    if (!json)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let type = schema.marks[json.type];
    if (!type)
      throw new RangeError(`There is no mark type ${json.type} in this schema`);
    let mark = type.create(json.attrs);
    type.checkAttrs(mark.attrs);
    return mark;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(a, b) {
    if (a == b)
      return true;
    if (a.length != b.length)
      return false;
    for (let i = 0; i < a.length; i++)
      if (!a[i].eq(b[i]))
        return false;
    return true;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(marks) {
    if (!marks || Array.isArray(marks) && marks.length == 0)
      return _Mark.none;
    if (marks instanceof _Mark)
      return [marks];
    let copy2 = marks.slice();
    copy2.sort((a, b) => a.type.rank - b.type.rank);
    return copy2;
  }
};
Mark.none = [];
var ReplaceError = class extends Error {
};
var Slice = class _Slice {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(content, openStart, openEnd) {
    this.content = content;
    this.openStart = openStart;
    this.openEnd = openEnd;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(pos, fragment) {
    let content = insertInto(this.content, pos + this.openStart, fragment);
    return content && new _Slice(content, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(from, to) {
    return new _Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(other) {
    return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let json = { content: this.content.toJSON() };
    if (this.openStart > 0)
      json.openStart = this.openStart;
    if (this.openEnd > 0)
      json.openEnd = this.openEnd;
    return json;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(schema, json) {
    if (!json)
      return _Slice.empty;
    let openStart = json.openStart || 0, openEnd = json.openEnd || 0;
    if (typeof openStart != "number" || typeof openEnd != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new _Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(fragment, openIsolating = true) {
    let openStart = 0, openEnd = 0;
    for (let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild)
      openStart++;
    for (let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild)
      openEnd++;
    return new _Slice(fragment, openStart, openEnd);
  }
};
Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(content, from, to) {
  let { index: index2, offset: offset2 } = content.findIndex(from), child = content.maybeChild(index2);
  let { index: indexTo, offset: offsetTo } = content.findIndex(to);
  if (offset2 == from || child.isText) {
    if (offsetTo != to && !content.child(indexTo).isText)
      throw new RangeError("Removing non-flat range");
    return content.cut(0, from).append(content.cut(to));
  }
  if (index2 != indexTo)
    throw new RangeError("Removing non-flat range");
  return content.replaceChild(index2, child.copy(removeRange(child.content, from - offset2 - 1, to - offset2 - 1)));
}
function insertInto(content, dist, insert, parent) {
  let { index: index2, offset: offset2 } = content.findIndex(dist), child = content.maybeChild(index2);
  if (offset2 == dist || child.isText) {
    if (parent && !parent.canReplace(index2, index2, insert))
      return null;
    return content.cut(0, dist).append(insert).append(content.cut(dist));
  }
  let inner = insertInto(child.content, dist - offset2 - 1, insert);
  return inner && content.replaceChild(index2, child.copy(inner));
}
function replace($from, $to, slice) {
  if (slice.openStart > $from.depth)
    throw new ReplaceError("Inserted content deeper than insertion position");
  if ($from.depth - slice.openStart != $to.depth - slice.openEnd)
    throw new ReplaceError("Inconsistent open depths");
  return replaceOuter($from, $to, slice, 0);
}
function replaceOuter($from, $to, slice, depth) {
  let index2 = $from.index(depth), node = $from.node(depth);
  if (index2 == $to.index(depth) && depth < $from.depth - slice.openStart) {
    let inner = replaceOuter($from, $to, slice, depth + 1);
    return node.copy(node.content.replaceChild(index2, inner));
  } else if (!slice.content.size) {
    return close(node, replaceTwoWay($from, $to, depth));
  } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) {
    let parent = $from.parent, content = parent.content;
    return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
  } else {
    let { start: start2, end: end2 } = prepareSliceForReplace(slice, $from);
    return close(node, replaceThreeWay($from, start2, end2, $to, depth));
  }
}
function checkJoin(main2, sub) {
  if (!sub.type.compatibleContent(main2.type))
    throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main2.type.name);
}
function joinable($before, $after, depth) {
  let node = $before.node(depth);
  checkJoin(node, $after.node(depth));
  return node;
}
function addNode(child, target) {
  let last = target.length - 1;
  if (last >= 0 && child.isText && child.sameMarkup(target[last]))
    target[last] = child.withText(target[last].text + child.text);
  else
    target.push(child);
}
function addRange($start, $end, depth, target) {
  let node = ($end || $start).node(depth);
  let startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
  if ($start) {
    startIndex = $start.index(depth);
    if ($start.depth > depth) {
      startIndex++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target);
      startIndex++;
    }
  }
  for (let i = startIndex; i < endIndex; i++)
    addNode(node.child(i), target);
  if ($end && $end.depth == depth && $end.textOffset)
    addNode($end.nodeBefore, target);
}
function close(node, content) {
  node.type.checkContent(content);
  return node.copy(content);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
  let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
  let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
  let content = [];
  addRange(null, $from, depth, content);
  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
  } else {
    if (openStart)
      addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
    addRange($start, $end, depth, content);
    if (openEnd)
      addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function replaceTwoWay($from, $to, depth) {
  let content = [];
  addRange(null, $from, depth, content);
  if ($from.depth > depth) {
    let type = joinable($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function prepareSliceForReplace(slice, $along) {
  let extra = $along.depth - slice.openStart, parent = $along.node(extra);
  let node = parent.copy(slice.content);
  for (let i = extra - 1; i >= 0; i--)
    node = $along.node(i).copy(Fragment.from(node));
  return {
    start: node.resolveNoCache(slice.openStart + extra),
    end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
  };
}
var ResolvedPos = class _ResolvedPos {
  /**
  @internal
  */
  constructor(pos, path, parentOffset) {
    this.pos = pos;
    this.path = path;
    this.parentOffset = parentOffset;
    this.depth = path.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(val) {
    if (val == null)
      return this.depth;
    if (val < 0)
      return this.depth + val;
    return val;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(depth) {
    return this.path[this.resolveDepth(depth) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(depth) {
    return this.path[this.resolveDepth(depth) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(depth) {
    depth = this.resolveDepth(depth);
    return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(depth) {
    depth = this.resolveDepth(depth);
    return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(depth) {
    depth = this.resolveDepth(depth);
    return this.start(depth) + this.node(depth).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(depth) {
    depth = this.resolveDepth(depth);
    if (!depth)
      throw new RangeError("There is no position before the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(depth) {
    depth = this.resolveDepth(depth);
    if (!depth)
      throw new RangeError("There is no position after the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let parent = this.parent, index2 = this.index(this.depth);
    if (index2 == parent.childCount)
      return null;
    let dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index2);
    return dOff ? parent.child(index2).cut(dOff) : child;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let index2 = this.index(this.depth);
    let dOff = this.pos - this.path[this.path.length - 1];
    if (dOff)
      return this.parent.child(index2).cut(0, dOff);
    return index2 == 0 ? null : this.parent.child(index2 - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(index2, depth) {
    depth = this.resolveDepth(depth);
    let node = this.path[depth * 3], pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    for (let i = 0; i < index2; i++)
      pos += node.child(i).nodeSize;
    return pos;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let parent = this.parent, index2 = this.index();
    if (parent.content.size == 0)
      return Mark.none;
    if (this.textOffset)
      return parent.child(index2).marks;
    let main2 = parent.maybeChild(index2 - 1), other = parent.maybeChild(index2);
    if (!main2) {
      let tmp = main2;
      main2 = other;
      other = tmp;
    }
    let marks = main2.marks;
    for (var i = 0; i < marks.length; i++)
      if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks)))
        marks = marks[i--].removeFromSet(marks);
    return marks;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross($end) {
    let after = this.parent.maybeChild(this.index());
    if (!after || !after.isInline)
      return null;
    let marks = after.marks, next = $end.parent.maybeChild($end.index());
    for (var i = 0; i < marks.length; i++)
      if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks)))
        marks = marks[i--].removeFromSet(marks);
    return marks;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(pos) {
    for (let depth = this.depth; depth > 0; depth--)
      if (this.start(depth) <= pos && this.end(depth) >= pos)
        return depth;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(other = this, pred) {
    if (other.pos < this.pos)
      return other.blockRange(this);
    for (let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--)
      if (other.pos <= this.end(d) && (!pred || pred(this.node(d))))
        return new NodeRange(this, other, d);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(other) {
    return this.pos - this.parentOffset == other.pos - other.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(other) {
    return other.pos > this.pos ? other : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(other) {
    return other.pos < this.pos ? other : this;
  }
  /**
  @internal
  */
  toString() {
    let str = "";
    for (let i = 1; i <= this.depth; i++)
      str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
    return str + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(doc3, pos) {
    if (!(pos >= 0 && pos <= doc3.content.size))
      throw new RangeError("Position " + pos + " out of range");
    let path = [];
    let start2 = 0, parentOffset = pos;
    for (let node = doc3; ; ) {
      let { index: index2, offset: offset2 } = node.content.findIndex(parentOffset);
      let rem = parentOffset - offset2;
      path.push(node, index2, start2 + offset2);
      if (!rem)
        break;
      node = node.child(index2);
      if (node.isText)
        break;
      parentOffset = rem - 1;
      start2 += offset2 + 1;
    }
    return new _ResolvedPos(pos, path, parentOffset);
  }
  /**
  @internal
  */
  static resolveCached(doc3, pos) {
    let cache2 = resolveCache.get(doc3);
    if (cache2) {
      for (let i = 0; i < cache2.elts.length; i++) {
        let elt = cache2.elts[i];
        if (elt.pos == pos)
          return elt;
      }
    } else {
      resolveCache.set(doc3, cache2 = new ResolveCache());
    }
    let result = cache2.elts[cache2.i] = _ResolvedPos.resolve(doc3, pos);
    cache2.i = (cache2.i + 1) % resolveCacheSize;
    return result;
  }
};
var ResolveCache = class {
  constructor() {
    this.elts = [];
    this.i = 0;
  }
};
var resolveCacheSize = 12;
var resolveCache = /* @__PURE__ */ new WeakMap();
var NodeRange = class {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor($from, $to, depth) {
    this.$from = $from;
    this.$to = $to;
    this.depth = depth;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
};
var emptyAttrs = /* @__PURE__ */ Object.create(null);
var Node = class _Node {
  /**
  @internal
  */
  constructor(type, attrs, content, marks = Mark.none) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.content = content || Fragment.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(index2) {
    return this.content.child(index2);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(index2) {
    return this.content.maybeChild(index2);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(f) {
    this.content.forEach(f);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(from, to, f, startPos = 0) {
    this.content.nodesBetween(from, to, f, startPos, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(f) {
    this.nodesBetween(0, this.content.size, f);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(from, to, blockSeparator, leafText) {
    return this.content.textBetween(from, to, blockSeparator, leafText);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(other) {
    return this == other || this.sameMarkup(other) && this.content.eq(other.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(other) {
    return this.hasMarkup(other.type, other.attrs, other.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(type, attrs, marks) {
    return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(content = null) {
    if (content == this.content)
      return this;
    return new _Node(this.type, this.attrs, content, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(marks) {
    return marks == this.marks ? this : new _Node(this.type, this.attrs, this.content, marks);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(from, to = this.content.size) {
    if (from == 0 && to == this.content.size)
      return this;
    return this.copy(this.content.cut(from, to));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(from, to = this.content.size, includeParents = false) {
    if (from == to)
      return Slice.empty;
    let $from = this.resolve(from), $to = this.resolve(to);
    let depth = includeParents ? 0 : $from.sharedDepth(to);
    let start2 = $from.start(depth), node = $from.node(depth);
    let content = node.content.cut($from.pos - start2, $to.pos - start2);
    return new Slice(content, $from.depth - depth, $to.depth - depth);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(from, to, slice) {
    return replace(this.resolve(from), this.resolve(to), slice);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(pos) {
    for (let node = this; ; ) {
      let { index: index2, offset: offset2 } = node.content.findIndex(pos);
      node = node.maybeChild(index2);
      if (!node)
        return null;
      if (offset2 == pos || node.isText)
        return node;
      pos -= offset2 + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(pos) {
    let { index: index2, offset: offset2 } = this.content.findIndex(pos);
    return { node: this.content.maybeChild(index2), index: index2, offset: offset2 };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(pos) {
    if (pos == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: index2, offset: offset2 } = this.content.findIndex(pos);
    if (offset2 < pos)
      return { node: this.content.child(index2), index: index2, offset: offset2 };
    let node = this.content.child(index2 - 1);
    return { node, index: index2 - 1, offset: offset2 - node.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(pos) {
    return ResolvedPos.resolveCached(this, pos);
  }
  /**
  @internal
  */
  resolveNoCache(pos) {
    return ResolvedPos.resolve(this, pos);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(from, to, type) {
    let found2 = false;
    if (to > from)
      this.nodesBetween(from, to, (node) => {
        if (type.isInSet(node.marks))
          found2 = true;
        return !found2;
      });
    return found2;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let name = this.type.name;
    if (this.content.size)
      name += "(" + this.content.toStringInner() + ")";
    return wrapMarks(this.marks, name);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(index2) {
    let match = this.type.contentMatch.matchFragment(this.content, 0, index2);
    if (!match)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return match;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(from, to, replacement = Fragment.empty, start2 = 0, end2 = replacement.childCount) {
    let one = this.contentMatchAt(from).matchFragment(replacement, start2, end2);
    let two = one && one.matchFragment(this.content, to);
    if (!two || !two.validEnd)
      return false;
    for (let i = start2; i < end2; i++)
      if (!this.type.allowsMarks(replacement.child(i).marks))
        return false;
    return true;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(from, to, type, marks) {
    if (marks && !this.type.allowsMarks(marks))
      return false;
    let start2 = this.contentMatchAt(from).matchType(type);
    let end2 = start2 && start2.matchFragment(this.content, to);
    return end2 ? end2.validEnd : false;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(other) {
    if (other.content.size)
      return this.canReplace(this.childCount, this.childCount, other.content);
    else
      return this.type.compatibleContent(other.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    this.type.checkAttrs(this.attrs);
    let copy2 = Mark.none;
    for (let i = 0; i < this.marks.length; i++) {
      let mark = this.marks[i];
      mark.type.checkAttrs(mark.attrs);
      copy2 = mark.addToSet(copy2);
    }
    if (!Mark.sameSet(copy2, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((m) => m.type.name)}`);
    this.content.forEach((node) => node.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let obj = { type: this.type.name };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    if (this.content.size)
      obj.content = this.content.toJSON();
    if (this.marks.length)
      obj.marks = this.marks.map((n) => n.toJSON());
    return obj;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(schema, json) {
    if (!json)
      throw new RangeError("Invalid input for Node.fromJSON");
    let marks = void 0;
    if (json.marks) {
      if (!Array.isArray(json.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      marks = json.marks.map(schema.markFromJSON);
    }
    if (json.type == "text") {
      if (typeof json.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return schema.text(json.text, marks);
    }
    let content = Fragment.fromJSON(schema, json.content);
    let node = schema.nodeType(json.type).create(json.attrs, content, marks);
    node.type.checkAttrs(node.attrs);
    return node;
  }
};
Node.prototype.text = void 0;
var TextNode = class _TextNode extends Node {
  /**
  @internal
  */
  constructor(type, attrs, content, marks) {
    super(type, attrs, null, marks);
    if (!content)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = content;
  }
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    return wrapMarks(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(from, to) {
    return this.text.slice(from, to);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(marks) {
    return marks == this.marks ? this : new _TextNode(this.type, this.attrs, this.text, marks);
  }
  withText(text) {
    if (text == this.text)
      return this;
    return new _TextNode(this.type, this.attrs, text, this.marks);
  }
  cut(from = 0, to = this.text.length) {
    if (from == 0 && to == this.text.length)
      return this;
    return this.withText(this.text.slice(from, to));
  }
  eq(other) {
    return this.sameMarkup(other) && this.text == other.text;
  }
  toJSON() {
    let base2 = super.toJSON();
    base2.text = this.text;
    return base2;
  }
};
function wrapMarks(marks, str) {
  for (let i = marks.length - 1; i >= 0; i--)
    str = marks[i].type.name + "(" + str + ")";
  return str;
}
var ContentMatch = class _ContentMatch {
  /**
  @internal
  */
  constructor(validEnd) {
    this.validEnd = validEnd;
    this.next = [];
    this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(string, nodeTypes) {
    let stream = new TokenStream(string, nodeTypes);
    if (stream.next == null)
      return _ContentMatch.empty;
    let expr = parseExpr(stream);
    if (stream.next)
      stream.err("Unexpected trailing text");
    let match = dfa(nfa(expr));
    checkForDeadEnds(match, stream);
    return match;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(type) {
    for (let i = 0; i < this.next.length; i++)
      if (this.next[i].type == type)
        return this.next[i].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(frag, start2 = 0, end2 = frag.childCount) {
    let cur = this;
    for (let i = start2; cur && i < end2; i++)
      cur = cur.matchType(frag.child(i).type);
    return cur;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let i = 0; i < this.next.length; i++) {
      let { type } = this.next[i];
      if (!(type.isText || type.hasRequiredAttrs()))
        return type;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(other) {
    for (let i = 0; i < this.next.length; i++)
      for (let j = 0; j < other.next.length; j++)
        if (this.next[i].type == other.next[j].type)
          return true;
    return false;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(after, toEnd = false, startIndex = 0) {
    let seen = [this];
    function search(match, types) {
      let finished = match.matchFragment(after, startIndex);
      if (finished && (!toEnd || finished.validEnd))
        return Fragment.from(types.map((tp) => tp.createAndFill()));
      for (let i = 0; i < match.next.length; i++) {
        let { type, next } = match.next[i];
        if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
          seen.push(next);
          let found2 = search(next, types.concat(type));
          if (found2)
            return found2;
        }
      }
      return null;
    }
    return search(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(target) {
    for (let i = 0; i < this.wrapCache.length; i += 2)
      if (this.wrapCache[i] == target)
        return this.wrapCache[i + 1];
    let computed2 = this.computeWrapping(target);
    this.wrapCache.push(target, computed2);
    return computed2;
  }
  /**
  @internal
  */
  computeWrapping(target) {
    let seen = /* @__PURE__ */ Object.create(null), active = [{ match: this, type: null, via: null }];
    while (active.length) {
      let current = active.shift(), match = current.match;
      if (match.matchType(target)) {
        let result = [];
        for (let obj = current; obj.type; obj = obj.via)
          result.push(obj.type);
        return result.reverse();
      }
      for (let i = 0; i < match.next.length; i++) {
        let { type, next } = match.next[i];
        if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
          active.push({ match: type.contentMatch, type, via: current });
          seen[type.name] = true;
        }
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(n) {
    if (n >= this.next.length)
      throw new RangeError(`There's no ${n}th edge in this content match`);
    return this.next[n];
  }
  /**
  @internal
  */
  toString() {
    let seen = [];
    function scan(m) {
      seen.push(m);
      for (let i = 0; i < m.next.length; i++)
        if (seen.indexOf(m.next[i].next) == -1)
          scan(m.next[i].next);
    }
    scan(this);
    return seen.map((m, i) => {
      let out = i + (m.validEnd ? "*" : " ") + " ";
      for (let i2 = 0; i2 < m.next.length; i2++)
        out += (i2 ? ", " : "") + m.next[i2].type.name + "->" + seen.indexOf(m.next[i2].next);
      return out;
    }).join("\n");
  }
};
ContentMatch.empty = new ContentMatch(true);
var TokenStream = class {
  constructor(string, nodeTypes) {
    this.string = string;
    this.nodeTypes = nodeTypes;
    this.inline = null;
    this.pos = 0;
    this.tokens = string.split(/\s*(?=\b|\W|$)/);
    if (this.tokens[this.tokens.length - 1] == "")
      this.tokens.pop();
    if (this.tokens[0] == "")
      this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(tok) {
    return this.next == tok && (this.pos++ || true);
  }
  err(str) {
    throw new SyntaxError(str + " (in content expression '" + this.string + "')");
  }
};
function parseExpr(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSeq(stream));
  } while (stream.eat("|"));
  return exprs.length == 1 ? exprs[0] : { type: "choice", exprs };
}
function parseExprSeq(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSubscript(stream));
  } while (stream.next && stream.next != ")" && stream.next != "|");
  return exprs.length == 1 ? exprs[0] : { type: "seq", exprs };
}
function parseExprSubscript(stream) {
  let expr = parseExprAtom(stream);
  for (; ; ) {
    if (stream.eat("+"))
      expr = { type: "plus", expr };
    else if (stream.eat("*"))
      expr = { type: "star", expr };
    else if (stream.eat("?"))
      expr = { type: "opt", expr };
    else if (stream.eat("{"))
      expr = parseExprRange(stream, expr);
    else
      break;
  }
  return expr;
}
function parseNum(stream) {
  if (/\D/.test(stream.next))
    stream.err("Expected number, got '" + stream.next + "'");
  let result = Number(stream.next);
  stream.pos++;
  return result;
}
function parseExprRange(stream, expr) {
  let min2 = parseNum(stream), max2 = min2;
  if (stream.eat(",")) {
    if (stream.next != "}")
      max2 = parseNum(stream);
    else
      max2 = -1;
  }
  if (!stream.eat("}"))
    stream.err("Unclosed braced range");
  return { type: "range", min: min2, max: max2, expr };
}
function resolveName(stream, name) {
  let types = stream.nodeTypes, type = types[name];
  if (type)
    return [type];
  let result = [];
  for (let typeName in types) {
    let type2 = types[typeName];
    if (type2.isInGroup(name))
      result.push(type2);
  }
  if (result.length == 0)
    stream.err("No node type or group '" + name + "' found");
  return result;
}
function parseExprAtom(stream) {
  if (stream.eat("(")) {
    let expr = parseExpr(stream);
    if (!stream.eat(")"))
      stream.err("Missing closing paren");
    return expr;
  } else if (!/\W/.test(stream.next)) {
    let exprs = resolveName(stream, stream.next).map((type) => {
      if (stream.inline == null)
        stream.inline = type.isInline;
      else if (stream.inline != type.isInline)
        stream.err("Mixing inline and block content");
      return { type: "name", value: type };
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : { type: "choice", exprs };
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
}
function nfa(expr) {
  let nfa2 = [[]];
  connect(compile(expr, 0), node());
  return nfa2;
  function node() {
    return nfa2.push([]) - 1;
  }
  function edge(from, to, term) {
    let edge2 = { term, to };
    nfa2[from].push(edge2);
    return edge2;
  }
  function connect(edges, to) {
    edges.forEach((edge2) => edge2.to = to);
  }
  function compile(expr2, from) {
    if (expr2.type == "choice") {
      return expr2.exprs.reduce((out, expr3) => out.concat(compile(expr3, from)), []);
    } else if (expr2.type == "seq") {
      for (let i = 0; ; i++) {
        let next = compile(expr2.exprs[i], from);
        if (i == expr2.exprs.length - 1)
          return next;
        connect(next, from = node());
      }
    } else if (expr2.type == "star") {
      let loop = node();
      edge(from, loop);
      connect(compile(expr2.expr, loop), loop);
      return [edge(loop)];
    } else if (expr2.type == "plus") {
      let loop = node();
      connect(compile(expr2.expr, from), loop);
      connect(compile(expr2.expr, loop), loop);
      return [edge(loop)];
    } else if (expr2.type == "opt") {
      return [edge(from)].concat(compile(expr2.expr, from));
    } else if (expr2.type == "range") {
      let cur = from;
      for (let i = 0; i < expr2.min; i++) {
        let next = node();
        connect(compile(expr2.expr, cur), next);
        cur = next;
      }
      if (expr2.max == -1) {
        connect(compile(expr2.expr, cur), cur);
      } else {
        for (let i = expr2.min; i < expr2.max; i++) {
          let next = node();
          edge(cur, next);
          connect(compile(expr2.expr, cur), next);
          cur = next;
        }
      }
      return [edge(cur)];
    } else if (expr2.type == "name") {
      return [edge(from, void 0, expr2.value)];
    } else {
      throw new Error("Unknown expr type");
    }
  }
}
function cmp(a, b) {
  return b - a;
}
function nullFrom(nfa2, node) {
  let result = [];
  scan(node);
  return result.sort(cmp);
  function scan(node2) {
    let edges = nfa2[node2];
    if (edges.length == 1 && !edges[0].term)
      return scan(edges[0].to);
    result.push(node2);
    for (let i = 0; i < edges.length; i++) {
      let { term, to } = edges[i];
      if (!term && result.indexOf(to) == -1)
        scan(to);
    }
  }
}
function dfa(nfa2) {
  let labeled = /* @__PURE__ */ Object.create(null);
  return explore(nullFrom(nfa2, 0));
  function explore(states) {
    let out = [];
    states.forEach((node) => {
      nfa2[node].forEach(({ term, to }) => {
        if (!term)
          return;
        let set3;
        for (let i = 0; i < out.length; i++)
          if (out[i][0] == term)
            set3 = out[i][1];
        nullFrom(nfa2, to).forEach((node2) => {
          if (!set3)
            out.push([term, set3 = []]);
          if (set3.indexOf(node2) == -1)
            set3.push(node2);
        });
      });
    });
    let state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa2.length - 1) > -1);
    for (let i = 0; i < out.length; i++) {
      let states2 = out[i][1].sort(cmp);
      state.next.push({ type: out[i][0], next: labeled[states2.join(",")] || explore(states2) });
    }
    return state;
  }
}
function checkForDeadEnds(match, stream) {
  for (let i = 0, work = [match]; i < work.length; i++) {
    let state = work[i], dead = !state.validEnd, nodes = [];
    for (let j = 0; j < state.next.length; j++) {
      let { type, next } = state.next[j];
      nodes.push(type.name);
      if (dead && !(type.isText || type.hasRequiredAttrs()))
        dead = false;
      if (work.indexOf(next) == -1)
        work.push(next);
    }
    if (dead)
      stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function defaultAttrs(attrs) {
  let defaults = /* @__PURE__ */ Object.create(null);
  for (let attrName in attrs) {
    let attr = attrs[attrName];
    if (!attr.hasDefault)
      return null;
    defaults[attrName] = attr.default;
  }
  return defaults;
}
function computeAttrs(attrs, value2) {
  let built = /* @__PURE__ */ Object.create(null);
  for (let name in attrs) {
    let given = value2 && value2[name];
    if (given === void 0) {
      let attr = attrs[name];
      if (attr.hasDefault)
        given = attr.default;
      else
        throw new RangeError("No value supplied for attribute " + name);
    }
    built[name] = given;
  }
  return built;
}
function checkAttrs(attrs, values, type, name) {
  for (let name2 in values)
    if (!(name2 in attrs))
      throw new RangeError(`Unsupported attribute ${name2} for ${type} of type ${name2}`);
  for (let name2 in attrs) {
    let attr = attrs[name2];
    if (attr.validate)
      attr.validate(values[name2]);
  }
}
function initAttrs(typeName, attrs) {
  let result = /* @__PURE__ */ Object.create(null);
  if (attrs)
    for (let name in attrs)
      result[name] = new Attribute(typeName, name, attrs[name]);
  return result;
}
var NodeType = class _NodeType {
  /**
  @internal
  */
  constructor(name, schema, spec) {
    this.name = name;
    this.schema = schema;
    this.spec = spec;
    this.markSet = null;
    this.groups = spec.group ? spec.group.split(" ") : [];
    this.attrs = initAttrs(name, spec.attrs);
    this.defaultAttrs = defaultAttrs(this.attrs);
    this.contentMatch = null;
    this.inlineContent = null;
    this.isBlock = !(spec.inline || name == "text");
    this.isText = name == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == ContentMatch.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(group) {
    return this.groups.indexOf(group) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let n in this.attrs)
      if (this.attrs[n].isRequired)
        return true;
    return false;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(other) {
    return this == other || this.contentMatch.compatible(other.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(attrs) {
    if (!attrs && this.defaultAttrs)
      return this.defaultAttrs;
    else
      return computeAttrs(this.attrs, attrs);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(attrs = null, content, marks) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(attrs = null, content, marks) {
    content = Fragment.from(content);
    this.checkContent(content);
    return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(attrs = null, content, marks) {
    attrs = this.computeAttrs(attrs);
    content = Fragment.from(content);
    if (content.size) {
      let before = this.contentMatch.fillBefore(content);
      if (!before)
        return null;
      content = before.append(content);
    }
    let matched = this.contentMatch.matchFragment(content);
    let after = matched && matched.fillBefore(Fragment.empty, true);
    if (!after)
      return null;
    return new Node(this, attrs, content.append(after), Mark.setFrom(marks));
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(content) {
    let result = this.contentMatch.matchFragment(content);
    if (!result || !result.validEnd)
      return false;
    for (let i = 0; i < content.childCount; i++)
      if (!this.allowsMarks(content.child(i).marks))
        return false;
    return true;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(content) {
    if (!this.validContent(content))
      throw new RangeError(`Invalid content for node ${this.name}: ${content.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(attrs) {
    checkAttrs(this.attrs, attrs, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(markType) {
    return this.markSet == null || this.markSet.indexOf(markType) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(marks) {
    if (this.markSet == null)
      return true;
    for (let i = 0; i < marks.length; i++)
      if (!this.allowsMarkType(marks[i].type))
        return false;
    return true;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(marks) {
    if (this.markSet == null)
      return marks;
    let copy2;
    for (let i = 0; i < marks.length; i++) {
      if (!this.allowsMarkType(marks[i].type)) {
        if (!copy2)
          copy2 = marks.slice(0, i);
      } else if (copy2) {
        copy2.push(marks[i]);
      }
    }
    return !copy2 ? marks : copy2.length ? copy2 : Mark.none;
  }
  /**
  @internal
  */
  static compile(nodes, schema) {
    let result = /* @__PURE__ */ Object.create(null);
    nodes.forEach((name, spec) => result[name] = new _NodeType(name, schema, spec));
    let topType = schema.spec.topNode || "doc";
    if (!result[topType])
      throw new RangeError("Schema is missing its top node type ('" + topType + "')");
    if (!result.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let _ in result.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return result;
  }
};
function validateType(typeName, attrName, type) {
  let types = type.split("|");
  return (value2) => {
    let name = value2 === null ? "null" : typeof value2;
    if (types.indexOf(name) < 0)
      throw new RangeError(`Expected value of type ${types} for attribute ${attrName} on type ${typeName}, got ${name}`);
  };
}
var Attribute = class {
  constructor(typeName, attrName, options) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
    this.default = options.default;
    this.validate = typeof options.validate == "string" ? validateType(typeName, attrName, options.validate) : options.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
};
var MarkType = class _MarkType {
  /**
  @internal
  */
  constructor(name, rank, schema, spec) {
    this.name = name;
    this.rank = rank;
    this.schema = schema;
    this.spec = spec;
    this.attrs = initAttrs(name, spec.attrs);
    this.excluded = null;
    let defaults = defaultAttrs(this.attrs);
    this.instance = defaults ? new Mark(this, defaults) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(attrs = null) {
    if (!attrs && this.instance)
      return this.instance;
    return new Mark(this, computeAttrs(this.attrs, attrs));
  }
  /**
  @internal
  */
  static compile(marks, schema) {
    let result = /* @__PURE__ */ Object.create(null), rank = 0;
    marks.forEach((name, spec) => result[name] = new _MarkType(name, rank++, schema, spec));
    return result;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(set3) {
    for (var i = 0; i < set3.length; i++)
      if (set3[i].type == this) {
        set3 = set3.slice(0, i).concat(set3.slice(i + 1));
        i--;
      }
    return set3;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(set3) {
    for (let i = 0; i < set3.length; i++)
      if (set3[i].type == this)
        return set3[i];
  }
  /**
  @internal
  */
  checkAttrs(attrs) {
    checkAttrs(this.attrs, attrs, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(other) {
    return this.excluded.indexOf(other) > -1;
  }
};
var Schema = class {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(spec) {
    this.linebreakReplacement = null;
    this.cached = /* @__PURE__ */ Object.create(null);
    let instanceSpec = this.spec = {};
    for (let prop in spec)
      instanceSpec[prop] = spec[prop];
    instanceSpec.nodes = dist_default.from(spec.nodes), instanceSpec.marks = dist_default.from(spec.marks || {}), this.nodes = NodeType.compile(this.spec.nodes, this);
    this.marks = MarkType.compile(this.spec.marks, this);
    let contentExprCache = /* @__PURE__ */ Object.create(null);
    for (let prop in this.nodes) {
      if (prop in this.marks)
        throw new RangeError(prop + " can not be both a node and a mark");
      let type = this.nodes[prop], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
      type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
      type.inlineContent = type.contentMatch.inlineContent;
      if (type.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!type.isInline || !type.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = type;
      }
      type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
    }
    for (let prop in this.marks) {
      let type = this.marks[prop], excl = type.spec.excludes;
      type.excluded = excl == null ? [type] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this);
    this.markFromJSON = this.markFromJSON.bind(this);
    this.topNodeType = this.nodes[this.spec.topNode || "doc"];
    this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(type, attrs = null, content, marks) {
    if (typeof type == "string")
      type = this.nodeType(type);
    else if (!(type instanceof NodeType))
      throw new RangeError("Invalid node type: " + type);
    else if (type.schema != this)
      throw new RangeError("Node type from different schema used (" + type.name + ")");
    return type.createChecked(attrs, content, marks);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(text, marks) {
    let type = this.nodes.text;
    return new TextNode(type, type.defaultAttrs, text, Mark.setFrom(marks));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(type, attrs) {
    if (typeof type == "string")
      type = this.marks[type];
    return type.create(attrs);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(json) {
    return Node.fromJSON(this, json);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(json) {
    return Mark.fromJSON(this, json);
  }
  /**
  @internal
  */
  nodeType(name) {
    let found2 = this.nodes[name];
    if (!found2)
      throw new RangeError("Unknown node type: " + name);
    return found2;
  }
};
function gatherMarks(schema, marks) {
  let found2 = [];
  for (let i = 0; i < marks.length; i++) {
    let name = marks[i], mark = schema.marks[name], ok = mark;
    if (mark) {
      found2.push(mark);
    } else {
      for (let prop in schema.marks) {
        let mark2 = schema.marks[prop];
        if (name == "_" || mark2.spec.group && mark2.spec.group.split(" ").indexOf(name) > -1)
          found2.push(ok = mark2);
      }
    }
    if (!ok)
      throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
  }
  return found2;
}
function isTagRule(rule) {
  return rule.tag != null;
}
function isStyleRule(rule) {
  return rule.style != null;
}
var DOMParser = class _DOMParser {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(schema, rules) {
    this.schema = schema;
    this.rules = rules;
    this.tags = [];
    this.styles = [];
    let matchedStyles = this.matchedStyles = [];
    rules.forEach((rule) => {
      if (isTagRule(rule)) {
        this.tags.push(rule);
      } else if (isStyleRule(rule)) {
        let prop = /[^=]*/.exec(rule.style)[0];
        if (matchedStyles.indexOf(prop) < 0)
          matchedStyles.push(prop);
        this.styles.push(rule);
      }
    });
    this.normalizeLists = !this.tags.some((r) => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
        return false;
      let node = schema.nodes[r.node];
      return node.contentMatch.matchType(node);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(dom, options = {}) {
    let context = new ParseContext(this, options, false);
    context.addAll(dom, Mark.none, options.from, options.to);
    return context.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(dom, options = {}) {
    let context = new ParseContext(this, options, true);
    context.addAll(dom, Mark.none, options.from, options.to);
    return Slice.maxOpen(context.finish());
  }
  /**
  @internal
  */
  matchTag(dom, context, after) {
    for (let i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++) {
      let rule = this.tags[i];
      if (matches(dom, rule.tag) && (rule.namespace === void 0 || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
        if (rule.getAttrs) {
          let result = rule.getAttrs(dom);
          if (result === false)
            continue;
          rule.attrs = result || void 0;
        }
        return rule;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(prop, value2, context, after) {
    for (let i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++) {
      let rule = this.styles[i], style = rule.style;
      if (style.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      style.length > prop.length && (style.charCodeAt(prop.length) != 61 || style.slice(prop.length + 1) != value2))
        continue;
      if (rule.getAttrs) {
        let result = rule.getAttrs(value2);
        if (result === false)
          continue;
        rule.attrs = result || void 0;
      }
      return rule;
    }
  }
  /**
  @internal
  */
  static schemaRules(schema) {
    let result = [];
    function insert(rule) {
      let priority = rule.priority == null ? 50 : rule.priority, i = 0;
      for (; i < result.length; i++) {
        let next = result[i], nextPriority = next.priority == null ? 50 : next.priority;
        if (nextPriority < priority)
          break;
      }
      result.splice(i, 0, rule);
    }
    for (let name in schema.marks) {
      let rules = schema.marks[name].spec.parseDOM;
      if (rules)
        rules.forEach((rule) => {
          insert(rule = copy(rule));
          if (!(rule.mark || rule.ignore || rule.clearMark))
            rule.mark = name;
        });
    }
    for (let name in schema.nodes) {
      let rules = schema.nodes[name].spec.parseDOM;
      if (rules)
        rules.forEach((rule) => {
          insert(rule = copy(rule));
          if (!(rule.node || rule.ignore || rule.mark))
            rule.node = name;
        });
    }
    return result;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(schema) {
    return schema.cached.domParser || (schema.cached.domParser = new _DOMParser(schema, _DOMParser.schemaRules(schema)));
  }
};
var blockTags = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true
};
var ignoreTags = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true
};
var listTags = { ol: true, ul: true };
var OPT_PRESERVE_WS = 1;
var OPT_PRESERVE_WS_FULL = 2;
var OPT_OPEN_LEFT = 4;
function wsOptionsFor(type, preserveWhitespace, base2) {
  if (preserveWhitespace != null)
    return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
  return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base2 & ~OPT_OPEN_LEFT;
}
var NodeContext = class {
  constructor(type, attrs, marks, solid, match, options) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.solid = solid;
    this.options = options;
    this.content = [];
    this.activeMarks = Mark.none;
    this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
  }
  findWrapping(node) {
    if (!this.match) {
      if (!this.type)
        return [];
      let fill = this.type.contentMatch.fillBefore(Fragment.from(node));
      if (fill) {
        this.match = this.type.contentMatch.matchFragment(fill);
      } else {
        let start2 = this.type.contentMatch, wrap;
        if (wrap = start2.findWrapping(node.type)) {
          this.match = start2;
          return wrap;
        } else {
          return null;
        }
      }
    }
    return this.match.findWrapping(node.type);
  }
  finish(openEnd) {
    if (!(this.options & OPT_PRESERVE_WS)) {
      let last = this.content[this.content.length - 1], m;
      if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
        let text = last;
        if (last.text.length == m[0].length)
          this.content.pop();
        else
          this.content[this.content.length - 1] = text.withText(text.text.slice(0, text.text.length - m[0].length));
      }
    }
    let content = Fragment.from(this.content);
    if (!openEnd && this.match)
      content = content.append(this.match.fillBefore(Fragment.empty, true));
    return this.type ? this.type.create(this.attrs, content, this.marks) : content;
  }
  inlineContext(node) {
    if (this.type)
      return this.type.inlineContent;
    if (this.content.length)
      return this.content[0].isInline;
    return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
  }
};
var ParseContext = class {
  constructor(parser, options, isOpen) {
    this.parser = parser;
    this.options = options;
    this.isOpen = isOpen;
    this.open = 0;
    this.localPreserveWS = false;
    let topNode = options.topNode, topContext;
    let topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
    if (topNode)
      topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);
    else if (isOpen)
      topContext = new NodeContext(null, null, Mark.none, true, null, topOptions);
    else
      topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, true, null, topOptions);
    this.nodes = [topContext];
    this.find = options.findPositions;
    this.needsBlock = false;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(dom, marks) {
    if (dom.nodeType == 3)
      this.addTextNode(dom, marks);
    else if (dom.nodeType == 1)
      this.addElement(dom, marks);
  }
  addTextNode(dom, marks) {
    let value2 = dom.nodeValue;
    let top2 = this.top, preserveWS = top2.options & OPT_PRESERVE_WS_FULL ? "full" : this.localPreserveWS || (top2.options & OPT_PRESERVE_WS) > 0;
    if (preserveWS === "full" || top2.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value2)) {
      if (!preserveWS) {
        value2 = value2.replace(/[ \t\r\n\u000c]+/g, " ");
        if (/^[ \t\r\n\u000c]/.test(value2) && this.open == this.nodes.length - 1) {
          let nodeBefore = top2.content[top2.content.length - 1];
          let domNodeBefore = dom.previousSibling;
          if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == "BR" || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text))
            value2 = value2.slice(1);
        }
      } else if (preserveWS !== "full") {
        value2 = value2.replace(/\r?\n|\r/g, " ");
      } else {
        value2 = value2.replace(/\r\n?/g, "\n");
      }
      if (value2)
        this.insertNode(this.parser.schema.text(value2), marks, !/\S/.test(value2));
      this.findInText(dom);
    } else {
      this.findInside(dom);
    }
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(dom, marks, matchAfter) {
    let outerWS = this.localPreserveWS, top2 = this.top;
    if (dom.tagName == "PRE" || /pre/.test(dom.style && dom.style.whiteSpace))
      this.localPreserveWS = true;
    let name = dom.nodeName.toLowerCase(), ruleID;
    if (listTags.hasOwnProperty(name) && this.parser.normalizeLists)
      normalizeList(dom);
    let rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
    out: if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
      this.findInside(dom);
      this.ignoreFallback(dom, marks);
    } else if (!rule || rule.skip || rule.closeParent) {
      if (rule && rule.closeParent)
        this.open = Math.max(0, this.open - 1);
      else if (rule && rule.skip.nodeType)
        dom = rule.skip;
      let sync, oldNeedsBlock = this.needsBlock;
      if (blockTags.hasOwnProperty(name)) {
        if (top2.content.length && top2.content[0].isInline && this.open) {
          this.open--;
          top2 = this.top;
        }
        sync = true;
        if (!top2.type)
          this.needsBlock = true;
      } else if (!dom.firstChild) {
        this.leafFallback(dom, marks);
        break out;
      }
      let innerMarks = rule && rule.skip ? marks : this.readStyles(dom, marks);
      if (innerMarks)
        this.addAll(dom, innerMarks);
      if (sync)
        this.sync(top2);
      this.needsBlock = oldNeedsBlock;
    } else {
      let innerMarks = this.readStyles(dom, marks);
      if (innerMarks)
        this.addElementByRule(dom, rule, innerMarks, rule.consuming === false ? ruleID : void 0);
    }
    this.localPreserveWS = outerWS;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(dom, marks) {
    if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent)
      this.addTextNode(dom.ownerDocument.createTextNode("\n"), marks);
  }
  // Called for ignored nodes
  ignoreFallback(dom, marks) {
    if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent))
      this.findPlace(this.parser.schema.text("-"), marks, true);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(dom, marks) {
    let styles = dom.style;
    if (styles && styles.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let name = this.parser.matchedStyles[i], value2 = styles.getPropertyValue(name);
        if (value2)
          for (let after = void 0; ; ) {
            let rule = this.parser.matchStyle(name, value2, this, after);
            if (!rule)
              break;
            if (rule.ignore)
              return null;
            if (rule.clearMark)
              marks = marks.filter((m) => !rule.clearMark(m));
            else
              marks = marks.concat(this.parser.schema.marks[rule.mark].create(rule.attrs));
            if (rule.consuming === false)
              after = rule;
            else
              break;
          }
      }
    return marks;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(dom, rule, marks, continueAfter) {
    let sync, nodeType;
    if (rule.node) {
      nodeType = this.parser.schema.nodes[rule.node];
      if (!nodeType.isLeaf) {
        let inner = this.enter(nodeType, rule.attrs || null, marks, rule.preserveWhitespace);
        if (inner) {
          sync = true;
          marks = inner;
        }
      } else if (!this.insertNode(nodeType.create(rule.attrs), marks, dom.nodeName == "BR")) {
        this.leafFallback(dom, marks);
      }
    } else {
      let markType = this.parser.schema.marks[rule.mark];
      marks = marks.concat(markType.create(rule.attrs));
    }
    let startIn = this.top;
    if (nodeType && nodeType.isLeaf) {
      this.findInside(dom);
    } else if (continueAfter) {
      this.addElement(dom, marks, continueAfter);
    } else if (rule.getContent) {
      this.findInside(dom);
      rule.getContent(dom, this.parser.schema).forEach((node) => this.insertNode(node, marks, false));
    } else {
      let contentDOM = dom;
      if (typeof rule.contentElement == "string")
        contentDOM = dom.querySelector(rule.contentElement);
      else if (typeof rule.contentElement == "function")
        contentDOM = rule.contentElement(dom);
      else if (rule.contentElement)
        contentDOM = rule.contentElement;
      this.findAround(dom, contentDOM, true);
      this.addAll(contentDOM, marks);
      this.findAround(dom, contentDOM, false);
    }
    if (sync && this.sync(startIn))
      this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(parent, marks, startIndex, endIndex) {
    let index2 = startIndex || 0;
    for (let dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end2 = endIndex == null ? null : parent.childNodes[endIndex]; dom != end2; dom = dom.nextSibling, ++index2) {
      this.findAtPoint(parent, index2);
      this.addDOM(dom, marks);
    }
    this.findAtPoint(parent, index2);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(node, marks, cautious) {
    let route, sync;
    for (let depth = this.open, penalty = 0; depth >= 0; depth--) {
      let cx = this.nodes[depth];
      let found2 = cx.findWrapping(node);
      if (found2 && (!route || route.length > found2.length + penalty)) {
        route = found2;
        sync = cx;
        if (!found2.length)
          break;
      }
      if (cx.solid) {
        if (cautious)
          break;
        penalty += 2;
      }
    }
    if (!route)
      return null;
    this.sync(sync);
    for (let i = 0; i < route.length; i++)
      marks = this.enterInner(route[i], null, marks, false);
    return marks;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(node, marks, cautious) {
    if (node.isInline && this.needsBlock && !this.top.type) {
      let block = this.textblockFromContext();
      if (block)
        marks = this.enterInner(block, null, marks);
    }
    let innerMarks = this.findPlace(node, marks, cautious);
    if (innerMarks) {
      this.closeExtra();
      let top2 = this.top;
      if (top2.match)
        top2.match = top2.match.matchType(node.type);
      let nodeMarks = Mark.none;
      for (let m of innerMarks.concat(node.marks))
        if (top2.type ? top2.type.allowsMarkType(m.type) : markMayApply(m.type, node.type))
          nodeMarks = m.addToSet(nodeMarks);
      top2.content.push(node.mark(nodeMarks));
      return true;
    }
    return false;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(type, attrs, marks, preserveWS) {
    let innerMarks = this.findPlace(type.create(attrs), marks, false);
    if (innerMarks)
      innerMarks = this.enterInner(type, attrs, marks, true, preserveWS);
    return innerMarks;
  }
  // Open a node of the given type
  enterInner(type, attrs, marks, solid = false, preserveWS) {
    this.closeExtra();
    let top2 = this.top;
    top2.match = top2.match && top2.match.matchType(type);
    let options = wsOptionsFor(type, preserveWS, top2.options);
    if (top2.options & OPT_OPEN_LEFT && top2.content.length == 0)
      options |= OPT_OPEN_LEFT;
    let applyMarks = Mark.none;
    marks = marks.filter((m) => {
      if (top2.type ? top2.type.allowsMarkType(m.type) : markMayApply(m.type, type)) {
        applyMarks = m.addToSet(applyMarks);
        return false;
      }
      return true;
    });
    this.nodes.push(new NodeContext(type, attrs, applyMarks, solid, null, options));
    this.open++;
    return marks;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(openEnd = false) {
    let i = this.nodes.length - 1;
    if (i > this.open) {
      for (; i > this.open; i--)
        this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    this.open = 0;
    this.closeExtra(this.isOpen);
    return this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(to) {
    for (let i = this.open; i >= 0; i--) {
      if (this.nodes[i] == to) {
        this.open = i;
        return true;
      } else if (this.localPreserveWS) {
        this.nodes[i].options |= OPT_PRESERVE_WS;
      }
    }
    return false;
  }
  get currentPos() {
    this.closeExtra();
    let pos = 0;
    for (let i = this.open; i >= 0; i--) {
      let content = this.nodes[i].content;
      for (let j = content.length - 1; j >= 0; j--)
        pos += content[j].nodeSize;
      if (i)
        pos++;
    }
    return pos;
  }
  findAtPoint(parent, offset2) {
    if (this.find)
      for (let i = 0; i < this.find.length; i++) {
        if (this.find[i].node == parent && this.find[i].offset == offset2)
          this.find[i].pos = this.currentPos;
      }
  }
  findInside(parent) {
    if (this.find)
      for (let i = 0; i < this.find.length; i++) {
        if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node))
          this.find[i].pos = this.currentPos;
      }
  }
  findAround(parent, content, before) {
    if (parent != content && this.find)
      for (let i = 0; i < this.find.length; i++) {
        if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
          let pos = content.compareDocumentPosition(this.find[i].node);
          if (pos & (before ? 2 : 4))
            this.find[i].pos = this.currentPos;
        }
      }
  }
  findInText(textNode) {
    if (this.find)
      for (let i = 0; i < this.find.length; i++) {
        if (this.find[i].node == textNode)
          this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
      }
  }
  // Determines whether the given context string matches this context.
  matchesContext(context) {
    if (context.indexOf("|") > -1)
      return context.split(/\s*\|\s*/).some(this.matchesContext, this);
    let parts2 = context.split("/");
    let option = this.options.context;
    let useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
    let minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
    let match = (i, depth) => {
      for (; i >= 0; i--) {
        let part = parts2[i];
        if (part == "") {
          if (i == parts2.length - 1 || i == 0)
            continue;
          for (; depth >= minDepth; depth--)
            if (match(i - 1, depth))
              return true;
          return false;
        } else {
          let next = depth > 0 || depth == 0 && useRoot ? this.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
          if (!next || next.name != part && !next.isInGroup(part))
            return false;
          depth--;
        }
      }
      return true;
    };
    return match(parts2.length - 1, this.open);
  }
  textblockFromContext() {
    let $context = this.options.context;
    if ($context)
      for (let d = $context.depth; d >= 0; d--) {
        let deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
        if (deflt && deflt.isTextblock && deflt.defaultAttrs)
          return deflt;
      }
    for (let name in this.parser.schema.nodes) {
      let type = this.parser.schema.nodes[name];
      if (type.isTextblock && type.defaultAttrs)
        return type;
    }
  }
};
function normalizeList(dom) {
  for (let child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
    let name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
    if (name && listTags.hasOwnProperty(name) && prevItem) {
      prevItem.appendChild(child);
      child = prevItem;
    } else if (name == "li") {
      prevItem = child;
    } else if (name) {
      prevItem = null;
    }
  }
}
function matches(dom, selector) {
  return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
}
function copy(obj) {
  let copy2 = {};
  for (let prop in obj)
    copy2[prop] = obj[prop];
  return copy2;
}
function markMayApply(markType, nodeType) {
  let nodes = nodeType.schema.nodes;
  for (let name in nodes) {
    let parent = nodes[name];
    if (!parent.allowsMarkType(markType))
      continue;
    let seen = [], scan = (match) => {
      seen.push(match);
      for (let i = 0; i < match.edgeCount; i++) {
        let { type, next } = match.edge(i);
        if (type == nodeType)
          return true;
        if (seen.indexOf(next) < 0 && scan(next))
          return true;
      }
    };
    if (scan(parent.contentMatch))
      return true;
  }
}
var DOMSerializer = class _DOMSerializer {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(nodes, marks) {
    this.nodes = nodes;
    this.marks = marks;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(fragment, options = {}, target) {
    if (!target)
      target = doc(options).createDocumentFragment();
    let top2 = target, active = [];
    fragment.forEach((node) => {
      if (active.length || node.marks.length) {
        let keep = 0, rendered = 0;
        while (keep < active.length && rendered < node.marks.length) {
          let next = node.marks[rendered];
          if (!this.marks[next.type.name]) {
            rendered++;
            continue;
          }
          if (!next.eq(active[keep][0]) || next.type.spec.spanning === false)
            break;
          keep++;
          rendered++;
        }
        while (keep < active.length)
          top2 = active.pop()[1];
        while (rendered < node.marks.length) {
          let add = node.marks[rendered++];
          let markDOM = this.serializeMark(add, node.isInline, options);
          if (markDOM) {
            active.push([add, top2]);
            top2.appendChild(markDOM.dom);
            top2 = markDOM.contentDOM || markDOM.dom;
          }
        }
      }
      top2.appendChild(this.serializeNodeInner(node, options));
    });
    return target;
  }
  /**
  @internal
  */
  serializeNodeInner(node, options) {
    let { dom, contentDOM } = renderSpec(doc(options), this.nodes[node.type.name](node), null, node.attrs);
    if (contentDOM) {
      if (node.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(node.content, options, contentDOM);
    }
    return dom;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(node, options = {}) {
    let dom = this.serializeNodeInner(node, options);
    for (let i = node.marks.length - 1; i >= 0; i--) {
      let wrap = this.serializeMark(node.marks[i], node.isInline, options);
      if (wrap) {
        (wrap.contentDOM || wrap.dom).appendChild(dom);
        dom = wrap.dom;
      }
    }
    return dom;
  }
  /**
  @internal
  */
  serializeMark(mark, inline, options = {}) {
    let toDOM = this.marks[mark.type.name];
    return toDOM && renderSpec(doc(options), toDOM(mark, inline), null, mark.attrs);
  }
  static renderSpec(doc3, structure, xmlNS = null, blockArraysIn) {
    return renderSpec(doc3, structure, xmlNS, blockArraysIn);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(schema) {
    return schema.cached.domSerializer || (schema.cached.domSerializer = new _DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(schema) {
    let result = gatherToDOM(schema.nodes);
    if (!result.text)
      result.text = (node) => node.text;
    return result;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(schema) {
    return gatherToDOM(schema.marks);
  }
};
function gatherToDOM(obj) {
  let result = {};
  for (let name in obj) {
    let toDOM = obj[name].spec.toDOM;
    if (toDOM)
      result[name] = toDOM;
  }
  return result;
}
function doc(options) {
  return options.document || window.document;
}
var suspiciousAttributeCache = /* @__PURE__ */ new WeakMap();
function suspiciousAttributes(attrs) {
  let value2 = suspiciousAttributeCache.get(attrs);
  if (value2 === void 0)
    suspiciousAttributeCache.set(attrs, value2 = suspiciousAttributesInner(attrs));
  return value2;
}
function suspiciousAttributesInner(attrs) {
  let result = null;
  function scan(value2) {
    if (value2 && typeof value2 == "object") {
      if (Array.isArray(value2)) {
        if (typeof value2[0] == "string") {
          if (!result)
            result = [];
          result.push(value2);
        } else {
          for (let i = 0; i < value2.length; i++)
            scan(value2[i]);
        }
      } else {
        for (let prop in value2)
          scan(value2[prop]);
      }
    }
  }
  scan(attrs);
  return result;
}
function renderSpec(doc3, structure, xmlNS, blockArraysIn) {
  if (typeof structure == "string")
    return { dom: doc3.createTextNode(structure) };
  if (structure.nodeType != null)
    return { dom: structure };
  if (structure.dom && structure.dom.nodeType != null)
    return structure;
  let tagName = structure[0], suspicious;
  if (typeof tagName != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (blockArraysIn && (suspicious = suspiciousAttributes(blockArraysIn)) && suspicious.indexOf(structure) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let space = tagName.indexOf(" ");
  if (space > 0) {
    xmlNS = tagName.slice(0, space);
    tagName = tagName.slice(space + 1);
  }
  let contentDOM;
  let dom = xmlNS ? doc3.createElementNS(xmlNS, tagName) : doc3.createElement(tagName);
  let attrs = structure[1], start2 = 1;
  if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
    start2 = 2;
    for (let name in attrs)
      if (attrs[name] != null) {
        let space2 = name.indexOf(" ");
        if (space2 > 0)
          dom.setAttributeNS(name.slice(0, space2), name.slice(space2 + 1), attrs[name]);
        else
          dom.setAttribute(name, attrs[name]);
      }
  }
  for (let i = start2; i < structure.length; i++) {
    let child = structure[i];
    if (child === 0) {
      if (i < structure.length - 1 || i > start2)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom, contentDOM: dom };
    } else {
      let { dom: inner, contentDOM: innerContent } = renderSpec(doc3, child, xmlNS, blockArraysIn);
      dom.appendChild(inner);
      if (innerContent) {
        if (contentDOM)
          throw new RangeError("Multiple content holes");
        contentDOM = innerContent;
      }
    }
  }
  return { dom, contentDOM };
}

// node_modules/prosemirror-transform/dist/index.js
var lower16 = 65535;
var factor16 = Math.pow(2, 16);
function makeRecover(index2, offset2) {
  return index2 + offset2 * factor16;
}
function recoverIndex(value2) {
  return value2 & lower16;
}
function recoverOffset(value2) {
  return (value2 - (value2 & lower16)) / factor16;
}
var DEL_BEFORE = 1;
var DEL_AFTER = 2;
var DEL_ACROSS = 4;
var DEL_SIDE = 8;
var MapResult = class {
  /**
  @internal
  */
  constructor(pos, delInfo, recover) {
    this.pos = pos;
    this.delInfo = delInfo;
    this.recover = recover;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & DEL_SIDE) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & DEL_ACROSS) > 0;
  }
};
var StepMap = class _StepMap {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(ranges, inverted = false) {
    this.ranges = ranges;
    this.inverted = inverted;
    if (!ranges.length && _StepMap.empty)
      return _StepMap.empty;
  }
  /**
  @internal
  */
  recover(value2) {
    let diff = 0, index2 = recoverIndex(value2);
    if (!this.inverted)
      for (let i = 0; i < index2; i++)
        diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[index2 * 3] + diff + recoverOffset(value2);
  }
  mapResult(pos, assoc = 1) {
    return this._map(pos, assoc, false);
  }
  map(pos, assoc = 1) {
    return this._map(pos, assoc, true);
  }
  /**
  @internal
  */
  _map(pos, assoc, simple) {
    let diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start2 = this.ranges[i] - (this.inverted ? diff : 0);
      if (start2 > pos)
        break;
      let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end2 = start2 + oldSize;
      if (pos <= end2) {
        let side = !oldSize ? assoc : pos == start2 ? -1 : pos == end2 ? 1 : assoc;
        let result = start2 + diff + (side < 0 ? 0 : newSize);
        if (simple)
          return result;
        let recover = pos == (assoc < 0 ? start2 : end2) ? null : makeRecover(i / 3, pos - start2);
        let del4 = pos == start2 ? DEL_AFTER : pos == end2 ? DEL_BEFORE : DEL_ACROSS;
        if (assoc < 0 ? pos != start2 : pos != end2)
          del4 |= DEL_SIDE;
        return new MapResult(result, del4, recover);
      }
      diff += newSize - oldSize;
    }
    return simple ? pos + diff : new MapResult(pos + diff, 0, null);
  }
  /**
  @internal
  */
  touches(pos, recover) {
    let diff = 0, index2 = recoverIndex(recover);
    let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start2 = this.ranges[i] - (this.inverted ? diff : 0);
      if (start2 > pos)
        break;
      let oldSize = this.ranges[i + oldIndex], end2 = start2 + oldSize;
      if (pos <= end2 && i == index2 * 3)
        return true;
      diff += this.ranges[i + newIndex] - oldSize;
    }
    return false;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(f) {
    let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
    for (let i = 0, diff = 0; i < this.ranges.length; i += 3) {
      let start2 = this.ranges[i], oldStart = start2 - (this.inverted ? diff : 0), newStart = start2 + (this.inverted ? 0 : diff);
      let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
      f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
      diff += newSize - oldSize;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new _StepMap(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(n) {
    return n == 0 ? _StepMap.empty : new _StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
  }
};
StepMap.empty = new StepMap([]);
var stepsByID = /* @__PURE__ */ Object.create(null);
var Step = class {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return StepMap.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(other) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(schema, json) {
    if (!json || !json.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let type = stepsByID[json.stepType];
    if (!type)
      throw new RangeError(`No step type ${json.stepType} defined`);
    return type.fromJSON(schema, json);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(id, stepClass) {
    if (id in stepsByID)
      throw new RangeError("Duplicate use of step JSON ID " + id);
    stepsByID[id] = stepClass;
    stepClass.prototype.jsonID = id;
    return stepClass;
  }
};
var StepResult = class _StepResult {
  /**
  @internal
  */
  constructor(doc3, failed) {
    this.doc = doc3;
    this.failed = failed;
  }
  /**
  Create a successful step result.
  */
  static ok(doc3) {
    return new _StepResult(doc3, null);
  }
  /**
  Create a failed step result.
  */
  static fail(message) {
    return new _StepResult(null, message);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(doc3, from, to, slice) {
    try {
      return _StepResult.ok(doc3.replace(from, to, slice));
    } catch (e) {
      if (e instanceof ReplaceError)
        return _StepResult.fail(e.message);
      throw e;
    }
  }
};
function mapFragment(fragment, f, parent) {
  let mapped = [];
  for (let i = 0; i < fragment.childCount; i++) {
    let child = fragment.child(i);
    if (child.content.size)
      child = child.copy(mapFragment(child.content, f, child));
    if (child.isInline)
      child = f(child, parent, i);
    mapped.push(child);
  }
  return Fragment.fromArray(mapped);
}
var AddMarkStep = class _AddMarkStep extends Step {
  /**
  Create a mark step.
  */
  constructor(from, to, mark) {
    super();
    this.from = from;
    this.to = to;
    this.mark = mark;
  }
  apply(doc3) {
    let oldSlice = doc3.slice(this.from, this.to), $from = doc3.resolve(this.from);
    let parent = $from.node($from.sharedDepth(this.to));
    let slice = new Slice(mapFragment(oldSlice.content, (node, parent2) => {
      if (!node.isAtom || !parent2.type.allowsMarkType(this.mark.type))
        return node;
      return node.mark(this.mark.addToSet(node.marks));
    }, parent), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc3, this.from, this.to, slice);
  }
  invert() {
    return new RemoveMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos)
      return null;
    return new _AddMarkStep(from.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof _AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from)
      return new _AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new _AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("addMark", AddMarkStep);
var RemoveMarkStep = class _RemoveMarkStep extends Step {
  /**
  Create a mark-removing step.
  */
  constructor(from, to, mark) {
    super();
    this.from = from;
    this.to = to;
    this.mark = mark;
  }
  apply(doc3) {
    let oldSlice = doc3.slice(this.from, this.to);
    let slice = new Slice(mapFragment(oldSlice.content, (node) => {
      return node.mark(this.mark.removeFromSet(node.marks));
    }, doc3), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc3, this.from, this.to, slice);
  }
  invert() {
    return new AddMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos)
      return null;
    return new _RemoveMarkStep(from.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof _RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from)
      return new _RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new _RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("removeMark", RemoveMarkStep);
var AddNodeMarkStep = class _AddNodeMarkStep extends Step {
  /**
  Create a node mark step.
  */
  constructor(pos, mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc3) {
    let node = doc3.nodeAt(this.pos);
    if (!node)
      return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
    return StepResult.fromReplace(doc3, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc3) {
    let node = doc3.nodeAt(this.pos);
    if (node) {
      let newSet = this.mark.addToSet(node.marks);
      if (newSet.length == node.marks.length) {
        for (let i = 0; i < node.marks.length; i++)
          if (!node.marks[i].isInSet(newSet))
            return new _AddNodeMarkStep(this.pos, node.marks[i]);
        return new _AddNodeMarkStep(this.pos, this.mark);
      }
    }
    return new RemoveNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _AddNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new _AddNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("addNodeMark", AddNodeMarkStep);
var RemoveNodeMarkStep = class _RemoveNodeMarkStep extends Step {
  /**
  Create a mark-removing step.
  */
  constructor(pos, mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc3) {
    let node = doc3.nodeAt(this.pos);
    if (!node)
      return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
    return StepResult.fromReplace(doc3, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc3) {
    let node = doc3.nodeAt(this.pos);
    if (!node || !this.mark.isInSet(node.marks))
      return this;
    return new AddNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _RemoveNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new _RemoveNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
var ReplaceStep = class _ReplaceStep extends Step {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(from, to, slice, structure = false) {
    super();
    this.from = from;
    this.to = to;
    this.slice = slice;
    this.structure = structure;
  }
  apply(doc3) {
    if (this.structure && contentBetween(doc3, this.from, this.to))
      return StepResult.fail("Structure replace would overwrite content");
    return StepResult.fromReplace(doc3, this.from, this.to, this.slice);
  }
  getMap() {
    return new StepMap([this.from, this.to - this.from, this.slice.size]);
  }
  invert(doc3) {
    return new _ReplaceStep(this.from, this.from + this.slice.size, doc3.slice(this.from, this.to));
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deletedAcross && to.deletedAcross)
      return null;
    return new _ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice, this.structure);
  }
  merge(other) {
    if (!(other instanceof _ReplaceStep) || other.structure || this.structure)
      return null;
    if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
      let slice = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
      return new _ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
    } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
      let slice = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
      return new _ReplaceStep(other.from, this.to, slice, this.structure);
    } else {
      return null;
    }
  }
  toJSON() {
    let json = { stepType: "replace", from: this.from, to: this.to };
    if (this.slice.size)
      json.slice = this.slice.toJSON();
    if (this.structure)
      json.structure = true;
    return json;
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new _ReplaceStep(json.from, json.to, Slice.fromJSON(schema, json.slice), !!json.structure);
  }
};
Step.jsonID("replace", ReplaceStep);
var ReplaceAroundStep = class _ReplaceAroundStep extends Step {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(from, to, gapFrom, gapTo, slice, insert, structure = false) {
    super();
    this.from = from;
    this.to = to;
    this.gapFrom = gapFrom;
    this.gapTo = gapTo;
    this.slice = slice;
    this.insert = insert;
    this.structure = structure;
  }
  apply(doc3) {
    if (this.structure && (contentBetween(doc3, this.from, this.gapFrom) || contentBetween(doc3, this.gapTo, this.to)))
      return StepResult.fail("Structure gap-replace would overwrite content");
    let gap = doc3.slice(this.gapFrom, this.gapTo);
    if (gap.openStart || gap.openEnd)
      return StepResult.fail("Gap is not a flat range");
    let inserted = this.slice.insertAt(this.insert, gap.content);
    if (!inserted)
      return StepResult.fail("Content does not fit in gap");
    return StepResult.fromReplace(doc3, this.from, this.to, inserted);
  }
  getMap() {
    return new StepMap([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(doc3) {
    let gap = this.gapTo - this.gapFrom;
    return new _ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc3.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    let gapFrom = this.from == this.gapFrom ? from.pos : mapping.map(this.gapFrom, -1);
    let gapTo = this.to == this.gapTo ? to.pos : mapping.map(this.gapTo, 1);
    if (from.deletedAcross && to.deletedAcross || gapFrom < from.pos || gapTo > to.pos)
      return null;
    return new _ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let json = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    if (this.slice.size)
      json.slice = this.slice.toJSON();
    if (this.structure)
      json.structure = true;
    return json;
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new _ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, Slice.fromJSON(schema, json.slice), json.insert, !!json.structure);
  }
};
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc3, from, to) {
  let $from = doc3.resolve(from), dist = to - from, depth = $from.depth;
  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }
  if (dist > 0) {
    let next = $from.node(depth).maybeChild($from.indexAfter(depth));
    while (dist > 0) {
      if (!next || next.isLeaf)
        return true;
      next = next.firstChild;
      dist--;
    }
  }
  return false;
}
function canCut(node, start2, end2) {
  return (start2 == 0 || node.canReplace(start2, node.childCount)) && (end2 == node.childCount || node.canReplace(0, end2));
}
function liftTarget(range) {
  let parent = range.parent;
  let content = parent.content.cutByIndex(range.startIndex, range.endIndex);
  for (let depth = range.depth; ; --depth) {
    let node = range.$from.node(depth);
    let index2 = range.$from.index(depth), endIndex = range.$to.indexAfter(depth);
    if (depth < range.depth && node.canReplace(index2, endIndex, content))
      return depth;
    if (depth == 0 || node.type.spec.isolating || !canCut(node, index2, endIndex))
      break;
  }
  return null;
}
function findWrapping(range, nodeType, attrs = null, innerRange = range) {
  let around = findWrappingOutside(range, nodeType);
  let inner = around && findWrappingInside(innerRange, nodeType);
  if (!inner)
    return null;
  return around.map(withAttrs).concat({ type: nodeType, attrs }).concat(inner.map(withAttrs));
}
function withAttrs(type) {
  return { type, attrs: null };
}
function findWrappingOutside(range, type) {
  let { parent, startIndex, endIndex } = range;
  let around = parent.contentMatchAt(startIndex).findWrapping(type);
  if (!around)
    return null;
  let outer = around.length ? around[0] : type;
  return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
}
function findWrappingInside(range, type) {
  let { parent, startIndex, endIndex } = range;
  let inner = parent.child(startIndex);
  let inside = type.contentMatch.findWrapping(inner.type);
  if (!inside)
    return null;
  let lastType = inside.length ? inside[inside.length - 1] : type;
  let innerMatch = lastType.contentMatch;
  for (let i = startIndex; innerMatch && i < endIndex; i++)
    innerMatch = innerMatch.matchType(parent.child(i).type);
  if (!innerMatch || !innerMatch.validEnd)
    return null;
  return inside;
}
function canSplit(doc3, pos, depth = 1, typesAfter) {
  let $pos = doc3.resolve(pos), base2 = $pos.depth - depth;
  let innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
  if (base2 < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount)))
    return false;
  for (let d = $pos.depth - 1, i = depth - 2; d > base2; d--, i--) {
    let node = $pos.node(d), index3 = $pos.index(d);
    if (node.type.spec.isolating)
      return false;
    let rest = node.content.cutByIndex(index3, node.childCount);
    let overrideChild = typesAfter && typesAfter[i + 1];
    if (overrideChild)
      rest = rest.replaceChild(0, overrideChild.type.create(overrideChild.attrs));
    let after = typesAfter && typesAfter[i] || node;
    if (!node.canReplace(index3 + 1, node.childCount) || !after.type.validContent(rest))
      return false;
  }
  let index2 = $pos.indexAfter(base2);
  let baseType = typesAfter && typesAfter[0];
  return $pos.node(base2).canReplaceWith(index2, index2, baseType ? baseType.type : $pos.node(base2 + 1).type);
}
function canJoin(doc3, pos) {
  let $pos = doc3.resolve(pos), index2 = $pos.index();
  return joinable2($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index2, index2 + 1);
}
function canAppendWithSubstitutedLinebreaks(a, b) {
  if (!b.content.size)
    a.type.compatibleContent(b.type);
  let match = a.contentMatchAt(a.childCount);
  let { linebreakReplacement } = a.type.schema;
  for (let i = 0; i < b.childCount; i++) {
    let child = b.child(i);
    let type = child.type == linebreakReplacement ? a.type.schema.nodes.text : child.type;
    match = match.matchType(type);
    if (!match)
      return false;
    if (!a.type.allowsMarks(child.marks))
      return false;
  }
  return match.validEnd;
}
function joinable2(a, b) {
  return !!(a && b && !a.isLeaf && canAppendWithSubstitutedLinebreaks(a, b));
}
function joinPoint(doc3, pos, dir = -1) {
  let $pos = doc3.resolve(pos);
  for (let d = $pos.depth; ; d--) {
    let before, after, index2 = $pos.index(d);
    if (d == $pos.depth) {
      before = $pos.nodeBefore;
      after = $pos.nodeAfter;
    } else if (dir > 0) {
      before = $pos.node(d + 1);
      index2++;
      after = $pos.node(d).maybeChild(index2);
    } else {
      before = $pos.node(d).maybeChild(index2 - 1);
      after = $pos.node(d + 1);
    }
    if (before && !before.isTextblock && joinable2(before, after) && $pos.node(d).canReplace(index2, index2 + 1))
      return pos;
    if (d == 0)
      break;
    pos = dir < 0 ? $pos.before(d) : $pos.after(d);
  }
}
function dropPoint(doc3, pos, slice) {
  let $pos = doc3.resolve(pos);
  if (!slice.content.size)
    return pos;
  let content = slice.content;
  for (let i = 0; i < slice.openStart; i++)
    content = content.firstChild.content;
  for (let pass = 1; pass <= (slice.openStart == 0 && slice.size ? 2 : 1); pass++) {
    for (let d = $pos.depth; d >= 0; d--) {
      let bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
      let insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
      let parent = $pos.node(d), fits = false;
      if (pass == 1) {
        fits = parent.canReplace(insertPos, insertPos, content);
      } else {
        let wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
        fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
      }
      if (fits)
        return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
    }
  }
  return null;
}
function replaceStep(doc3, from, to = from, slice = Slice.empty) {
  if (from == to && !slice.size)
    return null;
  let $from = doc3.resolve(from), $to = doc3.resolve(to);
  if (fitsTrivially($from, $to, slice))
    return new ReplaceStep(from, to, slice);
  return new Fitter($from, $to, slice).fit();
}
function fitsTrivially($from, $to, slice) {
  return !slice.openStart && !slice.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice.content);
}
var Fitter = class {
  constructor($from, $to, unplaced) {
    this.$from = $from;
    this.$to = $to;
    this.unplaced = unplaced;
    this.frontier = [];
    this.placed = Fragment.empty;
    for (let i = 0; i <= $from.depth; i++) {
      let node = $from.node(i);
      this.frontier.push({
        type: node.type,
        match: node.contentMatchAt($from.indexAfter(i))
      });
    }
    for (let i = $from.depth; i > 0; i--)
      this.placed = Fragment.from($from.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    while (this.unplaced.size) {
      let fit = this.findFittable();
      if (fit)
        this.placeNodes(fit);
      else
        this.openMore() || this.dropNode();
    }
    let moveInline = this.mustMoveInline(), placedSize = this.placed.size - this.depth - this.$from.depth;
    let $from = this.$from, $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
    if (!$to)
      return null;
    let content = this.placed, openStart = $from.depth, openEnd = $to.depth;
    while (openStart && openEnd && content.childCount == 1) {
      content = content.firstChild.content;
      openStart--;
      openEnd--;
    }
    let slice = new Slice(content, openStart, openEnd);
    if (moveInline > -1)
      return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice, placedSize);
    if (slice.size || $from.pos != this.$to.pos)
      return new ReplaceStep($from.pos, $to.pos, slice);
    return null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let startDepth = this.unplaced.openStart;
    for (let cur = this.unplaced.content, d = 0, openEnd = this.unplaced.openEnd; d < startDepth; d++) {
      let node = cur.firstChild;
      if (cur.childCount > 1)
        openEnd = 0;
      if (node.type.spec.isolating && openEnd <= d) {
        startDepth = d;
        break;
      }
      cur = node.content;
    }
    for (let pass = 1; pass <= 2; pass++) {
      for (let sliceDepth = pass == 1 ? startDepth : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
        let fragment, parent = null;
        if (sliceDepth) {
          parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
          fragment = parent.content;
        } else {
          fragment = this.unplaced.content;
        }
        let first2 = fragment.firstChild;
        for (let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
          let { type, match } = this.frontier[frontierDepth], wrap, inject2 = null;
          if (pass == 1 && (first2 ? match.matchType(first2.type) || (inject2 = match.fillBefore(Fragment.from(first2), false)) : parent && type.compatibleContent(parent.type)))
            return { sliceDepth, frontierDepth, parent, inject: inject2 };
          else if (pass == 2 && first2 && (wrap = match.findWrapping(first2.type)))
            return { sliceDepth, frontierDepth, parent, wrap };
          if (parent && match.matchType(parent.type))
            break;
        }
      }
    }
  }
  openMore() {
    let { content, openStart, openEnd } = this.unplaced;
    let inner = contentAt(content, openStart);
    if (!inner.childCount || inner.firstChild.isLeaf)
      return false;
    this.unplaced = new Slice(content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
    return true;
  }
  dropNode() {
    let { content, openStart, openEnd } = this.unplaced;
    let inner = contentAt(content, openStart);
    if (inner.childCount <= 1 && openStart > 0) {
      let openAtEnd = content.size - openStart <= openStart + inner.size;
      this.unplaced = new Slice(dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
    } else {
      this.unplaced = new Slice(dropFromFragment(content, openStart, 1), openStart, openEnd);
    }
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth, frontierDepth, parent, inject: inject2, wrap }) {
    while (this.depth > frontierDepth)
      this.closeFrontierNode();
    if (wrap)
      for (let i = 0; i < wrap.length; i++)
        this.openFrontierNode(wrap[i]);
    let slice = this.unplaced, fragment = parent ? parent.content : slice.content;
    let openStart = slice.openStart - sliceDepth;
    let taken = 0, add = [];
    let { match, type } = this.frontier[frontierDepth];
    if (inject2) {
      for (let i = 0; i < inject2.childCount; i++)
        add.push(inject2.child(i));
      match = match.matchFragment(inject2);
    }
    let openEndCount = fragment.size + sliceDepth - (slice.content.size - slice.openEnd);
    while (taken < fragment.childCount) {
      let next = fragment.child(taken), matches2 = match.matchType(next.type);
      if (!matches2)
        break;
      taken++;
      if (taken > 1 || openStart == 0 || next.content.size) {
        match = matches2;
        add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
      }
    }
    let toEnd = taken == fragment.childCount;
    if (!toEnd)
      openEndCount = -1;
    this.placed = addToFragment(this.placed, frontierDepth, Fragment.from(add));
    this.frontier[frontierDepth].match = match;
    if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1)
      this.closeFrontierNode();
    for (let i = 0, cur = fragment; i < openEndCount; i++) {
      let node = cur.lastChild;
      this.frontier.push({ type: node.type, match: node.contentMatchAt(node.childCount) });
      cur = node.content;
    }
    this.unplaced = !toEnd ? new Slice(dropFromFragment(slice.content, sliceDepth, taken), slice.openStart, slice.openEnd) : sliceDepth == 0 ? Slice.empty : new Slice(dropFromFragment(slice.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice.openEnd : sliceDepth - 1);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let top2 = this.frontier[this.depth], level;
    if (!top2.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top2.type, top2.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth)
      return -1;
    let { depth } = this.$to, after = this.$to.after(depth);
    while (depth > 1 && after == this.$to.end(--depth))
      ++after;
    return after;
  }
  findCloseLevel($to) {
    scan: for (let i = Math.min(this.depth, $to.depth); i >= 0; i--) {
      let { match, type } = this.frontier[i];
      let dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
      let fit = contentAfterFits($to, i, type, match, dropInner);
      if (!fit)
        continue;
      for (let d = i - 1; d >= 0; d--) {
        let { match: match2, type: type2 } = this.frontier[d];
        let matches2 = contentAfterFits($to, d, type2, match2, true);
        if (!matches2 || matches2.childCount)
          continue scan;
      }
      return { depth: i, fit, move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to };
    }
  }
  close($to) {
    let close2 = this.findCloseLevel($to);
    if (!close2)
      return null;
    while (this.depth > close2.depth)
      this.closeFrontierNode();
    if (close2.fit.childCount)
      this.placed = addToFragment(this.placed, close2.depth, close2.fit);
    $to = close2.move;
    for (let d = close2.depth + 1; d <= $to.depth; d++) {
      let node = $to.node(d), add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
      this.openFrontierNode(node.type, node.attrs, add);
    }
    return $to;
  }
  openFrontierNode(type, attrs = null, content) {
    let top2 = this.frontier[this.depth];
    top2.match = top2.match.matchType(type);
    this.placed = addToFragment(this.placed, this.depth, Fragment.from(type.create(attrs, content)));
    this.frontier.push({ type, match: type.contentMatch });
  }
  closeFrontierNode() {
    let open = this.frontier.pop();
    let add = open.match.fillBefore(Fragment.empty, true);
    if (add.childCount)
      this.placed = addToFragment(this.placed, this.frontier.length, add);
  }
};
function dropFromFragment(fragment, depth, count) {
  if (depth == 0)
    return fragment.cutByIndex(count, fragment.childCount);
  return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}
function addToFragment(fragment, depth, content) {
  if (depth == 0)
    return fragment.append(content);
  return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
}
function contentAt(fragment, depth) {
  for (let i = 0; i < depth; i++)
    fragment = fragment.firstChild.content;
  return fragment;
}
function closeNodeStart(node, openStart, openEnd) {
  if (openStart <= 0)
    return node;
  let frag = node.content;
  if (openStart > 1)
    frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
  if (openStart > 0) {
    frag = node.type.contentMatch.fillBefore(frag).append(frag);
    if (openEnd <= 0)
      frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(Fragment.empty, true));
  }
  return node.copy(frag);
}
function contentAfterFits($to, depth, type, match, open) {
  let node = $to.node(depth), index2 = open ? $to.indexAfter(depth) : $to.index(depth);
  if (index2 == node.childCount && !type.compatibleContent(node.type))
    return null;
  let fit = match.fillBefore(node.content, true, index2);
  return fit && !invalidMarks(type, node.content, index2) ? fit : null;
}
function invalidMarks(type, fragment, start2) {
  for (let i = start2; i < fragment.childCount; i++)
    if (!type.allowsMarks(fragment.child(i).marks))
      return true;
  return false;
}
var AttrStep = class _AttrStep extends Step {
  /**
  Construct an attribute step.
  */
  constructor(pos, attr, value2) {
    super();
    this.pos = pos;
    this.attr = attr;
    this.value = value2;
  }
  apply(doc3) {
    let node = doc3.nodeAt(this.pos);
    if (!node)
      return StepResult.fail("No node at attribute step's position");
    let attrs = /* @__PURE__ */ Object.create(null);
    for (let name in node.attrs)
      attrs[name] = node.attrs[name];
    attrs[this.attr] = this.value;
    let updated = node.type.create(attrs, null, node.marks);
    return StepResult.fromReplace(doc3, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc3) {
    return new _AttrStep(this.pos, this.attr, doc3.nodeAt(this.pos).attrs[this.attr]);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _AttrStep(pos.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(schema, json) {
    if (typeof json.pos != "number" || typeof json.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new _AttrStep(json.pos, json.attr, json.value);
  }
};
Step.jsonID("attr", AttrStep);
var DocAttrStep = class _DocAttrStep extends Step {
  /**
  Construct an attribute step.
  */
  constructor(attr, value2) {
    super();
    this.attr = attr;
    this.value = value2;
  }
  apply(doc3) {
    let attrs = /* @__PURE__ */ Object.create(null);
    for (let name in doc3.attrs)
      attrs[name] = doc3.attrs[name];
    attrs[this.attr] = this.value;
    let updated = doc3.type.create(attrs, doc3.content, doc3.marks);
    return StepResult.ok(updated);
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc3) {
    return new _DocAttrStep(this.attr, doc3.attrs[this.attr]);
  }
  map(mapping) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(schema, json) {
    if (typeof json.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new _DocAttrStep(json.attr, json.value);
  }
};
Step.jsonID("docAttr", DocAttrStep);
var TransformError = class extends Error {
};
TransformError = function TransformError2(message) {
  let err = Error.call(this, message);
  err.__proto__ = TransformError2.prototype;
  return err;
};
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";

// node_modules/prosemirror-state/dist/index.js
var classesById = /* @__PURE__ */ Object.create(null);
var Selection = class {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor($anchor, $head, ranges) {
    this.$anchor = $anchor;
    this.$head = $head;
    this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++)
      if (ranges[i].$from.pos != ranges[i].$to.pos)
        return false;
    return true;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, true);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(tr, content = Slice.empty) {
    let lastNode = content.content.lastChild, lastParent = null;
    for (let i = 0; i < content.openEnd; i++) {
      lastParent = lastNode;
      lastNode = lastNode.lastChild;
    }
    let mapFrom = tr.steps.length, ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
      tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i ? Slice.empty : content);
      if (i == 0)
        selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(tr, node) {
    let mapFrom = tr.steps.length, ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
      let from = mapping.map($from.pos), to = mapping.map($to.pos);
      if (i) {
        tr.deleteRange(from, to);
      } else {
        tr.replaceRangeWith(from, to, node);
        selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
      }
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom($pos, dir, textOnly = false) {
    let inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
    if (inner)
      return inner;
    for (let depth = $pos.depth - 1; depth >= 0; depth--) {
      let found2 = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
      if (found2)
        return found2;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near($pos, bias = 1) {
    return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(doc3) {
    return findSelectionIn(doc3, doc3, 0, 0, 1) || new AllSelection(doc3);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(doc3) {
    return findSelectionIn(doc3, doc3, doc3.content.size, doc3.childCount, -1) || new AllSelection(doc3);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(doc3, json) {
    if (!json || !json.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let cls = classesById[json.type];
    if (!cls)
      throw new RangeError(`No selection type ${json.type} defined`);
    return cls.fromJSON(doc3, json);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(id, selectionClass) {
    if (id in classesById)
      throw new RangeError("Duplicate use of selection JSON ID " + id);
    classesById[id] = selectionClass;
    selectionClass.prototype.jsonID = id;
    return selectionClass;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return TextSelection.between(this.$anchor, this.$head).getBookmark();
  }
};
Selection.prototype.visible = true;
var SelectionRange = class {
  /**
  Create a range.
  */
  constructor($from, $to) {
    this.$from = $from;
    this.$to = $to;
  }
};
var warnedAboutTextSelection = false;
function checkTextSelection($pos) {
  if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
    warnedAboutTextSelection = true;
    console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
  }
}
var TextSelection = class _TextSelection extends Selection {
  /**
  Construct a text selection between the given points.
  */
  constructor($anchor, $head = $anchor) {
    checkTextSelection($anchor);
    checkTextSelection($head);
    super($anchor, $head);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(doc3, mapping) {
    let $head = doc3.resolve(mapping.map(this.head));
    if (!$head.parent.inlineContent)
      return Selection.near($head);
    let $anchor = doc3.resolve(mapping.map(this.anchor));
    return new _TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
  }
  replace(tr, content = Slice.empty) {
    super.replace(tr, content);
    if (content == Slice.empty) {
      let marks = this.$from.marksAcross(this.$to);
      if (marks)
        tr.ensureMarks(marks);
    }
  }
  eq(other) {
    return other instanceof _TextSelection && other.anchor == this.anchor && other.head == this.head;
  }
  getBookmark() {
    return new TextBookmark(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(doc3, json) {
    if (typeof json.anchor != "number" || typeof json.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new _TextSelection(doc3.resolve(json.anchor), doc3.resolve(json.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(doc3, anchor, head = anchor) {
    let $anchor = doc3.resolve(anchor);
    return new this($anchor, head == anchor ? $anchor : doc3.resolve(head));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between($anchor, $head, bias) {
    let dPos = $anchor.pos - $head.pos;
    if (!bias || dPos)
      bias = dPos >= 0 ? 1 : -1;
    if (!$head.parent.inlineContent) {
      let found2 = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
      if (found2)
        $head = found2.$head;
      else
        return Selection.near($head, bias);
    }
    if (!$anchor.parent.inlineContent) {
      if (dPos == 0) {
        $anchor = $head;
      } else {
        $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
        if ($anchor.pos < $head.pos != dPos < 0)
          $anchor = $head;
      }
    }
    return new _TextSelection($anchor, $head);
  }
};
Selection.jsonID("text", TextSelection);
var TextBookmark = class _TextBookmark {
  constructor(anchor, head) {
    this.anchor = anchor;
    this.head = head;
  }
  map(mapping) {
    return new _TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
  }
  resolve(doc3) {
    return TextSelection.between(doc3.resolve(this.anchor), doc3.resolve(this.head));
  }
};
var NodeSelection = class _NodeSelection extends Selection {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor($pos) {
    let node = $pos.nodeAfter;
    let $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
    super($pos, $end);
    this.node = node;
  }
  map(doc3, mapping) {
    let { deleted, pos } = mapping.mapResult(this.anchor);
    let $pos = doc3.resolve(pos);
    if (deleted)
      return Selection.near($pos);
    return new _NodeSelection($pos);
  }
  content() {
    return new Slice(Fragment.from(this.node), 0, 0);
  }
  eq(other) {
    return other instanceof _NodeSelection && other.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new NodeBookmark(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(doc3, json) {
    if (typeof json.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new _NodeSelection(doc3.resolve(json.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(doc3, from) {
    return new _NodeSelection(doc3.resolve(from));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(node) {
    return !node.isText && node.type.spec.selectable !== false;
  }
};
NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);
var NodeBookmark = class _NodeBookmark {
  constructor(anchor) {
    this.anchor = anchor;
  }
  map(mapping) {
    let { deleted, pos } = mapping.mapResult(this.anchor);
    return deleted ? new TextBookmark(pos, pos) : new _NodeBookmark(pos);
  }
  resolve(doc3) {
    let $pos = doc3.resolve(this.anchor), node = $pos.nodeAfter;
    if (node && NodeSelection.isSelectable(node))
      return new NodeSelection($pos);
    return Selection.near($pos);
  }
};
var AllSelection = class _AllSelection extends Selection {
  /**
  Create an all-selection over the given document.
  */
  constructor(doc3) {
    super(doc3.resolve(0), doc3.resolve(doc3.content.size));
  }
  replace(tr, content = Slice.empty) {
    if (content == Slice.empty) {
      tr.delete(0, tr.doc.content.size);
      let sel = Selection.atStart(tr.doc);
      if (!sel.eq(tr.selection))
        tr.setSelection(sel);
    } else {
      super.replace(tr, content);
    }
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(doc3) {
    return new _AllSelection(doc3);
  }
  map(doc3) {
    return new _AllSelection(doc3);
  }
  eq(other) {
    return other instanceof _AllSelection;
  }
  getBookmark() {
    return AllBookmark;
  }
};
Selection.jsonID("all", AllSelection);
var AllBookmark = {
  map() {
    return this;
  },
  resolve(doc3) {
    return new AllSelection(doc3);
  }
};
function findSelectionIn(doc3, node, pos, index2, dir, text = false) {
  if (node.inlineContent)
    return TextSelection.create(doc3, pos);
  for (let i = index2 - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
    let child = node.child(i);
    if (!child.isAtom) {
      let inner = findSelectionIn(doc3, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
      if (inner)
        return inner;
    } else if (!text && NodeSelection.isSelectable(child)) {
      return NodeSelection.create(doc3, pos - (dir < 0 ? child.nodeSize : 0));
    }
    pos += child.nodeSize * dir;
  }
  return null;
}
function selectionToInsertionEnd(tr, startLen, bias) {
  let last = tr.steps.length - 1;
  if (last < startLen)
    return;
  let step = tr.steps[last];
  if (!(step instanceof ReplaceStep || step instanceof ReplaceAroundStep))
    return;
  let map = tr.mapping.maps[last], end2;
  map.forEach((_from, _to, _newFrom, newTo) => {
    if (end2 == null)
      end2 = newTo;
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end2), bias));
}
function bind(f, self2) {
  return !self2 || !f ? f : f.bind(self2);
}
var FieldDesc = class {
  constructor(name, desc, self2) {
    this.name = name;
    this.init = bind(desc.init, self2);
    this.apply = bind(desc.apply, self2);
  }
};
var baseFields = [
  new FieldDesc("doc", {
    init(config2) {
      return config2.doc || config2.schema.topNodeType.createAndFill();
    },
    apply(tr) {
      return tr.doc;
    }
  }),
  new FieldDesc("selection", {
    init(config2, instance) {
      return config2.selection || Selection.atStart(instance.doc);
    },
    apply(tr) {
      return tr.selection;
    }
  }),
  new FieldDesc("storedMarks", {
    init(config2) {
      return config2.storedMarks || null;
    },
    apply(tr, _marks, _old, state) {
      return state.selection.$cursor ? tr.storedMarks : null;
    }
  }),
  new FieldDesc("scrollToSelection", {
    init() {
      return 0;
    },
    apply(tr, prev) {
      return tr.scrolledIntoView ? prev + 1 : prev;
    }
  })
];
function bindProps(obj, self2, target) {
  for (let prop in obj) {
    let val = obj[prop];
    if (val instanceof Function)
      val = val.bind(self2);
    else if (prop == "handleDOMEvents")
      val = bindProps(val, self2, {});
    target[prop] = val;
  }
  return target;
}
var Plugin = class {
  /**
  Create a plugin.
  */
  constructor(spec) {
    this.spec = spec;
    this.props = {};
    if (spec.props)
      bindProps(spec.props, this, this.props);
    this.key = spec.key ? spec.key.key : createKey("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(state) {
    return state[this.key];
  }
};
var keys = /* @__PURE__ */ Object.create(null);
function createKey(name) {
  if (name in keys)
    return name + "$" + ++keys[name];
  keys[name] = 0;
  return name + "$";
}
var PluginKey = class {
  /**
  Create a plugin key.
  */
  constructor(name = "key") {
    this.key = createKey(name);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(state) {
    return state.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(state) {
    return state[this.key];
  }
};

// node_modules/prosemirror-view/dist/index.js
var domIndex = function(node) {
  for (var index2 = 0; ; index2++) {
    node = node.previousSibling;
    if (!node)
      return index2;
  }
};
var parentNode = function(node) {
  let parent = node.assignedSlot || node.parentNode;
  return parent && parent.nodeType == 11 ? parent.host : parent;
};
var reusedRange = null;
var textRange = function(node, from, to) {
  let range = reusedRange || (reusedRange = document.createRange());
  range.setEnd(node, to == null ? node.nodeValue.length : to);
  range.setStart(node, from || 0);
  return range;
};
var clearReusedRange = function() {
  reusedRange = null;
};
var isEquivalentPosition = function(node, off, targetNode, targetOff) {
  return targetNode && (scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1));
};
var atomElements = /^(img|br|input|textarea|hr)$/i;
function scanFor(node, off, targetNode, targetOff, dir) {
  var _a;
  for (; ; ) {
    if (node == targetNode && off == targetOff)
      return true;
    if (off == (dir < 0 ? 0 : nodeSize(node))) {
      let parent = node.parentNode;
      if (!parent || parent.nodeType != 1 || hasBlockDesc(node) || atomElements.test(node.nodeName) || node.contentEditable == "false")
        return false;
      off = domIndex(node) + (dir < 0 ? 0 : 1);
      node = parent;
    } else if (node.nodeType == 1) {
      let child = node.childNodes[off + (dir < 0 ? -1 : 0)];
      if (child.nodeType == 1 && child.contentEditable == "false") {
        if ((_a = child.pmViewDesc) === null || _a === void 0 ? void 0 : _a.ignoreForSelection)
          off += dir;
        else
          return false;
      } else {
        node = child;
        off = dir < 0 ? nodeSize(node) : 0;
      }
    } else {
      return false;
    }
  }
}
function nodeSize(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function textNodeBefore$1(node, offset2) {
  for (; ; ) {
    if (node.nodeType == 3 && offset2)
      return node;
    if (node.nodeType == 1 && offset2 > 0) {
      if (node.contentEditable == "false")
        return null;
      node = node.childNodes[offset2 - 1];
      offset2 = nodeSize(node);
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset2 = domIndex(node);
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function textNodeAfter$1(node, offset2) {
  for (; ; ) {
    if (node.nodeType == 3 && offset2 < node.nodeValue.length)
      return node;
    if (node.nodeType == 1 && offset2 < node.childNodes.length) {
      if (node.contentEditable == "false")
        return null;
      node = node.childNodes[offset2];
      offset2 = 0;
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset2 = domIndex(node) + 1;
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function isOnEdge(node, offset2, parent) {
  for (let atStart = offset2 == 0, atEnd = offset2 == nodeSize(node); atStart || atEnd; ) {
    if (node == parent)
      return true;
    let index2 = domIndex(node);
    node = node.parentNode;
    if (!node)
      return false;
    atStart = atStart && index2 == 0;
    atEnd = atEnd && index2 == nodeSize(node);
  }
}
function hasBlockDesc(dom) {
  let desc;
  for (let cur = dom; cur; cur = cur.parentNode)
    if (desc = cur.pmViewDesc)
      break;
  return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom);
}
var selectionCollapsed = function(domSel) {
  return domSel.focusNode && isEquivalentPosition(domSel.focusNode, domSel.focusOffset, domSel.anchorNode, domSel.anchorOffset);
};
function keyEvent(keyCode, key) {
  let event = document.createEvent("Event");
  event.initEvent("keydown", true, true);
  event.keyCode = keyCode;
  event.key = event.code = key;
  return event;
}
function deepActiveElement(doc3) {
  let elt = doc3.activeElement;
  while (elt && elt.shadowRoot)
    elt = elt.shadowRoot.activeElement;
  return elt;
}
function caretFromPoint(doc3, x, y) {
  if (doc3.caretPositionFromPoint) {
    try {
      let pos = doc3.caretPositionFromPoint(x, y);
      if (pos)
        return { node: pos.offsetNode, offset: Math.min(nodeSize(pos.offsetNode), pos.offset) };
    } catch (_) {
    }
  }
  if (doc3.caretRangeFromPoint) {
    let range = doc3.caretRangeFromPoint(x, y);
    if (range)
      return { node: range.startContainer, offset: Math.min(nodeSize(range.startContainer), range.startOffset) };
  }
}
var nav = typeof navigator != "undefined" ? navigator : null;
var doc2 = typeof document != "undefined" ? document : null;
var agent = nav && nav.userAgent || "";
var ie_edge = /Edge\/(\d+)/.exec(agent);
var ie_upto10 = /MSIE \d/.exec(agent);
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(agent);
var ie = !!(ie_upto10 || ie_11up || ie_edge);
var ie_version = ie_upto10 ? document.documentMode : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0;
var gecko = !ie && /gecko\/(\d+)/i.test(agent);
gecko && +(/Firefox\/(\d+)/.exec(agent) || [0, 0])[1];
var _chrome = !ie && /Chrome\/(\d+)/.exec(agent);
var chrome = !!_chrome;
var chrome_version = _chrome ? +_chrome[1] : 0;
var safari = !ie && !!nav && /Apple Computer/.test(nav.vendor);
var ios = safari && (/Mobile\/\w+/.test(agent) || !!nav && nav.maxTouchPoints > 2);
var mac = ios || (nav ? /Mac/.test(nav.platform) : false);
var windows = nav ? /Win/.test(nav.platform) : false;
var android = /Android \d/.test(agent);
var webkit = !!doc2 && "webkitFontSmoothing" in doc2.documentElement.style;
var webkit_version = webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function windowRect(doc3) {
  let vp = doc3.defaultView && doc3.defaultView.visualViewport;
  if (vp)
    return {
      left: 0,
      right: vp.width,
      top: 0,
      bottom: vp.height
    };
  return {
    left: 0,
    right: doc3.documentElement.clientWidth,
    top: 0,
    bottom: doc3.documentElement.clientHeight
  };
}
function getSide(value2, side) {
  return typeof value2 == "number" ? value2 : value2[side];
}
function clientRect(node) {
  let rect = node.getBoundingClientRect();
  let scaleX = rect.width / node.offsetWidth || 1;
  let scaleY = rect.height / node.offsetHeight || 1;
  return {
    left: rect.left,
    right: rect.left + node.clientWidth * scaleX,
    top: rect.top,
    bottom: rect.top + node.clientHeight * scaleY
  };
}
function scrollRectIntoView(view, rect, startDOM) {
  let scrollThreshold = view.someProp("scrollThreshold") || 0, scrollMargin = view.someProp("scrollMargin") || 5;
  let doc3 = view.dom.ownerDocument;
  for (let parent = startDOM || view.dom; ; ) {
    if (!parent)
      break;
    if (parent.nodeType != 1) {
      parent = parentNode(parent);
      continue;
    }
    let elt = parent;
    let atTop = elt == doc3.body;
    let bounding = atTop ? windowRect(doc3) : clientRect(elt);
    let moveX = 0, moveY = 0;
    if (rect.top < bounding.top + getSide(scrollThreshold, "top"))
      moveY = -(bounding.top - rect.top + getSide(scrollMargin, "top"));
    else if (rect.bottom > bounding.bottom - getSide(scrollThreshold, "bottom"))
      moveY = rect.bottom - rect.top > bounding.bottom - bounding.top ? rect.top + getSide(scrollMargin, "top") - bounding.top : rect.bottom - bounding.bottom + getSide(scrollMargin, "bottom");
    if (rect.left < bounding.left + getSide(scrollThreshold, "left"))
      moveX = -(bounding.left - rect.left + getSide(scrollMargin, "left"));
    else if (rect.right > bounding.right - getSide(scrollThreshold, "right"))
      moveX = rect.right - bounding.right + getSide(scrollMargin, "right");
    if (moveX || moveY) {
      if (atTop) {
        doc3.defaultView.scrollBy(moveX, moveY);
      } else {
        let startX = elt.scrollLeft, startY = elt.scrollTop;
        if (moveY)
          elt.scrollTop += moveY;
        if (moveX)
          elt.scrollLeft += moveX;
        let dX = elt.scrollLeft - startX, dY = elt.scrollTop - startY;
        rect = { left: rect.left - dX, top: rect.top - dY, right: rect.right - dX, bottom: rect.bottom - dY };
      }
    }
    let pos = atTop ? "fixed" : getComputedStyle(parent).position;
    if (/^(fixed|sticky)$/.test(pos))
      break;
    parent = pos == "absolute" ? parent.offsetParent : parentNode(parent);
  }
}
function storeScrollPos(view) {
  let rect = view.dom.getBoundingClientRect(), startY = Math.max(0, rect.top);
  let refDOM, refTop;
  for (let x = (rect.left + rect.right) / 2, y = startY + 1; y < Math.min(innerHeight, rect.bottom); y += 5) {
    let dom = view.root.elementFromPoint(x, y);
    if (!dom || dom == view.dom || !view.dom.contains(dom))
      continue;
    let localRect = dom.getBoundingClientRect();
    if (localRect.top >= startY - 20) {
      refDOM = dom;
      refTop = localRect.top;
      break;
    }
  }
  return { refDOM, refTop, stack: scrollStack(view.dom) };
}
function scrollStack(dom) {
  let stack = [], doc3 = dom.ownerDocument;
  for (let cur = dom; cur; cur = parentNode(cur)) {
    stack.push({ dom: cur, top: cur.scrollTop, left: cur.scrollLeft });
    if (dom == doc3)
      break;
  }
  return stack;
}
function resetScrollPos({ refDOM, refTop, stack }) {
  let newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0;
  restoreScrollStack(stack, newRefTop == 0 ? 0 : newRefTop - refTop);
}
function restoreScrollStack(stack, dTop) {
  for (let i = 0; i < stack.length; i++) {
    let { dom, top: top2, left: left2 } = stack[i];
    if (dom.scrollTop != top2 + dTop)
      dom.scrollTop = top2 + dTop;
    if (dom.scrollLeft != left2)
      dom.scrollLeft = left2;
  }
}
var preventScrollSupported = null;
function focusPreventScroll(dom) {
  if (dom.setActive)
    return dom.setActive();
  if (preventScrollSupported)
    return dom.focus(preventScrollSupported);
  let stored = scrollStack(dom);
  dom.focus(preventScrollSupported == null ? {
    get preventScroll() {
      preventScrollSupported = { preventScroll: true };
      return true;
    }
  } : void 0);
  if (!preventScrollSupported) {
    preventScrollSupported = false;
    restoreScrollStack(stored, 0);
  }
}
function findOffsetInNode(node, coords) {
  let closest, dxClosest = 2e8, coordsClosest, offset2 = 0;
  let rowBot = coords.top, rowTop = coords.top;
  let firstBelow, coordsBelow;
  for (let child = node.firstChild, childIndex = 0; child; child = child.nextSibling, childIndex++) {
    let rects;
    if (child.nodeType == 1)
      rects = child.getClientRects();
    else if (child.nodeType == 3)
      rects = textRange(child).getClientRects();
    else
      continue;
    for (let i = 0; i < rects.length; i++) {
      let rect = rects[i];
      if (rect.top <= rowBot && rect.bottom >= rowTop) {
        rowBot = Math.max(rect.bottom, rowBot);
        rowTop = Math.min(rect.top, rowTop);
        let dx = rect.left > coords.left ? rect.left - coords.left : rect.right < coords.left ? coords.left - rect.right : 0;
        if (dx < dxClosest) {
          closest = child;
          dxClosest = dx;
          coordsClosest = dx && closest.nodeType == 3 ? {
            left: rect.right < coords.left ? rect.right : rect.left,
            top: coords.top
          } : coords;
          if (child.nodeType == 1 && dx)
            offset2 = childIndex + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0);
          continue;
        }
      } else if (rect.top > coords.top && !firstBelow && rect.left <= coords.left && rect.right >= coords.left) {
        firstBelow = child;
        coordsBelow = { left: Math.max(rect.left, Math.min(rect.right, coords.left)), top: rect.top };
      }
      if (!closest && (coords.left >= rect.right && coords.top >= rect.top || coords.left >= rect.left && coords.top >= rect.bottom))
        offset2 = childIndex + 1;
    }
  }
  if (!closest && firstBelow) {
    closest = firstBelow;
    coordsClosest = coordsBelow;
    dxClosest = 0;
  }
  if (closest && closest.nodeType == 3)
    return findOffsetInText(closest, coordsClosest);
  if (!closest || dxClosest && closest.nodeType == 1)
    return { node, offset: offset2 };
  return findOffsetInNode(closest, coordsClosest);
}
function findOffsetInText(node, coords) {
  let len = node.nodeValue.length;
  let range = document.createRange();
  for (let i = 0; i < len; i++) {
    range.setEnd(node, i + 1);
    range.setStart(node, i);
    let rect = singleRect(range, 1);
    if (rect.top == rect.bottom)
      continue;
    if (inRect(coords, rect))
      return { node, offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0) };
  }
  return { node, offset: 0 };
}
function inRect(coords, rect) {
  return coords.left >= rect.left - 1 && coords.left <= rect.right + 1 && coords.top >= rect.top - 1 && coords.top <= rect.bottom + 1;
}
function targetKludge(dom, coords) {
  let parent = dom.parentNode;
  if (parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left)
    return parent;
  return dom;
}
function posFromElement(view, elt, coords) {
  let { node, offset: offset2 } = findOffsetInNode(elt, coords), bias = -1;
  if (node.nodeType == 1 && !node.firstChild) {
    let rect = node.getBoundingClientRect();
    bias = rect.left != rect.right && coords.left > (rect.left + rect.right) / 2 ? 1 : -1;
  }
  return view.docView.posFromDOM(node, offset2, bias);
}
function posFromCaret(view, node, offset2, coords) {
  let outsideBlock = -1;
  for (let cur = node, sawBlock = false; ; ) {
    if (cur == view.dom)
      break;
    let desc = view.docView.nearestDesc(cur, true), rect;
    if (!desc)
      return null;
    if (desc.dom.nodeType == 1 && (desc.node.isBlock && desc.parent || !desc.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((rect = desc.dom.getBoundingClientRect()).width || rect.height)) {
      if (desc.node.isBlock && desc.parent) {
        if (!sawBlock && rect.left > coords.left || rect.top > coords.top)
          outsideBlock = desc.posBefore;
        else if (!sawBlock && rect.right < coords.left || rect.bottom < coords.top)
          outsideBlock = desc.posAfter;
        sawBlock = true;
      }
      if (!desc.contentDOM && outsideBlock < 0 && !desc.node.isText) {
        let before = desc.node.isBlock ? coords.top < (rect.top + rect.bottom) / 2 : coords.left < (rect.left + rect.right) / 2;
        return before ? desc.posBefore : desc.posAfter;
      }
    }
    cur = desc.dom.parentNode;
  }
  return outsideBlock > -1 ? outsideBlock : view.docView.posFromDOM(node, offset2, -1);
}
function elementFromPoint(element, coords, box) {
  let len = element.childNodes.length;
  if (len && box.top < box.bottom) {
    for (let startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI; ; ) {
      let child = element.childNodes[i];
      if (child.nodeType == 1) {
        let rects = child.getClientRects();
        for (let j = 0; j < rects.length; j++) {
          let rect = rects[j];
          if (inRect(coords, rect))
            return elementFromPoint(child, coords, rect);
        }
      }
      if ((i = (i + 1) % len) == startI)
        break;
    }
  }
  return element;
}
function posAtCoords(view, coords) {
  let doc3 = view.dom.ownerDocument, node, offset2 = 0;
  let caret = caretFromPoint(doc3, coords.left, coords.top);
  if (caret)
    ({ node, offset: offset2 } = caret);
  let elt = (view.root.elementFromPoint ? view.root : doc3).elementFromPoint(coords.left, coords.top);
  let pos;
  if (!elt || !view.dom.contains(elt.nodeType != 1 ? elt.parentNode : elt)) {
    let box = view.dom.getBoundingClientRect();
    if (!inRect(coords, box))
      return null;
    elt = elementFromPoint(view.dom, coords, box);
    if (!elt)
      return null;
  }
  if (safari) {
    for (let p = elt; node && p; p = parentNode(p))
      if (p.draggable)
        node = void 0;
  }
  elt = targetKludge(elt, coords);
  if (node) {
    if (gecko && node.nodeType == 1) {
      offset2 = Math.min(offset2, node.childNodes.length);
      if (offset2 < node.childNodes.length) {
        let next = node.childNodes[offset2], box;
        if (next.nodeName == "IMG" && (box = next.getBoundingClientRect()).right <= coords.left && box.bottom > coords.top)
          offset2++;
      }
    }
    let prev;
    if (webkit && offset2 && node.nodeType == 1 && (prev = node.childNodes[offset2 - 1]).nodeType == 1 && prev.contentEditable == "false" && prev.getBoundingClientRect().top >= coords.top)
      offset2--;
    if (node == view.dom && offset2 == node.childNodes.length - 1 && node.lastChild.nodeType == 1 && coords.top > node.lastChild.getBoundingClientRect().bottom)
      pos = view.state.doc.content.size;
    else if (offset2 == 0 || node.nodeType != 1 || node.childNodes[offset2 - 1].nodeName != "BR")
      pos = posFromCaret(view, node, offset2, coords);
  }
  if (pos == null)
    pos = posFromElement(view, elt, coords);
  let desc = view.docView.nearestDesc(elt, true);
  return { pos, inside: desc ? desc.posAtStart - desc.border : -1 };
}
function nonZero(rect) {
  return rect.top < rect.bottom || rect.left < rect.right;
}
function singleRect(target, bias) {
  let rects = target.getClientRects();
  if (rects.length) {
    let first2 = rects[bias < 0 ? 0 : rects.length - 1];
    if (nonZero(first2))
      return first2;
  }
  return Array.prototype.find.call(rects, nonZero) || target.getBoundingClientRect();
}
var BIDI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function coordsAtPos(view, pos, side) {
  let { node, offset: offset2, atom } = view.docView.domFromPos(pos, side < 0 ? -1 : 1);
  let supportEmptyRange = webkit || gecko;
  if (node.nodeType == 3) {
    if (supportEmptyRange && (BIDI.test(node.nodeValue) || (side < 0 ? !offset2 : offset2 == node.nodeValue.length))) {
      let rect = singleRect(textRange(node, offset2, offset2), side);
      if (gecko && offset2 && /\s/.test(node.nodeValue[offset2 - 1]) && offset2 < node.nodeValue.length) {
        let rectBefore = singleRect(textRange(node, offset2 - 1, offset2 - 1), -1);
        if (rectBefore.top == rect.top) {
          let rectAfter = singleRect(textRange(node, offset2, offset2 + 1), -1);
          if (rectAfter.top != rect.top)
            return flattenV(rectAfter, rectAfter.left < rectBefore.left);
        }
      }
      return rect;
    } else {
      let from = offset2, to = offset2, takeSide = side < 0 ? 1 : -1;
      if (side < 0 && !offset2) {
        to++;
        takeSide = -1;
      } else if (side >= 0 && offset2 == node.nodeValue.length) {
        from--;
        takeSide = 1;
      } else if (side < 0) {
        from--;
      } else {
        to++;
      }
      return flattenV(singleRect(textRange(node, from, to), takeSide), takeSide < 0);
    }
  }
  let $dom = view.state.doc.resolve(pos - (atom || 0));
  if (!$dom.parent.inlineContent) {
    if (atom == null && offset2 && (side < 0 || offset2 == nodeSize(node))) {
      let before = node.childNodes[offset2 - 1];
      if (before.nodeType == 1)
        return flattenH(before.getBoundingClientRect(), false);
    }
    if (atom == null && offset2 < nodeSize(node)) {
      let after = node.childNodes[offset2];
      if (after.nodeType == 1)
        return flattenH(after.getBoundingClientRect(), true);
    }
    return flattenH(node.getBoundingClientRect(), side >= 0);
  }
  if (atom == null && offset2 && (side < 0 || offset2 == nodeSize(node))) {
    let before = node.childNodes[offset2 - 1];
    let target = before.nodeType == 3 ? textRange(before, nodeSize(before) - (supportEmptyRange ? 0 : 1)) : before.nodeType == 1 && (before.nodeName != "BR" || !before.nextSibling) ? before : null;
    if (target)
      return flattenV(singleRect(target, 1), false);
  }
  if (atom == null && offset2 < nodeSize(node)) {
    let after = node.childNodes[offset2];
    while (after.pmViewDesc && after.pmViewDesc.ignoreForCoords)
      after = after.nextSibling;
    let target = !after ? null : after.nodeType == 3 ? textRange(after, 0, supportEmptyRange ? 0 : 1) : after.nodeType == 1 ? after : null;
    if (target)
      return flattenV(singleRect(target, -1), true);
  }
  return flattenV(singleRect(node.nodeType == 3 ? textRange(node) : node, -side), side >= 0);
}
function flattenV(rect, left2) {
  if (rect.width == 0)
    return rect;
  let x = left2 ? rect.left : rect.right;
  return { top: rect.top, bottom: rect.bottom, left: x, right: x };
}
function flattenH(rect, top2) {
  if (rect.height == 0)
    return rect;
  let y = top2 ? rect.top : rect.bottom;
  return { top: y, bottom: y, left: rect.left, right: rect.right };
}
function withFlushedState(view, state, f) {
  let viewState = view.state, active = view.root.activeElement;
  if (viewState != state)
    view.updateState(state);
  if (active != view.dom)
    view.focus();
  try {
    return f();
  } finally {
    if (viewState != state)
      view.updateState(viewState);
    if (active != view.dom && active)
      active.focus();
  }
}
function endOfTextblockVertical(view, state, dir) {
  let sel = state.selection;
  let $pos = dir == "up" ? sel.$from : sel.$to;
  return withFlushedState(view, state, () => {
    let { node: dom } = view.docView.domFromPos($pos.pos, dir == "up" ? -1 : 1);
    for (; ; ) {
      let nearest = view.docView.nearestDesc(dom, true);
      if (!nearest)
        break;
      if (nearest.node.isBlock) {
        dom = nearest.contentDOM || nearest.dom;
        break;
      }
      dom = nearest.dom.parentNode;
    }
    let coords = coordsAtPos(view, $pos.pos, 1);
    for (let child = dom.firstChild; child; child = child.nextSibling) {
      let boxes;
      if (child.nodeType == 1)
        boxes = child.getClientRects();
      else if (child.nodeType == 3)
        boxes = textRange(child, 0, child.nodeValue.length).getClientRects();
      else
        continue;
      for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (box.bottom > box.top + 1 && (dir == "up" ? coords.top - box.top > (box.bottom - coords.top) * 2 : box.bottom - coords.bottom > (coords.bottom - box.top) * 2))
          return false;
      }
    }
    return true;
  });
}
var maybeRTL = /[\u0590-\u08ac]/;
function endOfTextblockHorizontal(view, state, dir) {
  let { $head } = state.selection;
  if (!$head.parent.isTextblock)
    return false;
  let offset2 = $head.parentOffset, atStart = !offset2, atEnd = offset2 == $head.parent.content.size;
  let sel = view.domSelection();
  if (!sel)
    return $head.pos == $head.start() || $head.pos == $head.end();
  if (!maybeRTL.test($head.parent.textContent) || !sel.modify)
    return dir == "left" || dir == "backward" ? atStart : atEnd;
  return withFlushedState(view, state, () => {
    let { focusNode: oldNode, focusOffset: oldOff, anchorNode, anchorOffset } = view.domSelectionRange();
    let oldBidiLevel = sel.caretBidiLevel;
    sel.modify("move", dir, "character");
    let parentDOM = $head.depth ? view.docView.domAfterPos($head.before()) : view.dom;
    let { focusNode: newNode, focusOffset: newOff } = view.domSelectionRange();
    let result = newNode && !parentDOM.contains(newNode.nodeType == 1 ? newNode : newNode.parentNode) || oldNode == newNode && oldOff == newOff;
    try {
      sel.collapse(anchorNode, anchorOffset);
      if (oldNode && (oldNode != anchorNode || oldOff != anchorOffset) && sel.extend)
        sel.extend(oldNode, oldOff);
    } catch (_) {
    }
    if (oldBidiLevel != null)
      sel.caretBidiLevel = oldBidiLevel;
    return result;
  });
}
var cachedState = null;
var cachedDir = null;
var cachedResult = false;
function endOfTextblock(view, state, dir) {
  if (cachedState == state && cachedDir == dir)
    return cachedResult;
  cachedState = state;
  cachedDir = dir;
  return cachedResult = dir == "up" || dir == "down" ? endOfTextblockVertical(view, state, dir) : endOfTextblockHorizontal(view, state, dir);
}
var NOT_DIRTY = 0;
var CHILD_DIRTY = 1;
var CONTENT_DIRTY = 2;
var NODE_DIRTY = 3;
var ViewDesc = class {
  constructor(parent, children, dom, contentDOM) {
    this.parent = parent;
    this.children = children;
    this.dom = dom;
    this.contentDOM = contentDOM;
    this.dirty = NOT_DIRTY;
    dom.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(widget) {
    return false;
  }
  matchesMark(mark) {
    return false;
  }
  matchesNode(node, outerDeco, innerDeco) {
    return false;
  }
  matchesHack(nodeName) {
    return false;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(event) {
    return false;
  }
  // The size of the content represented by this desc.
  get size() {
    let size = 0;
    for (let i = 0; i < this.children.length; i++)
      size += this.children[i].size;
    return size;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0;
    if (this.dom.pmViewDesc == this)
      this.dom.pmViewDesc = void 0;
    for (let i = 0; i < this.children.length; i++)
      this.children[i].destroy();
  }
  posBeforeChild(child) {
    for (let i = 0, pos = this.posAtStart; ; i++) {
      let cur = this.children[i];
      if (cur == child)
        return pos;
      pos += cur.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(dom, offset2, bias) {
    if (this.contentDOM && this.contentDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode)) {
      if (bias < 0) {
        let domBefore, desc;
        if (dom == this.contentDOM) {
          domBefore = dom.childNodes[offset2 - 1];
        } else {
          while (dom.parentNode != this.contentDOM)
            dom = dom.parentNode;
          domBefore = dom.previousSibling;
        }
        while (domBefore && !((desc = domBefore.pmViewDesc) && desc.parent == this))
          domBefore = domBefore.previousSibling;
        return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart;
      } else {
        let domAfter, desc;
        if (dom == this.contentDOM) {
          domAfter = dom.childNodes[offset2];
        } else {
          while (dom.parentNode != this.contentDOM)
            dom = dom.parentNode;
          domAfter = dom.nextSibling;
        }
        while (domAfter && !((desc = domAfter.pmViewDesc) && desc.parent == this))
          domAfter = domAfter.nextSibling;
        return domAfter ? this.posBeforeChild(desc) : this.posAtEnd;
      }
    }
    let atEnd;
    if (dom == this.dom && this.contentDOM) {
      atEnd = offset2 > domIndex(this.contentDOM);
    } else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
      atEnd = dom.compareDocumentPosition(this.contentDOM) & 2;
    } else if (this.dom.firstChild) {
      if (offset2 == 0)
        for (let search = dom; ; search = search.parentNode) {
          if (search == this.dom) {
            atEnd = false;
            break;
          }
          if (search.previousSibling)
            break;
        }
      if (atEnd == null && offset2 == dom.childNodes.length)
        for (let search = dom; ; search = search.parentNode) {
          if (search == this.dom) {
            atEnd = true;
            break;
          }
          if (search.nextSibling)
            break;
        }
    }
    return (atEnd == null ? bias > 0 : atEnd) ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(dom, onlyNodes = false) {
    for (let first2 = true, cur = dom; cur; cur = cur.parentNode) {
      let desc = this.getDesc(cur), nodeDOM;
      if (desc && (!onlyNodes || desc.node)) {
        if (first2 && (nodeDOM = desc.nodeDOM) && !(nodeDOM.nodeType == 1 ? nodeDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode) : nodeDOM == dom))
          first2 = false;
        else
          return desc;
      }
    }
  }
  getDesc(dom) {
    let desc = dom.pmViewDesc;
    for (let cur = desc; cur; cur = cur.parent)
      if (cur == this)
        return desc;
  }
  posFromDOM(dom, offset2, bias) {
    for (let scan = dom; scan; scan = scan.parentNode) {
      let desc = this.getDesc(scan);
      if (desc)
        return desc.localPosFromDOM(dom, offset2, bias);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(pos) {
    for (let i = 0, offset2 = 0; i < this.children.length; i++) {
      let child = this.children[i], end2 = offset2 + child.size;
      if (offset2 == pos && end2 != offset2) {
        while (!child.border && child.children.length) {
          for (let i2 = 0; i2 < child.children.length; i2++) {
            let inner = child.children[i2];
            if (inner.size) {
              child = inner;
              break;
            }
          }
        }
        return child;
      }
      if (pos < end2)
        return child.descAt(pos - offset2 - child.border);
      offset2 = end2;
    }
  }
  domFromPos(pos, side) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: pos + 1 };
    let i = 0, offset2 = 0;
    for (let curPos = 0; i < this.children.length; i++) {
      let child = this.children[i], end2 = curPos + child.size;
      if (end2 > pos || child instanceof TrailingHackViewDesc) {
        offset2 = pos - curPos;
        break;
      }
      curPos = end2;
    }
    if (offset2)
      return this.children[i].domFromPos(offset2 - this.children[i].border, side);
    for (let prev; i && !(prev = this.children[i - 1]).size && prev instanceof WidgetViewDesc && prev.side >= 0; i--) {
    }
    if (side <= 0) {
      let prev, enter2 = true;
      for (; ; i--, enter2 = false) {
        prev = i ? this.children[i - 1] : null;
        if (!prev || prev.dom.parentNode == this.contentDOM)
          break;
      }
      if (prev && side && enter2 && !prev.border && !prev.domAtom)
        return prev.domFromPos(prev.size, side);
      return { node: this.contentDOM, offset: prev ? domIndex(prev.dom) + 1 : 0 };
    } else {
      let next, enter2 = true;
      for (; ; i++, enter2 = false) {
        next = i < this.children.length ? this.children[i] : null;
        if (!next || next.dom.parentNode == this.contentDOM)
          break;
      }
      if (next && enter2 && !next.border && !next.domAtom)
        return next.domFromPos(0, side);
      return { node: this.contentDOM, offset: next ? domIndex(next.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(from, to, base2 = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from, to, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let fromOffset = -1, toOffset = -1;
    for (let offset2 = base2, i = 0; ; i++) {
      let child = this.children[i], end2 = offset2 + child.size;
      if (fromOffset == -1 && from <= end2) {
        let childBase = offset2 + child.border;
        if (from >= childBase && to <= end2 - child.border && child.node && child.contentDOM && this.contentDOM.contains(child.contentDOM))
          return child.parseRange(from, to, childBase);
        from = offset2;
        for (let j = i; j > 0; j--) {
          let prev = this.children[j - 1];
          if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
            fromOffset = domIndex(prev.dom) + 1;
            break;
          }
          from -= prev.size;
        }
        if (fromOffset == -1)
          fromOffset = 0;
      }
      if (fromOffset > -1 && (end2 > to || i == this.children.length - 1)) {
        to = end2;
        for (let j = i + 1; j < this.children.length; j++) {
          let next = this.children[j];
          if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
            toOffset = domIndex(next.dom);
            break;
          }
          to += next.size;
        }
        if (toOffset == -1)
          toOffset = this.contentDOM.childNodes.length;
        break;
      }
      offset2 = end2;
    }
    return { node: this.contentDOM, from, to, fromOffset, toOffset };
  }
  emptyChildAt(side) {
    if (this.border || !this.contentDOM || !this.children.length)
      return false;
    let child = this.children[side < 0 ? 0 : this.children.length - 1];
    return child.size == 0 || child.emptyChildAt(side);
  }
  domAfterPos(pos) {
    let { node, offset: offset2 } = this.domFromPos(pos, 0);
    if (node.nodeType != 1 || offset2 == node.childNodes.length)
      throw new RangeError("No node after pos " + pos);
    return node.childNodes[offset2];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(anchor, head, view, force = false) {
    let from = Math.min(anchor, head), to = Math.max(anchor, head);
    for (let i = 0, offset2 = 0; i < this.children.length; i++) {
      let child = this.children[i], end2 = offset2 + child.size;
      if (from > offset2 && to < end2)
        return child.setSelection(anchor - offset2 - child.border, head - offset2 - child.border, view, force);
      offset2 = end2;
    }
    let anchorDOM = this.domFromPos(anchor, anchor ? -1 : 1);
    let headDOM = head == anchor ? anchorDOM : this.domFromPos(head, head ? -1 : 1);
    let domSel = view.root.getSelection();
    let selRange = view.domSelectionRange();
    let brKludge = false;
    if ((gecko || safari) && anchor == head) {
      let { node, offset: offset2 } = anchorDOM;
      if (node.nodeType == 3) {
        brKludge = !!(offset2 && node.nodeValue[offset2 - 1] == "\n");
        if (brKludge && offset2 == node.nodeValue.length) {
          for (let scan = node, after; scan; scan = scan.parentNode) {
            if (after = scan.nextSibling) {
              if (after.nodeName == "BR")
                anchorDOM = headDOM = { node: after.parentNode, offset: domIndex(after) + 1 };
              break;
            }
            let desc = scan.pmViewDesc;
            if (desc && desc.node && desc.node.isBlock)
              break;
          }
        }
      } else {
        let prev = node.childNodes[offset2 - 1];
        brKludge = prev && (prev.nodeName == "BR" || prev.contentEditable == "false");
      }
    }
    if (gecko && selRange.focusNode && selRange.focusNode != headDOM.node && selRange.focusNode.nodeType == 1) {
      let after = selRange.focusNode.childNodes[selRange.focusOffset];
      if (after && after.contentEditable == "false")
        force = true;
    }
    if (!(force || brKludge && safari) && isEquivalentPosition(anchorDOM.node, anchorDOM.offset, selRange.anchorNode, selRange.anchorOffset) && isEquivalentPosition(headDOM.node, headDOM.offset, selRange.focusNode, selRange.focusOffset))
      return;
    let domSelExtended = false;
    if ((domSel.extend || anchor == head) && !brKludge) {
      domSel.collapse(anchorDOM.node, anchorDOM.offset);
      try {
        if (anchor != head)
          domSel.extend(headDOM.node, headDOM.offset);
        domSelExtended = true;
      } catch (_) {
      }
    }
    if (!domSelExtended) {
      if (anchor > head) {
        let tmp = anchorDOM;
        anchorDOM = headDOM;
        headDOM = tmp;
      }
      let range = document.createRange();
      range.setEnd(headDOM.node, headDOM.offset);
      range.setStart(anchorDOM.node, anchorDOM.offset);
      domSel.removeAllRanges();
      domSel.addRange(range);
    }
  }
  ignoreMutation(mutation) {
    return !this.contentDOM && mutation.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(from, to) {
    for (let offset2 = 0, i = 0; i < this.children.length; i++) {
      let child = this.children[i], end2 = offset2 + child.size;
      if (offset2 == end2 ? from <= end2 && to >= offset2 : from < end2 && to > offset2) {
        let startInside = offset2 + child.border, endInside = end2 - child.border;
        if (from >= startInside && to <= endInside) {
          this.dirty = from == offset2 || to == end2 ? CONTENT_DIRTY : CHILD_DIRTY;
          if (from == startInside && to == endInside && (child.contentLost || child.dom.parentNode != this.contentDOM))
            child.dirty = NODE_DIRTY;
          else
            child.markDirty(from - startInside, to - startInside);
          return;
        } else {
          child.dirty = child.dom == child.contentDOM && child.dom.parentNode == this.contentDOM && !child.children.length ? CONTENT_DIRTY : NODE_DIRTY;
        }
      }
      offset2 = end2;
    }
    this.dirty = CONTENT_DIRTY;
  }
  markParentsDirty() {
    let level = 1;
    for (let node = this.parent; node; node = node.parent, level++) {
      let dirty = level == 1 ? CONTENT_DIRTY : CHILD_DIRTY;
      if (node.dirty < dirty)
        node.dirty = dirty;
    }
  }
  get domAtom() {
    return false;
  }
  get ignoreForCoords() {
    return false;
  }
  get ignoreForSelection() {
    return false;
  }
  isText(text) {
    return false;
  }
};
var WidgetViewDesc = class extends ViewDesc {
  constructor(parent, widget, view, pos) {
    let self2, dom = widget.type.toDOM;
    if (typeof dom == "function")
      dom = dom(view, () => {
        if (!self2)
          return pos;
        if (self2.parent)
          return self2.parent.posBeforeChild(self2);
      });
    if (!widget.type.spec.raw) {
      if (dom.nodeType != 1) {
        let wrap = document.createElement("span");
        wrap.appendChild(dom);
        dom = wrap;
      }
      dom.contentEditable = "false";
      dom.classList.add("ProseMirror-widget");
    }
    super(parent, [], dom, null);
    this.widget = widget;
    this.widget = widget;
    self2 = this;
  }
  matchesWidget(widget) {
    return this.dirty == NOT_DIRTY && widget.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: true };
  }
  stopEvent(event) {
    let stop = this.widget.spec.stopEvent;
    return stop ? stop(event) : false;
  }
  ignoreMutation(mutation) {
    return mutation.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom);
    super.destroy();
  }
  get domAtom() {
    return true;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
};
var CompositionViewDesc = class extends ViewDesc {
  constructor(parent, dom, textDOM, text) {
    super(parent, [], dom, null);
    this.textDOM = textDOM;
    this.text = text;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(dom, offset2) {
    if (dom != this.textDOM)
      return this.posAtStart + (offset2 ? this.size : 0);
    return this.posAtStart + offset2;
  }
  domFromPos(pos) {
    return { node: this.textDOM, offset: pos };
  }
  ignoreMutation(mut) {
    return mut.type === "characterData" && mut.target.nodeValue == mut.oldValue;
  }
};
var MarkViewDesc = class _MarkViewDesc extends ViewDesc {
  constructor(parent, mark, dom, contentDOM, spec) {
    super(parent, [], dom, contentDOM);
    this.mark = mark;
    this.spec = spec;
  }
  static create(parent, mark, inline, view) {
    let custom = view.nodeViews[mark.type.name];
    let spec = custom && custom(mark, view, inline);
    if (!spec || !spec.dom)
      spec = DOMSerializer.renderSpec(document, mark.type.spec.toDOM(mark, inline), null, mark.attrs);
    return new _MarkViewDesc(parent, mark, spec.dom, spec.contentDOM || spec.dom, spec);
  }
  parseRule() {
    if (this.dirty & NODE_DIRTY || this.mark.type.spec.reparseInView)
      return null;
    return { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(mark) {
    return this.dirty != NODE_DIRTY && this.mark.eq(mark);
  }
  markDirty(from, to) {
    super.markDirty(from, to);
    if (this.dirty != NOT_DIRTY) {
      let parent = this.parent;
      while (!parent.node)
        parent = parent.parent;
      if (parent.dirty < this.dirty)
        parent.dirty = this.dirty;
      this.dirty = NOT_DIRTY;
    }
  }
  slice(from, to, view) {
    let copy2 = _MarkViewDesc.create(this.parent, this.mark, true, view);
    let nodes = this.children, size = this.size;
    if (to < size)
      nodes = replaceNodes(nodes, to, size, view);
    if (from > 0)
      nodes = replaceNodes(nodes, 0, from, view);
    for (let i = 0; i < nodes.length; i++)
      nodes[i].parent = copy2;
    copy2.children = nodes;
    return copy2;
  }
  ignoreMutation(mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
  }
  destroy() {
    if (this.spec.destroy)
      this.spec.destroy();
    super.destroy();
  }
};
var NodeViewDesc = class _NodeViewDesc extends ViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos) {
    super(parent, [], dom, contentDOM);
    this.node = node;
    this.outerDeco = outerDeco;
    this.innerDeco = innerDeco;
    this.nodeDOM = nodeDOM;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(parent, node, outerDeco, innerDeco, view, pos) {
    let custom = view.nodeViews[node.type.name], descObj;
    let spec = custom && custom(node, view, () => {
      if (!descObj)
        return pos;
      if (descObj.parent)
        return descObj.parent.posBeforeChild(descObj);
    }, outerDeco, innerDeco);
    let dom = spec && spec.dom, contentDOM = spec && spec.contentDOM;
    if (node.isText) {
      if (!dom)
        dom = document.createTextNode(node.text);
      else if (dom.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else if (!dom) {
      let spec2 = DOMSerializer.renderSpec(document, node.type.spec.toDOM(node), null, node.attrs);
      ({ dom, contentDOM } = spec2);
    }
    if (!contentDOM && !node.isText && dom.nodeName != "BR") {
      if (!dom.hasAttribute("contenteditable"))
        dom.contentEditable = "false";
      if (node.type.spec.draggable)
        dom.draggable = true;
    }
    let nodeDOM = dom;
    dom = applyOuterDeco(dom, outerDeco, node);
    if (spec)
      return descObj = new CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, spec, view, pos + 1);
    else if (node.isText)
      return new TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view);
    else
      return new _NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, view, pos + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let rule = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre")
      rule.preserveWhitespace = "full";
    if (!this.contentDOM) {
      rule.getContent = () => this.node.content;
    } else if (!this.contentLost) {
      rule.contentElement = this.contentDOM;
    } else {
      for (let i = this.children.length - 1; i >= 0; i--) {
        let child = this.children[i];
        if (this.dom.contains(child.dom.parentNode)) {
          rule.contentElement = child.dom.parentNode;
          break;
        }
      }
      if (!rule.contentElement)
        rule.getContent = () => Fragment.empty;
    }
    return rule;
  }
  matchesNode(node, outerDeco, innerDeco) {
    return this.dirty == NOT_DIRTY && node.eq(this.node) && sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(view, pos) {
    let inline = this.node.inlineContent, off = pos;
    let composition = view.composing ? this.localCompositionInfo(view, pos) : null;
    let localComposition = composition && composition.pos > -1 ? composition : null;
    let compositionInChild = composition && composition.pos < 0;
    let updater = new ViewTreeUpdater(this, localComposition && localComposition.node, view);
    iterDeco(this.node, this.innerDeco, (widget, i, insideNode) => {
      if (widget.spec.marks)
        updater.syncToMarks(widget.spec.marks, inline, view);
      else if (widget.type.side >= 0 && !insideNode)
        updater.syncToMarks(i == this.node.childCount ? Mark.none : this.node.child(i).marks, inline, view);
      updater.placeWidget(widget, view, off);
    }, (child, outerDeco, innerDeco, i) => {
      updater.syncToMarks(child.marks, inline, view);
      let compIndex;
      if (updater.findNodeMatch(child, outerDeco, innerDeco, i)) ;
      else if (compositionInChild && view.state.selection.from > off && view.state.selection.to < off + child.nodeSize && (compIndex = updater.findIndexWithChild(composition.node)) > -1 && updater.updateNodeAt(child, outerDeco, innerDeco, compIndex, view)) ;
      else if (updater.updateNextNode(child, outerDeco, innerDeco, view, i, off)) ;
      else {
        updater.addNode(child, outerDeco, innerDeco, view, off);
      }
      off += child.nodeSize;
    });
    updater.syncToMarks([], inline, view);
    if (this.node.isTextblock)
      updater.addTextblockHacks();
    updater.destroyRest();
    if (updater.changed || this.dirty == CONTENT_DIRTY) {
      if (localComposition)
        this.protectLocalComposition(view, localComposition);
      renderDescs(this.contentDOM, this.children, view);
      if (ios)
        iosHacks(this.dom);
    }
  }
  localCompositionInfo(view, pos) {
    let { from, to } = view.state.selection;
    if (!(view.state.selection instanceof TextSelection) || from < pos || to > pos + this.node.content.size)
      return null;
    let textNode = view.input.compositionNode;
    if (!textNode || !this.dom.contains(textNode.parentNode))
      return null;
    if (this.node.inlineContent) {
      let text = textNode.nodeValue;
      let textPos = findTextInFragment(this.node.content, text, from - pos, to - pos);
      return textPos < 0 ? null : { node: textNode, pos: textPos, text };
    } else {
      return { node: textNode, pos: -1, text: "" };
    }
  }
  protectLocalComposition(view, { node, pos, text }) {
    if (this.getDesc(node))
      return;
    let topNode = node;
    for (; ; topNode = topNode.parentNode) {
      if (topNode.parentNode == this.contentDOM)
        break;
      while (topNode.previousSibling)
        topNode.parentNode.removeChild(topNode.previousSibling);
      while (topNode.nextSibling)
        topNode.parentNode.removeChild(topNode.nextSibling);
      if (topNode.pmViewDesc)
        topNode.pmViewDesc = void 0;
    }
    let desc = new CompositionViewDesc(this, topNode, node, text);
    view.input.compositionNodes.push(desc);
    this.children = replaceNodes(this.children, pos, pos + text.length, view, desc);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || !node.sameMarkup(this.node))
      return false;
    this.updateInner(node, outerDeco, innerDeco, view);
    return true;
  }
  updateInner(node, outerDeco, innerDeco, view) {
    this.updateOuterDeco(outerDeco);
    this.node = node;
    this.innerDeco = innerDeco;
    if (this.contentDOM)
      this.updateChildren(view, this.posAtStart);
    this.dirty = NOT_DIRTY;
  }
  updateOuterDeco(outerDeco) {
    if (sameOuterDeco(outerDeco, this.outerDeco))
      return;
    let needsWrap = this.nodeDOM.nodeType != 1;
    let oldDOM = this.dom;
    this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, needsWrap), computeOuterDeco(outerDeco, this.node, needsWrap));
    if (this.dom != oldDOM) {
      oldDOM.pmViewDesc = void 0;
      this.dom.pmViewDesc = this;
    }
    this.outerDeco = outerDeco;
  }
  // Mark this node as being the selected node.
  selectNode() {
    if (this.nodeDOM.nodeType == 1)
      this.nodeDOM.classList.add("ProseMirror-selectednode");
    if (this.contentDOM || !this.node.type.spec.draggable)
      this.dom.draggable = true;
  }
  // Remove selected node marking from this node.
  deselectNode() {
    if (this.nodeDOM.nodeType == 1) {
      this.nodeDOM.classList.remove("ProseMirror-selectednode");
      if (this.contentDOM || !this.node.type.spec.draggable)
        this.dom.removeAttribute("draggable");
    }
  }
  get domAtom() {
    return this.node.isAtom;
  }
};
function docViewDesc(doc3, outerDeco, innerDeco, dom, view) {
  applyOuterDeco(dom, outerDeco, doc3);
  let docView = new NodeViewDesc(void 0, doc3, outerDeco, innerDeco, dom, dom, dom, view, 0);
  if (docView.contentDOM)
    docView.updateChildren(view, 0);
  return docView;
}
var TextViewDesc = class _TextViewDesc extends NodeViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) {
    super(parent, node, outerDeco, innerDeco, dom, null, nodeDOM, view, 0);
  }
  parseRule() {
    let skip = this.nodeDOM.parentNode;
    while (skip && skip != this.dom && !skip.pmIsDeco)
      skip = skip.parentNode;
    return { skip: skip || true };
  }
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || this.dirty != NOT_DIRTY && !this.inParent() || !node.sameMarkup(this.node))
      return false;
    this.updateOuterDeco(outerDeco);
    if ((this.dirty != NOT_DIRTY || node.text != this.node.text) && node.text != this.nodeDOM.nodeValue) {
      this.nodeDOM.nodeValue = node.text;
      if (view.trackWrites == this.nodeDOM)
        view.trackWrites = null;
    }
    this.node = node;
    this.dirty = NOT_DIRTY;
    return true;
  }
  inParent() {
    let parentDOM = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode)
      if (n == parentDOM)
        return true;
    return false;
  }
  domFromPos(pos) {
    return { node: this.nodeDOM, offset: pos };
  }
  localPosFromDOM(dom, offset2, bias) {
    if (dom == this.nodeDOM)
      return this.posAtStart + Math.min(offset2, this.node.text.length);
    return super.localPosFromDOM(dom, offset2, bias);
  }
  ignoreMutation(mutation) {
    return mutation.type != "characterData" && mutation.type != "selection";
  }
  slice(from, to, view) {
    let node = this.node.cut(from, to), dom = document.createTextNode(node.text);
    return new _TextViewDesc(this.parent, node, this.outerDeco, this.innerDeco, dom, dom, view);
  }
  markDirty(from, to) {
    super.markDirty(from, to);
    if (this.dom != this.nodeDOM && (from == 0 || to == this.nodeDOM.nodeValue.length))
      this.dirty = NODE_DIRTY;
  }
  get domAtom() {
    return false;
  }
  isText(text) {
    return this.node.text == text;
  }
};
var TrailingHackViewDesc = class extends ViewDesc {
  parseRule() {
    return { ignore: true };
  }
  matchesHack(nodeName) {
    return this.dirty == NOT_DIRTY && this.dom.nodeName == nodeName;
  }
  get domAtom() {
    return true;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
};
var CustomNodeViewDesc = class extends NodeViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view, pos) {
    super(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos);
    this.spec = spec;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY)
      return false;
    if (this.spec.update && (this.node.type == node.type || this.spec.multiType)) {
      let result = this.spec.update(node, outerDeco, innerDeco);
      if (result)
        this.updateInner(node, outerDeco, innerDeco, view);
      return result;
    } else if (!this.contentDOM && !node.isLeaf) {
      return false;
    } else {
      return super.update(node, outerDeco, innerDeco, view);
    }
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(anchor, head, view, force) {
    this.spec.setSelection ? this.spec.setSelection(anchor, head, view.root) : super.setSelection(anchor, head, view, force);
  }
  destroy() {
    if (this.spec.destroy)
      this.spec.destroy();
    super.destroy();
  }
  stopEvent(event) {
    return this.spec.stopEvent ? this.spec.stopEvent(event) : false;
  }
  ignoreMutation(mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
  }
};
function renderDescs(parentDOM, descs, view) {
  let dom = parentDOM.firstChild, written = false;
  for (let i = 0; i < descs.length; i++) {
    let desc = descs[i], childDOM = desc.dom;
    if (childDOM.parentNode == parentDOM) {
      while (childDOM != dom) {
        dom = rm(dom);
        written = true;
      }
      dom = dom.nextSibling;
    } else {
      written = true;
      parentDOM.insertBefore(childDOM, dom);
    }
    if (desc instanceof MarkViewDesc) {
      let pos = dom ? dom.previousSibling : parentDOM.lastChild;
      renderDescs(desc.contentDOM, desc.children, view);
      dom = pos ? pos.nextSibling : parentDOM.firstChild;
    }
  }
  while (dom) {
    dom = rm(dom);
    written = true;
  }
  if (written && view.trackWrites == parentDOM)
    view.trackWrites = null;
}
var OuterDecoLevel = function(nodeName) {
  if (nodeName)
    this.nodeName = nodeName;
};
OuterDecoLevel.prototype = /* @__PURE__ */ Object.create(null);
var noDeco = [new OuterDecoLevel()];
function computeOuterDeco(outerDeco, node, needsWrap) {
  if (outerDeco.length == 0)
    return noDeco;
  let top2 = needsWrap ? noDeco[0] : new OuterDecoLevel(), result = [top2];
  for (let i = 0; i < outerDeco.length; i++) {
    let attrs = outerDeco[i].type.attrs;
    if (!attrs)
      continue;
    if (attrs.nodeName)
      result.push(top2 = new OuterDecoLevel(attrs.nodeName));
    for (let name in attrs) {
      let val = attrs[name];
      if (val == null)
        continue;
      if (needsWrap && result.length == 1)
        result.push(top2 = new OuterDecoLevel(node.isInline ? "span" : "div"));
      if (name == "class")
        top2.class = (top2.class ? top2.class + " " : "") + val;
      else if (name == "style")
        top2.style = (top2.style ? top2.style + ";" : "") + val;
      else if (name != "nodeName")
        top2[name] = val;
    }
  }
  return result;
}
function patchOuterDeco(outerDOM, nodeDOM, prevComputed, curComputed) {
  if (prevComputed == noDeco && curComputed == noDeco)
    return nodeDOM;
  let curDOM = nodeDOM;
  for (let i = 0; i < curComputed.length; i++) {
    let deco = curComputed[i], prev = prevComputed[i];
    if (i) {
      let parent;
      if (prev && prev.nodeName == deco.nodeName && curDOM != outerDOM && (parent = curDOM.parentNode) && parent.nodeName.toLowerCase() == deco.nodeName) {
        curDOM = parent;
      } else {
        parent = document.createElement(deco.nodeName);
        parent.pmIsDeco = true;
        parent.appendChild(curDOM);
        prev = noDeco[0];
        curDOM = parent;
      }
    }
    patchAttributes(curDOM, prev || noDeco[0], deco);
  }
  return curDOM;
}
function patchAttributes(dom, prev, cur) {
  for (let name in prev)
    if (name != "class" && name != "style" && name != "nodeName" && !(name in cur))
      dom.removeAttribute(name);
  for (let name in cur)
    if (name != "class" && name != "style" && name != "nodeName" && cur[name] != prev[name])
      dom.setAttribute(name, cur[name]);
  if (prev.class != cur.class) {
    let prevList = prev.class ? prev.class.split(" ").filter(Boolean) : [];
    let curList = cur.class ? cur.class.split(" ").filter(Boolean) : [];
    for (let i = 0; i < prevList.length; i++)
      if (curList.indexOf(prevList[i]) == -1)
        dom.classList.remove(prevList[i]);
    for (let i = 0; i < curList.length; i++)
      if (prevList.indexOf(curList[i]) == -1)
        dom.classList.add(curList[i]);
    if (dom.classList.length == 0)
      dom.removeAttribute("class");
  }
  if (prev.style != cur.style) {
    if (prev.style) {
      let prop = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, m;
      while (m = prop.exec(prev.style))
        dom.style.removeProperty(m[1]);
    }
    if (cur.style)
      dom.style.cssText += cur.style;
  }
}
function applyOuterDeco(dom, deco, node) {
  return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node, dom.nodeType != 1));
}
function sameOuterDeco(a, b) {
  if (a.length != b.length)
    return false;
  for (let i = 0; i < a.length; i++)
    if (!a[i].type.eq(b[i].type))
      return false;
  return true;
}
function rm(dom) {
  let next = dom.nextSibling;
  dom.parentNode.removeChild(dom);
  return next;
}
var ViewTreeUpdater = class {
  constructor(top2, lock, view) {
    this.lock = lock;
    this.view = view;
    this.index = 0;
    this.stack = [];
    this.changed = false;
    this.top = top2;
    this.preMatch = preMatch(top2.node.content, top2);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(start2, end2) {
    if (start2 == end2)
      return;
    for (let i = start2; i < end2; i++)
      this.top.children[i].destroy();
    this.top.children.splice(start2, end2 - start2);
    this.changed = true;
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(marks, inline, view) {
    let keep = 0, depth = this.stack.length >> 1;
    let maxKeep = Math.min(depth, marks.length);
    while (keep < maxKeep && (keep == depth - 1 ? this.top : this.stack[keep + 1 << 1]).matchesMark(marks[keep]) && marks[keep].type.spec.spanning !== false)
      keep++;
    while (keep < depth) {
      this.destroyRest();
      this.top.dirty = NOT_DIRTY;
      this.index = this.stack.pop();
      this.top = this.stack.pop();
      depth--;
    }
    while (depth < marks.length) {
      this.stack.push(this.top, this.index + 1);
      let found2 = -1;
      for (let i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) {
        let next = this.top.children[i];
        if (next.matchesMark(marks[depth]) && !this.isLocked(next.dom)) {
          found2 = i;
          break;
        }
      }
      if (found2 > -1) {
        if (found2 > this.index) {
          this.changed = true;
          this.destroyBetween(this.index, found2);
        }
        this.top = this.top.children[this.index];
      } else {
        let markDesc = MarkViewDesc.create(this.top, marks[depth], inline, view);
        this.top.children.splice(this.index, 0, markDesc);
        this.top = markDesc;
        this.changed = true;
      }
      this.index = 0;
      depth++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(node, outerDeco, innerDeco, index2) {
    let found2 = -1, targetDesc;
    if (index2 >= this.preMatch.index && (targetDesc = this.preMatch.matches[index2 - this.preMatch.index]).parent == this.top && targetDesc.matchesNode(node, outerDeco, innerDeco)) {
      found2 = this.top.children.indexOf(targetDesc, this.index);
    } else {
      for (let i = this.index, e = Math.min(this.top.children.length, i + 5); i < e; i++) {
        let child = this.top.children[i];
        if (child.matchesNode(node, outerDeco, innerDeco) && !this.preMatch.matched.has(child)) {
          found2 = i;
          break;
        }
      }
    }
    if (found2 < 0)
      return false;
    this.destroyBetween(this.index, found2);
    this.index++;
    return true;
  }
  updateNodeAt(node, outerDeco, innerDeco, index2, view) {
    let child = this.top.children[index2];
    if (child.dirty == NODE_DIRTY && child.dom == child.contentDOM)
      child.dirty = CONTENT_DIRTY;
    if (!child.update(node, outerDeco, innerDeco, view))
      return false;
    this.destroyBetween(this.index, index2);
    this.index++;
    return true;
  }
  findIndexWithChild(domNode) {
    for (; ; ) {
      let parent = domNode.parentNode;
      if (!parent)
        return -1;
      if (parent == this.top.contentDOM) {
        let desc = domNode.pmViewDesc;
        if (desc)
          for (let i = this.index; i < this.top.children.length; i++) {
            if (this.top.children[i] == desc)
              return i;
          }
        return -1;
      }
      domNode = parent;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(node, outerDeco, innerDeco, view, index2, pos) {
    for (let i = this.index; i < this.top.children.length; i++) {
      let next = this.top.children[i];
      if (next instanceof NodeViewDesc) {
        let preMatch2 = this.preMatch.matched.get(next);
        if (preMatch2 != null && preMatch2 != index2)
          return false;
        let nextDOM = next.dom, updated;
        let locked = this.isLocked(nextDOM) && !(node.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node.text && next.dirty != NODE_DIRTY && sameOuterDeco(outerDeco, next.outerDeco));
        if (!locked && next.update(node, outerDeco, innerDeco, view)) {
          this.destroyBetween(this.index, i);
          if (next.dom != nextDOM)
            this.changed = true;
          this.index++;
          return true;
        } else if (!locked && (updated = this.recreateWrapper(next, node, outerDeco, innerDeco, view, pos))) {
          this.destroyBetween(this.index, i);
          this.top.children[this.index] = updated;
          if (updated.contentDOM) {
            updated.dirty = CONTENT_DIRTY;
            updated.updateChildren(view, pos + 1);
            updated.dirty = NOT_DIRTY;
          }
          this.changed = true;
          this.index++;
          return true;
        }
        break;
      }
    }
    return false;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(next, node, outerDeco, innerDeco, view, pos) {
    if (next.dirty || node.isAtom || !next.children.length || !next.node.content.eq(node.content) || !sameOuterDeco(outerDeco, next.outerDeco) || !innerDeco.eq(next.innerDeco))
      return null;
    let wrapper5 = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
    if (wrapper5.contentDOM) {
      wrapper5.children = next.children;
      next.children = [];
      for (let ch of wrapper5.children)
        ch.parent = wrapper5;
    }
    next.destroy();
    return wrapper5;
  }
  // Insert the node as a newly created node desc.
  addNode(node, outerDeco, innerDeco, view, pos) {
    let desc = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
    if (desc.contentDOM)
      desc.updateChildren(view, pos + 1);
    this.top.children.splice(this.index++, 0, desc);
    this.changed = true;
  }
  placeWidget(widget, view, pos) {
    let next = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (next && next.matchesWidget(widget) && (widget == next.widget || !next.widget.type.toDOM.parentNode)) {
      this.index++;
    } else {
      let desc = new WidgetViewDesc(this.top, widget, view, pos);
      this.top.children.splice(this.index++, 0, desc);
      this.changed = true;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let lastChild = this.top.children[this.index - 1], parent = this.top;
    while (lastChild instanceof MarkViewDesc) {
      parent = lastChild;
      lastChild = parent.children[parent.children.length - 1];
    }
    if (!lastChild || // Empty textblock
    !(lastChild instanceof TextViewDesc) || /\n$/.test(lastChild.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(lastChild.node.text)) {
      if ((safari || chrome) && lastChild && lastChild.dom.contentEditable == "false")
        this.addHackNode("IMG", parent);
      this.addHackNode("BR", this.top);
    }
  }
  addHackNode(nodeName, parent) {
    if (parent == this.top && this.index < parent.children.length && parent.children[this.index].matchesHack(nodeName)) {
      this.index++;
    } else {
      let dom = document.createElement(nodeName);
      if (nodeName == "IMG") {
        dom.className = "ProseMirror-separator";
        dom.alt = "";
      }
      if (nodeName == "BR")
        dom.className = "ProseMirror-trailingBreak";
      let hack = new TrailingHackViewDesc(this.top, [], dom, null);
      if (parent != this.top)
        parent.children.push(hack);
      else
        parent.children.splice(this.index++, 0, hack);
      this.changed = true;
    }
  }
  isLocked(node) {
    return this.lock && (node == this.lock || node.nodeType == 1 && node.contains(this.lock.parentNode));
  }
};
function preMatch(frag, parentDesc) {
  let curDesc = parentDesc, descI = curDesc.children.length;
  let fI = frag.childCount, matched = /* @__PURE__ */ new Map(), matches2 = [];
  outer: while (fI > 0) {
    let desc;
    for (; ; ) {
      if (descI) {
        let next = curDesc.children[descI - 1];
        if (next instanceof MarkViewDesc) {
          curDesc = next;
          descI = next.children.length;
        } else {
          desc = next;
          descI--;
          break;
        }
      } else if (curDesc == parentDesc) {
        break outer;
      } else {
        descI = curDesc.parent.children.indexOf(curDesc);
        curDesc = curDesc.parent;
      }
    }
    let node = desc.node;
    if (!node)
      continue;
    if (node != frag.child(fI - 1))
      break;
    --fI;
    matched.set(desc, fI);
    matches2.push(desc);
  }
  return { index: fI, matched, matches: matches2.reverse() };
}
function compareSide(a, b) {
  return a.type.side - b.type.side;
}
function iterDeco(parent, deco, onWidget, onNode) {
  let locals = deco.locals(parent), offset2 = 0;
  if (locals.length == 0) {
    for (let i = 0; i < parent.childCount; i++) {
      let child = parent.child(i);
      onNode(child, locals, deco.forChild(offset2, child), i);
      offset2 += child.nodeSize;
    }
    return;
  }
  let decoIndex = 0, active = [], restNode = null;
  for (let parentIndex = 0; ; ) {
    let widget, widgets;
    while (decoIndex < locals.length && locals[decoIndex].to == offset2) {
      let next = locals[decoIndex++];
      if (next.widget) {
        if (!widget)
          widget = next;
        else
          (widgets || (widgets = [widget])).push(next);
      }
    }
    if (widget) {
      if (widgets) {
        widgets.sort(compareSide);
        for (let i = 0; i < widgets.length; i++)
          onWidget(widgets[i], parentIndex, !!restNode);
      } else {
        onWidget(widget, parentIndex, !!restNode);
      }
    }
    let child, index2;
    if (restNode) {
      index2 = -1;
      child = restNode;
      restNode = null;
    } else if (parentIndex < parent.childCount) {
      index2 = parentIndex;
      child = parent.child(parentIndex++);
    } else {
      break;
    }
    for (let i = 0; i < active.length; i++)
      if (active[i].to <= offset2)
        active.splice(i--, 1);
    while (decoIndex < locals.length && locals[decoIndex].from <= offset2 && locals[decoIndex].to > offset2)
      active.push(locals[decoIndex++]);
    let end2 = offset2 + child.nodeSize;
    if (child.isText) {
      let cutAt = end2;
      if (decoIndex < locals.length && locals[decoIndex].from < cutAt)
        cutAt = locals[decoIndex].from;
      for (let i = 0; i < active.length; i++)
        if (active[i].to < cutAt)
          cutAt = active[i].to;
      if (cutAt < end2) {
        restNode = child.cut(cutAt - offset2);
        child = child.cut(0, cutAt - offset2);
        end2 = cutAt;
        index2 = -1;
      }
    } else {
      while (decoIndex < locals.length && locals[decoIndex].to < end2)
        decoIndex++;
    }
    let outerDeco = child.isInline && !child.isLeaf ? active.filter((d) => !d.inline) : active.slice();
    onNode(child, outerDeco, deco.forChild(offset2, child), index2);
    offset2 = end2;
  }
}
function iosHacks(dom) {
  if (dom.nodeName == "UL" || dom.nodeName == "OL") {
    let oldCSS = dom.style.cssText;
    dom.style.cssText = oldCSS + "; list-style: square !important";
    window.getComputedStyle(dom).listStyle;
    dom.style.cssText = oldCSS;
  }
}
function findTextInFragment(frag, text, from, to) {
  for (let i = 0, pos = 0; i < frag.childCount && pos <= to; ) {
    let child = frag.child(i++), childStart = pos;
    pos += child.nodeSize;
    if (!child.isText)
      continue;
    let str = child.text;
    while (i < frag.childCount) {
      let next = frag.child(i++);
      pos += next.nodeSize;
      if (!next.isText)
        break;
      str += next.text;
    }
    if (pos >= from) {
      if (pos >= to && str.slice(to - text.length - childStart, to - childStart) == text)
        return to - text.length;
      let found2 = childStart < to ? str.lastIndexOf(text, to - childStart - 1) : -1;
      if (found2 >= 0 && found2 + text.length + childStart >= from)
        return childStart + found2;
      if (from == to && str.length >= to + text.length - childStart && str.slice(to - childStart, to - childStart + text.length) == text)
        return to;
    }
  }
  return -1;
}
function replaceNodes(nodes, from, to, view, replacement) {
  let result = [];
  for (let i = 0, off = 0; i < nodes.length; i++) {
    let child = nodes[i], start2 = off, end2 = off += child.size;
    if (start2 >= to || end2 <= from) {
      result.push(child);
    } else {
      if (start2 < from)
        result.push(child.slice(0, from - start2, view));
      if (replacement) {
        result.push(replacement);
        replacement = void 0;
      }
      if (end2 > to)
        result.push(child.slice(to - start2, child.size, view));
    }
  }
  return result;
}
function selectionFromDOM(view, origin = null) {
  let domSel = view.domSelectionRange(), doc3 = view.state.doc;
  if (!domSel.focusNode)
    return null;
  let nearestDesc = view.docView.nearestDesc(domSel.focusNode), inWidget = nearestDesc && nearestDesc.size == 0;
  let head = view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset, 1);
  if (head < 0)
    return null;
  let $head = doc3.resolve(head), anchor, selection;
  if (selectionCollapsed(domSel)) {
    anchor = head;
    while (nearestDesc && !nearestDesc.node)
      nearestDesc = nearestDesc.parent;
    let nearestDescNode = nearestDesc.node;
    if (nearestDesc && nearestDescNode.isAtom && NodeSelection.isSelectable(nearestDescNode) && nearestDesc.parent && !(nearestDescNode.isInline && isOnEdge(domSel.focusNode, domSel.focusOffset, nearestDesc.dom))) {
      let pos = nearestDesc.posBefore;
      selection = new NodeSelection(head == pos ? $head : doc3.resolve(pos));
    }
  } else {
    if (domSel instanceof view.dom.ownerDocument.defaultView.Selection && domSel.rangeCount > 1) {
      let min2 = head, max2 = head;
      for (let i = 0; i < domSel.rangeCount; i++) {
        let range = domSel.getRangeAt(i);
        min2 = Math.min(min2, view.docView.posFromDOM(range.startContainer, range.startOffset, 1));
        max2 = Math.max(max2, view.docView.posFromDOM(range.endContainer, range.endOffset, -1));
      }
      if (min2 < 0)
        return null;
      [anchor, head] = max2 == view.state.selection.anchor ? [max2, min2] : [min2, max2];
      $head = doc3.resolve(head);
    } else {
      anchor = view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset, 1);
    }
    if (anchor < 0)
      return null;
  }
  let $anchor = doc3.resolve(anchor);
  if (!selection) {
    let bias = origin == "pointer" || view.state.selection.head < $head.pos && !inWidget ? 1 : -1;
    selection = selectionBetween(view, $anchor, $head, bias);
  }
  return selection;
}
function editorOwnsSelection(view) {
  return view.editable ? view.hasFocus() : hasSelection(view) && document.activeElement && document.activeElement.contains(view.dom);
}
function selectionToDOM(view, force = false) {
  let sel = view.state.selection;
  syncNodeSelection(view, sel);
  if (!editorOwnsSelection(view))
    return;
  if (!force && view.input.mouseDown && view.input.mouseDown.allowDefault && chrome) {
    let domSel = view.domSelectionRange(), curSel = view.domObserver.currentSelection;
    if (domSel.anchorNode && curSel.anchorNode && isEquivalentPosition(domSel.anchorNode, domSel.anchorOffset, curSel.anchorNode, curSel.anchorOffset)) {
      view.input.mouseDown.delayedSelectionSync = true;
      view.domObserver.setCurSelection();
      return;
    }
  }
  view.domObserver.disconnectSelection();
  if (view.cursorWrapper) {
    selectCursorWrapper(view);
  } else {
    let { anchor, head } = sel, resetEditableFrom, resetEditableTo;
    if (brokenSelectBetweenUneditable && !(sel instanceof TextSelection)) {
      if (!sel.$from.parent.inlineContent)
        resetEditableFrom = temporarilyEditableNear(view, sel.from);
      if (!sel.empty && !sel.$from.parent.inlineContent)
        resetEditableTo = temporarilyEditableNear(view, sel.to);
    }
    view.docView.setSelection(anchor, head, view, force);
    if (brokenSelectBetweenUneditable) {
      if (resetEditableFrom)
        resetEditable(resetEditableFrom);
      if (resetEditableTo)
        resetEditable(resetEditableTo);
    }
    if (sel.visible) {
      view.dom.classList.remove("ProseMirror-hideselection");
    } else {
      view.dom.classList.add("ProseMirror-hideselection");
      if ("onselectionchange" in document)
        removeClassOnSelectionChange(view);
    }
  }
  view.domObserver.setCurSelection();
  view.domObserver.connectSelection();
}
var brokenSelectBetweenUneditable = safari || chrome && chrome_version < 63;
function temporarilyEditableNear(view, pos) {
  let { node, offset: offset2 } = view.docView.domFromPos(pos, 0);
  let after = offset2 < node.childNodes.length ? node.childNodes[offset2] : null;
  let before = offset2 ? node.childNodes[offset2 - 1] : null;
  if (safari && after && after.contentEditable == "false")
    return setEditable(after);
  if ((!after || after.contentEditable == "false") && (!before || before.contentEditable == "false")) {
    if (after)
      return setEditable(after);
    else if (before)
      return setEditable(before);
  }
}
function setEditable(element) {
  element.contentEditable = "true";
  if (safari && element.draggable) {
    element.draggable = false;
    element.wasDraggable = true;
  }
  return element;
}
function resetEditable(element) {
  element.contentEditable = "false";
  if (element.wasDraggable) {
    element.draggable = true;
    element.wasDraggable = null;
  }
}
function removeClassOnSelectionChange(view) {
  let doc3 = view.dom.ownerDocument;
  doc3.removeEventListener("selectionchange", view.input.hideSelectionGuard);
  let domSel = view.domSelectionRange();
  let node = domSel.anchorNode, offset2 = domSel.anchorOffset;
  doc3.addEventListener("selectionchange", view.input.hideSelectionGuard = () => {
    if (domSel.anchorNode != node || domSel.anchorOffset != offset2) {
      doc3.removeEventListener("selectionchange", view.input.hideSelectionGuard);
      setTimeout(() => {
        if (!editorOwnsSelection(view) || view.state.selection.visible)
          view.dom.classList.remove("ProseMirror-hideselection");
      }, 20);
    }
  });
}
function selectCursorWrapper(view) {
  let domSel = view.domSelection(), range = document.createRange();
  if (!domSel)
    return;
  let node = view.cursorWrapper.dom, img = node.nodeName == "IMG";
  if (img)
    range.setStart(node.parentNode, domIndex(node) + 1);
  else
    range.setStart(node, 0);
  range.collapse(true);
  domSel.removeAllRanges();
  domSel.addRange(range);
  if (!img && !view.state.selection.visible && ie && ie_version <= 11) {
    node.disabled = true;
    node.disabled = false;
  }
}
function syncNodeSelection(view, sel) {
  if (sel instanceof NodeSelection) {
    let desc = view.docView.descAt(sel.from);
    if (desc != view.lastSelectedViewDesc) {
      clearNodeSelection(view);
      if (desc)
        desc.selectNode();
      view.lastSelectedViewDesc = desc;
    }
  } else {
    clearNodeSelection(view);
  }
}
function clearNodeSelection(view) {
  if (view.lastSelectedViewDesc) {
    if (view.lastSelectedViewDesc.parent)
      view.lastSelectedViewDesc.deselectNode();
    view.lastSelectedViewDesc = void 0;
  }
}
function selectionBetween(view, $anchor, $head, bias) {
  return view.someProp("createSelectionBetween", (f) => f(view, $anchor, $head)) || TextSelection.between($anchor, $head, bias);
}
function hasFocusAndSelection(view) {
  if (view.editable && !view.hasFocus())
    return false;
  return hasSelection(view);
}
function hasSelection(view) {
  let sel = view.domSelectionRange();
  if (!sel.anchorNode)
    return false;
  try {
    return view.dom.contains(sel.anchorNode.nodeType == 3 ? sel.anchorNode.parentNode : sel.anchorNode) && (view.editable || view.dom.contains(sel.focusNode.nodeType == 3 ? sel.focusNode.parentNode : sel.focusNode));
  } catch (_) {
    return false;
  }
}
function anchorInRightPlace(view) {
  let anchorDOM = view.docView.domFromPos(view.state.selection.anchor, 0);
  let domSel = view.domSelectionRange();
  return isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset);
}
function moveSelectionBlock(state, dir) {
  let { $anchor, $head } = state.selection;
  let $side = dir > 0 ? $anchor.max($head) : $anchor.min($head);
  let $start = !$side.parent.inlineContent ? $side : $side.depth ? state.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null;
  return $start && Selection.findFrom($start, dir);
}
function apply(view, sel) {
  view.dispatch(view.state.tr.setSelection(sel).scrollIntoView());
  return true;
}
function selectHorizontally(view, dir, mods) {
  let sel = view.state.selection;
  if (sel instanceof TextSelection) {
    if (mods.indexOf("s") > -1) {
      let { $head } = sel, node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter;
      if (!node || node.isText || !node.isLeaf)
        return false;
      let $newHead = view.state.doc.resolve($head.pos + node.nodeSize * (dir < 0 ? -1 : 1));
      return apply(view, new TextSelection(sel.$anchor, $newHead));
    } else if (!sel.empty) {
      return false;
    } else if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) {
      let next = moveSelectionBlock(view.state, dir);
      if (next && next instanceof NodeSelection)
        return apply(view, next);
      return false;
    } else if (!(mac && mods.indexOf("m") > -1)) {
      let $head = sel.$head, node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter, desc;
      if (!node || node.isText)
        return false;
      let nodePos = dir < 0 ? $head.pos - node.nodeSize : $head.pos;
      if (!(node.isAtom || (desc = view.docView.descAt(nodePos)) && !desc.contentDOM))
        return false;
      if (NodeSelection.isSelectable(node)) {
        return apply(view, new NodeSelection(dir < 0 ? view.state.doc.resolve($head.pos - node.nodeSize) : $head));
      } else if (webkit) {
        return apply(view, new TextSelection(view.state.doc.resolve(dir < 0 ? nodePos : nodePos + node.nodeSize)));
      } else {
        return false;
      }
    }
  } else if (sel instanceof NodeSelection && sel.node.isInline) {
    return apply(view, new TextSelection(dir > 0 ? sel.$to : sel.$from));
  } else {
    let next = moveSelectionBlock(view.state, dir);
    if (next)
      return apply(view, next);
    return false;
  }
}
function nodeLen(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function isIgnorable(dom, dir) {
  let desc = dom.pmViewDesc;
  return desc && desc.size == 0 && (dir < 0 || dom.nextSibling || dom.nodeName != "BR");
}
function skipIgnoredNodes(view, dir) {
  return dir < 0 ? skipIgnoredNodesBefore(view) : skipIgnoredNodesAfter(view);
}
function skipIgnoredNodesBefore(view) {
  let sel = view.domSelectionRange();
  let node = sel.focusNode, offset2 = sel.focusOffset;
  if (!node)
    return;
  let moveNode, moveOffset, force = false;
  if (gecko && node.nodeType == 1 && offset2 < nodeLen(node) && isIgnorable(node.childNodes[offset2], -1))
    force = true;
  for (; ; ) {
    if (offset2 > 0) {
      if (node.nodeType != 1) {
        break;
      } else {
        let before = node.childNodes[offset2 - 1];
        if (isIgnorable(before, -1)) {
          moveNode = node;
          moveOffset = --offset2;
        } else if (before.nodeType == 3) {
          node = before;
          offset2 = node.nodeValue.length;
        } else
          break;
      }
    } else if (isBlockNode(node)) {
      break;
    } else {
      let prev = node.previousSibling;
      while (prev && isIgnorable(prev, -1)) {
        moveNode = node.parentNode;
        moveOffset = domIndex(prev);
        prev = prev.previousSibling;
      }
      if (!prev) {
        node = node.parentNode;
        if (node == view.dom)
          break;
        offset2 = 0;
      } else {
        node = prev;
        offset2 = nodeLen(node);
      }
    }
  }
  if (force)
    setSelFocus(view, node, offset2);
  else if (moveNode)
    setSelFocus(view, moveNode, moveOffset);
}
function skipIgnoredNodesAfter(view) {
  let sel = view.domSelectionRange();
  let node = sel.focusNode, offset2 = sel.focusOffset;
  if (!node)
    return;
  let len = nodeLen(node);
  let moveNode, moveOffset;
  for (; ; ) {
    if (offset2 < len) {
      if (node.nodeType != 1)
        break;
      let after = node.childNodes[offset2];
      if (isIgnorable(after, 1)) {
        moveNode = node;
        moveOffset = ++offset2;
      } else
        break;
    } else if (isBlockNode(node)) {
      break;
    } else {
      let next = node.nextSibling;
      while (next && isIgnorable(next, 1)) {
        moveNode = next.parentNode;
        moveOffset = domIndex(next) + 1;
        next = next.nextSibling;
      }
      if (!next) {
        node = node.parentNode;
        if (node == view.dom)
          break;
        offset2 = len = 0;
      } else {
        node = next;
        offset2 = 0;
        len = nodeLen(node);
      }
    }
  }
  if (moveNode)
    setSelFocus(view, moveNode, moveOffset);
}
function isBlockNode(dom) {
  let desc = dom.pmViewDesc;
  return desc && desc.node && desc.node.isBlock;
}
function textNodeAfter(node, offset2) {
  while (node && offset2 == node.childNodes.length && !hasBlockDesc(node)) {
    offset2 = domIndex(node) + 1;
    node = node.parentNode;
  }
  while (node && offset2 < node.childNodes.length) {
    let next = node.childNodes[offset2];
    if (next.nodeType == 3)
      return next;
    if (next.nodeType == 1 && next.contentEditable == "false")
      break;
    node = next;
    offset2 = 0;
  }
}
function textNodeBefore(node, offset2) {
  while (node && !offset2 && !hasBlockDesc(node)) {
    offset2 = domIndex(node);
    node = node.parentNode;
  }
  while (node && offset2) {
    let next = node.childNodes[offset2 - 1];
    if (next.nodeType == 3)
      return next;
    if (next.nodeType == 1 && next.contentEditable == "false")
      break;
    node = next;
    offset2 = node.childNodes.length;
  }
}
function setSelFocus(view, node, offset2) {
  if (node.nodeType != 3) {
    let before, after;
    if (after = textNodeAfter(node, offset2)) {
      node = after;
      offset2 = 0;
    } else if (before = textNodeBefore(node, offset2)) {
      node = before;
      offset2 = before.nodeValue.length;
    }
  }
  let sel = view.domSelection();
  if (!sel)
    return;
  if (selectionCollapsed(sel)) {
    let range = document.createRange();
    range.setEnd(node, offset2);
    range.setStart(node, offset2);
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (sel.extend) {
    sel.extend(node, offset2);
  }
  view.domObserver.setCurSelection();
  let { state } = view;
  setTimeout(() => {
    if (view.state == state)
      selectionToDOM(view);
  }, 50);
}
function findDirection(view, pos) {
  let $pos = view.state.doc.resolve(pos);
  if (!(chrome || windows) && $pos.parent.inlineContent) {
    let coords = view.coordsAtPos(pos);
    if (pos > $pos.start()) {
      let before = view.coordsAtPos(pos - 1);
      let mid = (before.top + before.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(before.left - coords.left) > 1)
        return before.left < coords.left ? "ltr" : "rtl";
    }
    if (pos < $pos.end()) {
      let after = view.coordsAtPos(pos + 1);
      let mid = (after.top + after.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(after.left - coords.left) > 1)
        return after.left > coords.left ? "ltr" : "rtl";
    }
  }
  let computed2 = getComputedStyle(view.dom).direction;
  return computed2 == "rtl" ? "rtl" : "ltr";
}
function selectVertically(view, dir, mods) {
  let sel = view.state.selection;
  if (sel instanceof TextSelection && !sel.empty || mods.indexOf("s") > -1)
    return false;
  if (mac && mods.indexOf("m") > -1)
    return false;
  let { $from, $to } = sel;
  if (!$from.parent.inlineContent || view.endOfTextblock(dir < 0 ? "up" : "down")) {
    let next = moveSelectionBlock(view.state, dir);
    if (next && next instanceof NodeSelection)
      return apply(view, next);
  }
  if (!$from.parent.inlineContent) {
    let side = dir < 0 ? $from : $to;
    let beyond = sel instanceof AllSelection ? Selection.near(side, dir) : Selection.findFrom(side, dir);
    return beyond ? apply(view, beyond) : false;
  }
  return false;
}
function stopNativeHorizontalDelete(view, dir) {
  if (!(view.state.selection instanceof TextSelection))
    return true;
  let { $head, $anchor, empty: empty3 } = view.state.selection;
  if (!$head.sameParent($anchor))
    return true;
  if (!empty3)
    return false;
  if (view.endOfTextblock(dir > 0 ? "forward" : "backward"))
    return true;
  let nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
  if (nextNode && !nextNode.isText) {
    let tr = view.state.tr;
    if (dir < 0)
      tr.delete($head.pos - nextNode.nodeSize, $head.pos);
    else
      tr.delete($head.pos, $head.pos + nextNode.nodeSize);
    view.dispatch(tr);
    return true;
  }
  return false;
}
function switchEditable(view, node, state) {
  view.domObserver.stop();
  node.contentEditable = state;
  view.domObserver.start();
}
function safariDownArrowBug(view) {
  if (!safari || view.state.selection.$head.parentOffset > 0)
    return false;
  let { focusNode, focusOffset } = view.domSelectionRange();
  if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 && focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
    let child = focusNode.firstChild;
    switchEditable(view, child, "true");
    setTimeout(() => switchEditable(view, child, "false"), 20);
  }
  return false;
}
function getMods(event) {
  let result = "";
  if (event.ctrlKey)
    result += "c";
  if (event.metaKey)
    result += "m";
  if (event.altKey)
    result += "a";
  if (event.shiftKey)
    result += "s";
  return result;
}
function captureKeyDown(view, event) {
  let code = event.keyCode, mods = getMods(event);
  if (code == 8 || mac && code == 72 && mods == "c") {
    return stopNativeHorizontalDelete(view, -1) || skipIgnoredNodes(view, -1);
  } else if (code == 46 && !event.shiftKey || mac && code == 68 && mods == "c") {
    return stopNativeHorizontalDelete(view, 1) || skipIgnoredNodes(view, 1);
  } else if (code == 13 || code == 27) {
    return true;
  } else if (code == 37 || mac && code == 66 && mods == "c") {
    let dir = code == 37 ? findDirection(view, view.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code == 39 || mac && code == 70 && mods == "c") {
    let dir = code == 39 ? findDirection(view, view.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code == 38 || mac && code == 80 && mods == "c") {
    return selectVertically(view, -1, mods) || skipIgnoredNodes(view, -1);
  } else if (code == 40 || mac && code == 78 && mods == "c") {
    return safariDownArrowBug(view) || selectVertically(view, 1, mods) || skipIgnoredNodes(view, 1);
  } else if (mods == (mac ? "m" : "c") && (code == 66 || code == 73 || code == 89 || code == 90)) {
    return true;
  }
  return false;
}
function serializeForClipboard(view, slice) {
  view.someProp("transformCopied", (f) => {
    slice = f(slice, view);
  });
  let context = [], { content, openStart, openEnd } = slice;
  while (openStart > 1 && openEnd > 1 && content.childCount == 1 && content.firstChild.childCount == 1) {
    openStart--;
    openEnd--;
    let node = content.firstChild;
    context.push(node.type.name, node.attrs != node.type.defaultAttrs ? node.attrs : null);
    content = node.content;
  }
  let serializer = view.someProp("clipboardSerializer") || DOMSerializer.fromSchema(view.state.schema);
  let doc3 = detachedDoc(), wrap = doc3.createElement("div");
  wrap.appendChild(serializer.serializeFragment(content, { document: doc3 }));
  let firstChild = wrap.firstChild, needsWrap, wrappers = 0;
  while (firstChild && firstChild.nodeType == 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])) {
    for (let i = needsWrap.length - 1; i >= 0; i--) {
      let wrapper5 = doc3.createElement(needsWrap[i]);
      while (wrap.firstChild)
        wrapper5.appendChild(wrap.firstChild);
      wrap.appendChild(wrapper5);
      wrappers++;
    }
    firstChild = wrap.firstChild;
  }
  if (firstChild && firstChild.nodeType == 1)
    firstChild.setAttribute("data-pm-slice", `${openStart} ${openEnd}${wrappers ? ` -${wrappers}` : ""} ${JSON.stringify(context)}`);
  let text = view.someProp("clipboardTextSerializer", (f) => f(slice, view)) || slice.content.textBetween(0, slice.content.size, "\n\n");
  return { dom: wrap, text, slice };
}
function parseFromClipboard(view, text, html, plainText, $context) {
  let inCode = $context.parent.type.spec.code;
  let dom, slice;
  if (!html && !text)
    return null;
  let asText = text && (plainText || inCode || !html);
  if (asText) {
    view.someProp("transformPastedText", (f) => {
      text = f(text, inCode || plainText, view);
    });
    if (inCode)
      return text ? new Slice(Fragment.from(view.state.schema.text(text.replace(/\r\n?/g, "\n"))), 0, 0) : Slice.empty;
    let parsed = view.someProp("clipboardTextParser", (f) => f(text, $context, plainText, view));
    if (parsed) {
      slice = parsed;
    } else {
      let marks = $context.marks();
      let { schema } = view.state, serializer = DOMSerializer.fromSchema(schema);
      dom = document.createElement("div");
      text.split(/(?:\r\n?|\n)+/).forEach((block) => {
        let p = dom.appendChild(document.createElement("p"));
        if (block)
          p.appendChild(serializer.serializeNode(schema.text(block, marks)));
      });
    }
  } else {
    view.someProp("transformPastedHTML", (f) => {
      html = f(html, view);
    });
    dom = readHTML(html);
    if (webkit)
      restoreReplacedSpaces(dom);
  }
  let contextNode = dom && dom.querySelector("[data-pm-slice]");
  let sliceData = contextNode && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(contextNode.getAttribute("data-pm-slice") || "");
  if (sliceData && sliceData[3])
    for (let i = +sliceData[3]; i > 0; i--) {
      let child = dom.firstChild;
      while (child && child.nodeType != 1)
        child = child.nextSibling;
      if (!child)
        break;
      dom = child;
    }
  if (!slice) {
    let parser = view.someProp("clipboardParser") || view.someProp("domParser") || DOMParser.fromSchema(view.state.schema);
    slice = parser.parseSlice(dom, {
      preserveWhitespace: !!(asText || sliceData),
      context: $context,
      ruleFromNode(dom2) {
        if (dom2.nodeName == "BR" && !dom2.nextSibling && dom2.parentNode && !inlineParents.test(dom2.parentNode.nodeName))
          return { ignore: true };
        return null;
      }
    });
  }
  if (sliceData) {
    slice = addContext(closeSlice(slice, +sliceData[1], +sliceData[2]), sliceData[4]);
  } else {
    slice = Slice.maxOpen(normalizeSiblings(slice.content, $context), true);
    if (slice.openStart || slice.openEnd) {
      let openStart = 0, openEnd = 0;
      for (let node = slice.content.firstChild; openStart < slice.openStart && !node.type.spec.isolating; openStart++, node = node.firstChild) {
      }
      for (let node = slice.content.lastChild; openEnd < slice.openEnd && !node.type.spec.isolating; openEnd++, node = node.lastChild) {
      }
      slice = closeSlice(slice, openStart, openEnd);
    }
  }
  view.someProp("transformPasted", (f) => {
    slice = f(slice, view);
  });
  return slice;
}
var inlineParents = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function normalizeSiblings(fragment, $context) {
  if (fragment.childCount < 2)
    return fragment;
  for (let d = $context.depth; d >= 0; d--) {
    let parent = $context.node(d);
    let match = parent.contentMatchAt($context.index(d));
    let lastWrap, result = [];
    fragment.forEach((node) => {
      if (!result)
        return;
      let wrap = match.findWrapping(node.type), inLast;
      if (!wrap)
        return result = null;
      if (inLast = result.length && lastWrap.length && addToSibling(wrap, lastWrap, node, result[result.length - 1], 0)) {
        result[result.length - 1] = inLast;
      } else {
        if (result.length)
          result[result.length - 1] = closeRight(result[result.length - 1], lastWrap.length);
        let wrapped = withWrappers(node, wrap);
        result.push(wrapped);
        match = match.matchType(wrapped.type);
        lastWrap = wrap;
      }
    });
    if (result)
      return Fragment.from(result);
  }
  return fragment;
}
function withWrappers(node, wrap, from = 0) {
  for (let i = wrap.length - 1; i >= from; i--)
    node = wrap[i].create(null, Fragment.from(node));
  return node;
}
function addToSibling(wrap, lastWrap, node, sibling, depth) {
  if (depth < wrap.length && depth < lastWrap.length && wrap[depth] == lastWrap[depth]) {
    let inner = addToSibling(wrap, lastWrap, node, sibling.lastChild, depth + 1);
    if (inner)
      return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner));
    let match = sibling.contentMatchAt(sibling.childCount);
    if (match.matchType(depth == wrap.length - 1 ? node.type : wrap[depth + 1]))
      return sibling.copy(sibling.content.append(Fragment.from(withWrappers(node, wrap, depth + 1))));
  }
}
function closeRight(node, depth) {
  if (depth == 0)
    return node;
  let fragment = node.content.replaceChild(node.childCount - 1, closeRight(node.lastChild, depth - 1));
  let fill = node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true);
  return node.copy(fragment.append(fill));
}
function closeRange(fragment, side, from, to, depth, openEnd) {
  let node = side < 0 ? fragment.firstChild : fragment.lastChild, inner = node.content;
  if (fragment.childCount > 1)
    openEnd = 0;
  if (depth < to - 1)
    inner = closeRange(inner, side, from, to, depth + 1, openEnd);
  if (depth >= from)
    inner = side < 0 ? node.contentMatchAt(0).fillBefore(inner, openEnd <= depth).append(inner) : inner.append(node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true));
  return fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node.copy(inner));
}
function closeSlice(slice, openStart, openEnd) {
  if (openStart < slice.openStart)
    slice = new Slice(closeRange(slice.content, -1, openStart, slice.openStart, 0, slice.openEnd), openStart, slice.openEnd);
  if (openEnd < slice.openEnd)
    slice = new Slice(closeRange(slice.content, 1, openEnd, slice.openEnd, 0, 0), slice.openStart, openEnd);
  return slice;
}
var wrapMap = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
var _detachedDoc = null;
function detachedDoc() {
  return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
}
var _policy = null;
function maybeWrapTrusted(html) {
  let trustedTypes = window.trustedTypes;
  if (!trustedTypes)
    return html;
  if (!_policy)
    _policy = trustedTypes.defaultPolicy || trustedTypes.createPolicy("ProseMirrorClipboard", { createHTML: (s) => s });
  return _policy.createHTML(html);
}
function readHTML(html) {
  let metas = /^(\s*<meta [^>]*>)*/.exec(html);
  if (metas)
    html = html.slice(metas[0].length);
  let elt = detachedDoc().createElement("div");
  let firstTag = /<([a-z][^>\s]+)/i.exec(html), wrap;
  if (wrap = firstTag && wrapMap[firstTag[1].toLowerCase()])
    html = wrap.map((n) => "<" + n + ">").join("") + html + wrap.map((n) => "</" + n + ">").reverse().join("");
  elt.innerHTML = maybeWrapTrusted(html);
  if (wrap)
    for (let i = 0; i < wrap.length; i++)
      elt = elt.querySelector(wrap[i]) || elt;
  return elt;
}
function restoreReplacedSpaces(dom) {
  let nodes = dom.querySelectorAll(chrome ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node.childNodes.length == 1 && node.textContent == " " && node.parentNode)
      node.parentNode.replaceChild(dom.ownerDocument.createTextNode(" "), node);
  }
}
function addContext(slice, context) {
  if (!slice.size)
    return slice;
  let schema = slice.content.firstChild.type.schema, array;
  try {
    array = JSON.parse(context);
  } catch (e) {
    return slice;
  }
  let { content, openStart, openEnd } = slice;
  for (let i = array.length - 2; i >= 0; i -= 2) {
    let type = schema.nodes[array[i]];
    if (!type || type.hasRequiredAttrs())
      break;
    content = Fragment.from(type.create(array[i + 1], content));
    openStart++;
    openEnd++;
  }
  return new Slice(content, openStart, openEnd);
}
var handlers = {};
var editHandlers = {};
var passiveHandlers = { touchstart: true, touchmove: true };
var InputState = class {
  constructor() {
    this.shiftKey = false;
    this.mouseDown = null;
    this.lastKeyCode = null;
    this.lastKeyCodeTime = 0;
    this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 };
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastIOSEnter = 0;
    this.lastIOSEnterFallbackTimeout = -1;
    this.lastFocus = 0;
    this.lastTouch = 0;
    this.lastChromeDelete = 0;
    this.composing = false;
    this.compositionNode = null;
    this.composingTimeout = -1;
    this.compositionNodes = [];
    this.compositionEndedAt = -2e8;
    this.compositionID = 1;
    this.compositionPendingChanges = 0;
    this.domChangeCount = 0;
    this.eventHandlers = /* @__PURE__ */ Object.create(null);
    this.hideSelectionGuard = null;
  }
};
function initInput(view) {
  for (let event in handlers) {
    let handler = handlers[event];
    view.dom.addEventListener(event, view.input.eventHandlers[event] = (event2) => {
      if (eventBelongsToView(view, event2) && !runCustomHandler(view, event2) && (view.editable || !(event2.type in editHandlers)))
        handler(view, event2);
    }, passiveHandlers[event] ? { passive: true } : void 0);
  }
  if (safari)
    view.dom.addEventListener("input", () => null);
  ensureListeners(view);
}
function setSelectionOrigin(view, origin) {
  view.input.lastSelectionOrigin = origin;
  view.input.lastSelectionTime = Date.now();
}
function destroyInput(view) {
  view.domObserver.stop();
  for (let type in view.input.eventHandlers)
    view.dom.removeEventListener(type, view.input.eventHandlers[type]);
  clearTimeout(view.input.composingTimeout);
  clearTimeout(view.input.lastIOSEnterFallbackTimeout);
}
function ensureListeners(view) {
  view.someProp("handleDOMEvents", (currentHandlers) => {
    for (let type in currentHandlers)
      if (!view.input.eventHandlers[type])
        view.dom.addEventListener(type, view.input.eventHandlers[type] = (event) => runCustomHandler(view, event));
  });
}
function runCustomHandler(view, event) {
  return view.someProp("handleDOMEvents", (handlers3) => {
    let handler = handlers3[event.type];
    return handler ? handler(view, event) || event.defaultPrevented : false;
  });
}
function eventBelongsToView(view, event) {
  if (!event.bubbles)
    return true;
  if (event.defaultPrevented)
    return false;
  for (let node = event.target; node != view.dom; node = node.parentNode)
    if (!node || node.nodeType == 11 || node.pmViewDesc && node.pmViewDesc.stopEvent(event))
      return false;
  return true;
}
function dispatchEvent(view, event) {
  if (!runCustomHandler(view, event) && handlers[event.type] && (view.editable || !(event.type in editHandlers)))
    handlers[event.type](view, event);
}
editHandlers.keydown = (view, _event) => {
  let event = _event;
  view.input.shiftKey = event.keyCode == 16 || event.shiftKey;
  if (inOrNearComposition(view, event))
    return;
  view.input.lastKeyCode = event.keyCode;
  view.input.lastKeyCodeTime = Date.now();
  if (android && chrome && event.keyCode == 13)
    return;
  if (event.keyCode != 229)
    view.domObserver.forceFlush();
  if (ios && event.keyCode == 13 && !event.ctrlKey && !event.altKey && !event.metaKey) {
    let now = Date.now();
    view.input.lastIOSEnter = now;
    view.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
      if (view.input.lastIOSEnter == now) {
        view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter")));
        view.input.lastIOSEnter = 0;
      }
    }, 200);
  } else if (view.someProp("handleKeyDown", (f) => f(view, event)) || captureKeyDown(view, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "key");
  }
};
editHandlers.keyup = (view, event) => {
  if (event.keyCode == 16)
    view.input.shiftKey = false;
};
editHandlers.keypress = (view, _event) => {
  let event = _event;
  if (inOrNearComposition(view, event) || !event.charCode || event.ctrlKey && !event.altKey || mac && event.metaKey)
    return;
  if (view.someProp("handleKeyPress", (f) => f(view, event))) {
    event.preventDefault();
    return;
  }
  let sel = view.state.selection;
  if (!(sel instanceof TextSelection) || !sel.$from.sameParent(sel.$to)) {
    let text = String.fromCharCode(event.charCode);
    let deflt = () => view.state.tr.insertText(text).scrollIntoView();
    if (!/[\r\n]/.test(text) && !view.someProp("handleTextInput", (f) => f(view, sel.$from.pos, sel.$to.pos, text, deflt)))
      view.dispatch(deflt());
    event.preventDefault();
  }
};
function eventCoords(event) {
  return { left: event.clientX, top: event.clientY };
}
function isNear(event, click) {
  let dx = click.x - event.clientX, dy = click.y - event.clientY;
  return dx * dx + dy * dy < 100;
}
function runHandlerOnContext(view, propName, pos, inside, event) {
  if (inside == -1)
    return false;
  let $pos = view.state.doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    if (view.someProp(propName, (f) => i > $pos.depth ? f(view, pos, $pos.nodeAfter, $pos.before(i), event, true) : f(view, pos, $pos.node(i), $pos.before(i), event, false)))
      return true;
  }
  return false;
}
function updateSelection(view, selection, origin) {
  if (!view.focused)
    view.focus();
  if (view.state.selection.eq(selection))
    return;
  let tr = view.state.tr.setSelection(selection);
  if (origin == "pointer")
    tr.setMeta("pointer", true);
  view.dispatch(tr);
}
function selectClickedLeaf(view, inside) {
  if (inside == -1)
    return false;
  let $pos = view.state.doc.resolve(inside), node = $pos.nodeAfter;
  if (node && node.isAtom && NodeSelection.isSelectable(node)) {
    updateSelection(view, new NodeSelection($pos), "pointer");
    return true;
  }
  return false;
}
function selectClickedNode(view, inside) {
  if (inside == -1)
    return false;
  let sel = view.state.selection, selectedNode, selectAt;
  if (sel instanceof NodeSelection)
    selectedNode = sel.node;
  let $pos = view.state.doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    if (NodeSelection.isSelectable(node)) {
      if (selectedNode && sel.$from.depth > 0 && i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos)
        selectAt = $pos.before(sel.$from.depth);
      else
        selectAt = $pos.before(i);
      break;
    }
  }
  if (selectAt != null) {
    updateSelection(view, NodeSelection.create(view.state.doc, selectAt), "pointer");
    return true;
  } else {
    return false;
  }
}
function handleSingleClick(view, pos, inside, event, selectNode) {
  return runHandlerOnContext(view, "handleClickOn", pos, inside, event) || view.someProp("handleClick", (f) => f(view, pos, event)) || (selectNode ? selectClickedNode(view, inside) : selectClickedLeaf(view, inside));
}
function handleDoubleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleDoubleClickOn", pos, inside, event) || view.someProp("handleDoubleClick", (f) => f(view, pos, event));
}
function handleTripleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleTripleClickOn", pos, inside, event) || view.someProp("handleTripleClick", (f) => f(view, pos, event)) || defaultTripleClick(view, inside, event);
}
function defaultTripleClick(view, inside, event) {
  if (event.button != 0)
    return false;
  let doc3 = view.state.doc;
  if (inside == -1) {
    if (doc3.inlineContent) {
      updateSelection(view, TextSelection.create(doc3, 0, doc3.content.size), "pointer");
      return true;
    }
    return false;
  }
  let $pos = doc3.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    let nodePos = $pos.before(i);
    if (node.inlineContent)
      updateSelection(view, TextSelection.create(doc3, nodePos + 1, nodePos + 1 + node.content.size), "pointer");
    else if (NodeSelection.isSelectable(node))
      updateSelection(view, NodeSelection.create(doc3, nodePos), "pointer");
    else
      continue;
    return true;
  }
}
function forceDOMFlush(view) {
  return endComposition(view);
}
var selectNodeModifier = mac ? "metaKey" : "ctrlKey";
handlers.mousedown = (view, _event) => {
  let event = _event;
  view.input.shiftKey = event.shiftKey;
  let flushed = forceDOMFlush(view);
  let now = Date.now(), type = "singleClick";
  if (now - view.input.lastClick.time < 500 && isNear(event, view.input.lastClick) && !event[selectNodeModifier] && view.input.lastClick.button == event.button) {
    if (view.input.lastClick.type == "singleClick")
      type = "doubleClick";
    else if (view.input.lastClick.type == "doubleClick")
      type = "tripleClick";
  }
  view.input.lastClick = { time: now, x: event.clientX, y: event.clientY, type, button: event.button };
  let pos = view.posAtCoords(eventCoords(event));
  if (!pos)
    return;
  if (type == "singleClick") {
    if (view.input.mouseDown)
      view.input.mouseDown.done();
    view.input.mouseDown = new MouseDown(view, pos, event, !!flushed);
  } else if ((type == "doubleClick" ? handleDoubleClick : handleTripleClick)(view, pos.pos, pos.inside, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "pointer");
  }
};
var MouseDown = class {
  constructor(view, pos, event, flushed) {
    this.view = view;
    this.pos = pos;
    this.event = event;
    this.flushed = flushed;
    this.delayedSelectionSync = false;
    this.mightDrag = null;
    this.startDoc = view.state.doc;
    this.selectNode = !!event[selectNodeModifier];
    this.allowDefault = event.shiftKey;
    let targetNode, targetPos;
    if (pos.inside > -1) {
      targetNode = view.state.doc.nodeAt(pos.inside);
      targetPos = pos.inside;
    } else {
      let $pos = view.state.doc.resolve(pos.pos);
      targetNode = $pos.parent;
      targetPos = $pos.depth ? $pos.before() : 0;
    }
    const target = flushed ? null : event.target;
    const targetDesc = target ? view.docView.nearestDesc(target, true) : null;
    this.target = targetDesc && targetDesc.dom.nodeType == 1 ? targetDesc.dom : null;
    let { selection } = view.state;
    if (event.button == 0 && targetNode.type.spec.draggable && targetNode.type.spec.selectable !== false || selection instanceof NodeSelection && selection.from <= targetPos && selection.to > targetPos)
      this.mightDrag = {
        node: targetNode,
        pos: targetPos,
        addAttr: !!(this.target && !this.target.draggable),
        setUneditable: !!(this.target && gecko && !this.target.hasAttribute("contentEditable"))
      };
    if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr)
        this.target.draggable = true;
      if (this.mightDrag.setUneditable)
        setTimeout(() => {
          if (this.view.input.mouseDown == this)
            this.target.setAttribute("contentEditable", "false");
        }, 20);
      this.view.domObserver.start();
    }
    view.root.addEventListener("mouseup", this.up = this.up.bind(this));
    view.root.addEventListener("mousemove", this.move = this.move.bind(this));
    setSelectionOrigin(view, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up);
    this.view.root.removeEventListener("mousemove", this.move);
    if (this.mightDrag && this.target) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr)
        this.target.removeAttribute("draggable");
      if (this.mightDrag.setUneditable)
        this.target.removeAttribute("contentEditable");
      this.view.domObserver.start();
    }
    if (this.delayedSelectionSync)
      setTimeout(() => selectionToDOM(this.view));
    this.view.input.mouseDown = null;
  }
  up(event) {
    this.done();
    if (!this.view.dom.contains(event.target))
      return;
    let pos = this.pos;
    if (this.view.state.doc != this.startDoc)
      pos = this.view.posAtCoords(eventCoords(event));
    this.updateAllowDefault(event);
    if (this.allowDefault || !pos) {
      setSelectionOrigin(this.view, "pointer");
    } else if (handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode)) {
      event.preventDefault();
    } else if (event.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    safari && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    chrome && !this.view.state.selection.visible && Math.min(Math.abs(pos.pos - this.view.state.selection.from), Math.abs(pos.pos - this.view.state.selection.to)) <= 2)) {
      updateSelection(this.view, Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer");
      event.preventDefault();
    } else {
      setSelectionOrigin(this.view, "pointer");
    }
  }
  move(event) {
    this.updateAllowDefault(event);
    setSelectionOrigin(this.view, "pointer");
    if (event.buttons == 0)
      this.done();
  }
  updateAllowDefault(event) {
    if (!this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 || Math.abs(this.event.y - event.clientY) > 4))
      this.allowDefault = true;
  }
};
handlers.touchstart = (view) => {
  view.input.lastTouch = Date.now();
  forceDOMFlush(view);
  setSelectionOrigin(view, "pointer");
};
handlers.touchmove = (view) => {
  view.input.lastTouch = Date.now();
  setSelectionOrigin(view, "pointer");
};
handlers.contextmenu = (view) => forceDOMFlush(view);
function inOrNearComposition(view, event) {
  if (view.composing)
    return true;
  if (safari && Math.abs(event.timeStamp - view.input.compositionEndedAt) < 500) {
    view.input.compositionEndedAt = -2e8;
    return true;
  }
  return false;
}
var timeoutComposition = android ? 5e3 : -1;
editHandlers.compositionstart = editHandlers.compositionupdate = (view) => {
  if (!view.composing) {
    view.domObserver.flush();
    let { state } = view, $pos = state.selection.$to;
    if (state.selection instanceof TextSelection && (state.storedMarks || !$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some((m) => m.type.spec.inclusive === false))) {
      view.markCursor = view.state.storedMarks || $pos.marks();
      endComposition(view, true);
      view.markCursor = null;
    } else {
      endComposition(view, !state.selection.empty);
      if (gecko && state.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) {
        let sel = view.domSelectionRange();
        for (let node = sel.focusNode, offset2 = sel.focusOffset; node && node.nodeType == 1 && offset2 != 0; ) {
          let before = offset2 < 0 ? node.lastChild : node.childNodes[offset2 - 1];
          if (!before)
            break;
          if (before.nodeType == 3) {
            let sel2 = view.domSelection();
            if (sel2)
              sel2.collapse(before, before.nodeValue.length);
            break;
          } else {
            node = before;
            offset2 = -1;
          }
        }
      }
    }
    view.input.composing = true;
  }
  scheduleComposeEnd(view, timeoutComposition);
};
editHandlers.compositionend = (view, event) => {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = event.timeStamp;
    view.input.compositionPendingChanges = view.domObserver.pendingRecords().length ? view.input.compositionID : 0;
    view.input.compositionNode = null;
    if (view.input.compositionPendingChanges)
      Promise.resolve().then(() => view.domObserver.flush());
    view.input.compositionID++;
    scheduleComposeEnd(view, 20);
  }
};
function scheduleComposeEnd(view, delay) {
  clearTimeout(view.input.composingTimeout);
  if (delay > -1)
    view.input.composingTimeout = setTimeout(() => endComposition(view), delay);
}
function clearComposition(view) {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = timestampFromCustomEvent();
  }
  while (view.input.compositionNodes.length > 0)
    view.input.compositionNodes.pop().markParentsDirty();
}
function findCompositionNode(view) {
  let sel = view.domSelectionRange();
  if (!sel.focusNode)
    return null;
  let textBefore = textNodeBefore$1(sel.focusNode, sel.focusOffset);
  let textAfter = textNodeAfter$1(sel.focusNode, sel.focusOffset);
  if (textBefore && textAfter && textBefore != textAfter) {
    let descAfter = textAfter.pmViewDesc, lastChanged = view.domObserver.lastChangedTextNode;
    if (textBefore == lastChanged || textAfter == lastChanged)
      return lastChanged;
    if (!descAfter || !descAfter.isText(textAfter.nodeValue)) {
      return textAfter;
    } else if (view.input.compositionNode == textAfter) {
      let descBefore = textBefore.pmViewDesc;
      if (!(!descBefore || !descBefore.isText(textBefore.nodeValue)))
        return textAfter;
    }
  }
  return textBefore || textAfter;
}
function timestampFromCustomEvent() {
  let event = document.createEvent("Event");
  event.initEvent("event", true, true);
  return event.timeStamp;
}
function endComposition(view, restarting = false) {
  if (android && view.domObserver.flushingSoon >= 0)
    return;
  view.domObserver.forceFlush();
  clearComposition(view);
  if (restarting || view.docView && view.docView.dirty) {
    let sel = selectionFromDOM(view), cur = view.state.selection;
    if (sel && !sel.eq(cur))
      view.dispatch(view.state.tr.setSelection(sel));
    else if ((view.markCursor || restarting) && !cur.$from.node(cur.$from.sharedDepth(cur.to)).inlineContent)
      view.dispatch(view.state.tr.deleteSelection());
    else
      view.updateState(view.state);
    return true;
  }
  return false;
}
function captureCopy(view, dom) {
  if (!view.dom.parentNode)
    return;
  let wrap = view.dom.parentNode.appendChild(document.createElement("div"));
  wrap.appendChild(dom);
  wrap.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let sel = getSelection(), range = document.createRange();
  range.selectNodeContents(dom);
  view.dom.blur();
  sel.removeAllRanges();
  sel.addRange(range);
  setTimeout(() => {
    if (wrap.parentNode)
      wrap.parentNode.removeChild(wrap);
    view.focus();
  }, 50);
}
var brokenClipboardAPI = ie && ie_version < 15 || ios && webkit_version < 604;
handlers.copy = editHandlers.cut = (view, _event) => {
  let event = _event;
  let sel = view.state.selection, cut2 = event.type == "cut";
  if (sel.empty)
    return;
  let data = brokenClipboardAPI ? null : event.clipboardData;
  let slice = sel.content(), { dom, text } = serializeForClipboard(view, slice);
  if (data) {
    event.preventDefault();
    data.clearData();
    data.setData("text/html", dom.innerHTML);
    data.setData("text/plain", text);
  } else {
    captureCopy(view, dom);
  }
  if (cut2)
    view.dispatch(view.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function sliceSingleNode(slice) {
  return slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1 ? slice.content.firstChild : null;
}
function capturePaste(view, event) {
  if (!view.dom.parentNode)
    return;
  let plainText = view.input.shiftKey || view.state.selection.$from.parent.type.spec.code;
  let target = view.dom.parentNode.appendChild(document.createElement(plainText ? "textarea" : "div"));
  if (!plainText)
    target.contentEditable = "true";
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.focus();
  let plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  setTimeout(() => {
    view.focus();
    if (target.parentNode)
      target.parentNode.removeChild(target);
    if (plainText)
      doPaste(view, target.value, null, plain, event);
    else
      doPaste(view, target.textContent, target.innerHTML, plain, event);
  }, 50);
}
function doPaste(view, text, html, preferPlain, event) {
  let slice = parseFromClipboard(view, text, html, preferPlain, view.state.selection.$from);
  if (view.someProp("handlePaste", (f) => f(view, event, slice || Slice.empty)))
    return true;
  if (!slice)
    return false;
  let singleNode = sliceSingleNode(slice);
  let tr = singleNode ? view.state.tr.replaceSelectionWith(singleNode, preferPlain) : view.state.tr.replaceSelection(slice);
  view.dispatch(tr.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
  return true;
}
function getText(clipboardData) {
  let text = clipboardData.getData("text/plain") || clipboardData.getData("Text");
  if (text)
    return text;
  let uris = clipboardData.getData("text/uri-list");
  return uris ? uris.replace(/\r?\n/g, " ") : "";
}
editHandlers.paste = (view, _event) => {
  let event = _event;
  if (view.composing && !android)
    return;
  let data = brokenClipboardAPI ? null : event.clipboardData;
  let plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  if (data && doPaste(view, getText(data), data.getData("text/html"), plain, event))
    event.preventDefault();
  else
    capturePaste(view, event);
};
var Dragging = class {
  constructor(slice, move, node) {
    this.slice = slice;
    this.move = move;
    this.node = node;
  }
};
var dragCopyModifier = mac ? "altKey" : "ctrlKey";
function dragMoves(view, event) {
  let moves = view.someProp("dragCopies", (test) => !test(event));
  return moves != null ? moves : !event[dragCopyModifier];
}
handlers.dragstart = (view, _event) => {
  let event = _event;
  let mouseDown = view.input.mouseDown;
  if (mouseDown)
    mouseDown.done();
  if (!event.dataTransfer)
    return;
  let sel = view.state.selection;
  let pos = sel.empty ? null : view.posAtCoords(eventCoords(event));
  let node;
  if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof NodeSelection ? sel.to - 1 : sel.to)) ;
  else if (mouseDown && mouseDown.mightDrag) {
    node = NodeSelection.create(view.state.doc, mouseDown.mightDrag.pos);
  } else if (event.target && event.target.nodeType == 1) {
    let desc = view.docView.nearestDesc(event.target, true);
    if (desc && desc.node.type.spec.draggable && desc != view.docView)
      node = NodeSelection.create(view.state.doc, desc.posBefore);
  }
  let draggedSlice = (node || view.state.selection).content();
  let { dom, text, slice } = serializeForClipboard(view, draggedSlice);
  if (!event.dataTransfer.files.length || !chrome || chrome_version > 120)
    event.dataTransfer.clearData();
  event.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML);
  event.dataTransfer.effectAllowed = "copyMove";
  if (!brokenClipboardAPI)
    event.dataTransfer.setData("text/plain", text);
  view.dragging = new Dragging(slice, dragMoves(view, event), node);
};
handlers.dragend = (view) => {
  let dragging = view.dragging;
  window.setTimeout(() => {
    if (view.dragging == dragging)
      view.dragging = null;
  }, 50);
};
editHandlers.dragover = editHandlers.dragenter = (_, e) => e.preventDefault();
editHandlers.drop = (view, _event) => {
  let event = _event;
  let dragging = view.dragging;
  view.dragging = null;
  if (!event.dataTransfer)
    return;
  let eventPos = view.posAtCoords(eventCoords(event));
  if (!eventPos)
    return;
  let $mouse = view.state.doc.resolve(eventPos.pos);
  let slice = dragging && dragging.slice;
  if (slice) {
    view.someProp("transformPasted", (f) => {
      slice = f(slice, view);
    });
  } else {
    slice = parseFromClipboard(view, getText(event.dataTransfer), brokenClipboardAPI ? null : event.dataTransfer.getData("text/html"), false, $mouse);
  }
  let move = !!(dragging && dragMoves(view, event));
  if (view.someProp("handleDrop", (f) => f(view, event, slice || Slice.empty, move))) {
    event.preventDefault();
    return;
  }
  if (!slice)
    return;
  event.preventDefault();
  let insertPos = slice ? dropPoint(view.state.doc, $mouse.pos, slice) : $mouse.pos;
  if (insertPos == null)
    insertPos = $mouse.pos;
  let tr = view.state.tr;
  if (move) {
    let { node } = dragging;
    if (node)
      node.replace(tr);
    else
      tr.deleteSelection();
  }
  let pos = tr.mapping.map(insertPos);
  let isNode = slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1;
  let beforeInsert = tr.doc;
  if (isNode)
    tr.replaceRangeWith(pos, pos, slice.content.firstChild);
  else
    tr.replaceRange(pos, pos, slice);
  if (tr.doc.eq(beforeInsert))
    return;
  let $pos = tr.doc.resolve(pos);
  if (isNode && NodeSelection.isSelectable(slice.content.firstChild) && $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice.content.firstChild)) {
    tr.setSelection(new NodeSelection($pos));
  } else {
    let end2 = tr.mapping.map(insertPos);
    tr.mapping.maps[tr.mapping.maps.length - 1].forEach((_from, _to, _newFrom, newTo) => end2 = newTo);
    tr.setSelection(selectionBetween(view, $pos, tr.doc.resolve(end2)));
  }
  view.focus();
  view.dispatch(tr.setMeta("uiEvent", "drop"));
};
handlers.focus = (view) => {
  view.input.lastFocus = Date.now();
  if (!view.focused) {
    view.domObserver.stop();
    view.dom.classList.add("ProseMirror-focused");
    view.domObserver.start();
    view.focused = true;
    setTimeout(() => {
      if (view.docView && view.hasFocus() && !view.domObserver.currentSelection.eq(view.domSelectionRange()))
        selectionToDOM(view);
    }, 20);
  }
};
handlers.blur = (view, _event) => {
  let event = _event;
  if (view.focused) {
    view.domObserver.stop();
    view.dom.classList.remove("ProseMirror-focused");
    view.domObserver.start();
    if (event.relatedTarget && view.dom.contains(event.relatedTarget))
      view.domObserver.currentSelection.clear();
    view.focused = false;
  }
};
handlers.beforeinput = (view, _event) => {
  let event = _event;
  if (chrome && android && event.inputType == "deleteContentBackward") {
    view.domObserver.flushSoon();
    let { domChangeCount } = view.input;
    setTimeout(() => {
      if (view.input.domChangeCount != domChangeCount)
        return;
      view.dom.blur();
      view.focus();
      if (view.someProp("handleKeyDown", (f) => f(view, keyEvent(8, "Backspace"))))
        return;
      let { $cursor } = view.state.selection;
      if ($cursor && $cursor.pos > 0)
        view.dispatch(view.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView());
    }, 50);
  }
};
for (let prop in editHandlers)
  handlers[prop] = editHandlers[prop];
function compareObjs(a, b) {
  if (a == b)
    return true;
  for (let p in a)
    if (a[p] !== b[p])
      return false;
  for (let p in b)
    if (!(p in a))
      return false;
  return true;
}
var WidgetType = class _WidgetType {
  constructor(toDOM, spec) {
    this.toDOM = toDOM;
    this.spec = spec || noSpec;
    this.side = this.spec.side || 0;
  }
  map(mapping, span, offset2, oldOffset) {
    let { pos, deleted } = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1);
    return deleted ? null : new Decoration(pos - offset2, pos - offset2, this);
  }
  valid() {
    return true;
  }
  eq(other) {
    return this == other || other instanceof _WidgetType && (this.spec.key && this.spec.key == other.spec.key || this.toDOM == other.toDOM && compareObjs(this.spec, other.spec));
  }
  destroy(node) {
    if (this.spec.destroy)
      this.spec.destroy(node);
  }
};
var InlineType = class _InlineType {
  constructor(attrs, spec) {
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  map(mapping, span, offset2, oldOffset) {
    let from = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset2;
    let to = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset2;
    return from >= to ? null : new Decoration(from, to, this);
  }
  valid(_, span) {
    return span.from < span.to;
  }
  eq(other) {
    return this == other || other instanceof _InlineType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
  }
  static is(span) {
    return span.type instanceof _InlineType;
  }
  destroy() {
  }
};
var NodeType2 = class _NodeType {
  constructor(attrs, spec) {
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  map(mapping, span, offset2, oldOffset) {
    let from = mapping.mapResult(span.from + oldOffset, 1);
    if (from.deleted)
      return null;
    let to = mapping.mapResult(span.to + oldOffset, -1);
    if (to.deleted || to.pos <= from.pos)
      return null;
    return new Decoration(from.pos - offset2, to.pos - offset2, this);
  }
  valid(node, span) {
    let { index: index2, offset: offset2 } = node.content.findIndex(span.from), child;
    return offset2 == span.from && !(child = node.child(index2)).isText && offset2 + child.nodeSize == span.to;
  }
  eq(other) {
    return this == other || other instanceof _NodeType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
  }
  destroy() {
  }
};
var Decoration = class _Decoration {
  /**
  @internal
  */
  constructor(from, to, type) {
    this.from = from;
    this.to = to;
    this.type = type;
  }
  /**
  @internal
  */
  copy(from, to) {
    return new _Decoration(from, to, this.type);
  }
  /**
  @internal
  */
  eq(other, offset2 = 0) {
    return this.type.eq(other.type) && this.from + offset2 == other.from && this.to + offset2 == other.to;
  }
  /**
  @internal
  */
  map(mapping, offset2, oldOffset) {
    return this.type.map(mapping, this, offset2, oldOffset);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(pos, toDOM, spec) {
    return new _Decoration(pos, pos, new WidgetType(toDOM, spec));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(from, to, attrs, spec) {
    return new _Decoration(from, to, new InlineType(attrs, spec));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(from, to, attrs, spec) {
    return new _Decoration(from, to, new NodeType2(attrs, spec));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof InlineType;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof WidgetType;
  }
};
var none = [];
var noSpec = {};
var DecorationSet = class _DecorationSet {
  /**
  @internal
  */
  constructor(local, children) {
    this.local = local.length ? local : none;
    this.children = children.length ? children : none;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(doc3, decorations) {
    return decorations.length ? buildTree(decorations, doc3, 0, noSpec) : empty;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(start2, end2, predicate) {
    let result = [];
    this.findInner(start2 == null ? 0 : start2, end2 == null ? 1e9 : end2, result, 0, predicate);
    return result;
  }
  findInner(start2, end2, result, offset2, predicate) {
    for (let i = 0; i < this.local.length; i++) {
      let span = this.local[i];
      if (span.from <= end2 && span.to >= start2 && (!predicate || predicate(span.spec)))
        result.push(span.copy(span.from + offset2, span.to + offset2));
    }
    for (let i = 0; i < this.children.length; i += 3) {
      if (this.children[i] < end2 && this.children[i + 1] > start2) {
        let childOff = this.children[i] + 1;
        this.children[i + 2].findInner(start2 - childOff, end2 - childOff, result, offset2 + childOff, predicate);
      }
    }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(mapping, doc3, options) {
    if (this == empty || mapping.maps.length == 0)
      return this;
    return this.mapInner(mapping, doc3, 0, 0, options || noSpec);
  }
  /**
  @internal
  */
  mapInner(mapping, node, offset2, oldOffset, options) {
    let newLocal;
    for (let i = 0; i < this.local.length; i++) {
      let mapped = this.local[i].map(mapping, offset2, oldOffset);
      if (mapped && mapped.type.valid(node, mapped))
        (newLocal || (newLocal = [])).push(mapped);
      else if (options.onRemove)
        options.onRemove(this.local[i].spec);
    }
    if (this.children.length)
      return mapChildren(this.children, newLocal || [], mapping, node, offset2, oldOffset, options);
    else
      return newLocal ? new _DecorationSet(newLocal.sort(byPos), none) : empty;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(doc3, decorations) {
    if (!decorations.length)
      return this;
    if (this == empty)
      return _DecorationSet.create(doc3, decorations);
    return this.addInner(doc3, decorations, 0);
  }
  addInner(doc3, decorations, offset2) {
    let children, childIndex = 0;
    doc3.forEach((childNode, childOffset) => {
      let baseOffset = childOffset + offset2, found2;
      if (!(found2 = takeSpansForNode(decorations, childNode, baseOffset)))
        return;
      if (!children)
        children = this.children.slice();
      while (childIndex < children.length && children[childIndex] < childOffset)
        childIndex += 3;
      if (children[childIndex] == childOffset)
        children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found2, baseOffset + 1);
      else
        children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found2, childNode, baseOffset + 1, noSpec));
      childIndex += 3;
    });
    let local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset2);
    for (let i = 0; i < local.length; i++)
      if (!local[i].type.valid(doc3, local[i]))
        local.splice(i--, 1);
    return new _DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local, children || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(decorations) {
    if (decorations.length == 0 || this == empty)
      return this;
    return this.removeInner(decorations, 0);
  }
  removeInner(decorations, offset2) {
    let children = this.children, local = this.local;
    for (let i = 0; i < children.length; i += 3) {
      let found2;
      let from = children[i] + offset2, to = children[i + 1] + offset2;
      for (let j = 0, span; j < decorations.length; j++)
        if (span = decorations[j]) {
          if (span.from > from && span.to < to) {
            decorations[j] = null;
            (found2 || (found2 = [])).push(span);
          }
        }
      if (!found2)
        continue;
      if (children == this.children)
        children = this.children.slice();
      let removed = children[i + 2].removeInner(found2, from + 1);
      if (removed != empty) {
        children[i + 2] = removed;
      } else {
        children.splice(i, 3);
        i -= 3;
      }
    }
    if (local.length) {
      for (let i = 0, span; i < decorations.length; i++)
        if (span = decorations[i]) {
          for (let j = 0; j < local.length; j++)
            if (local[j].eq(span, offset2)) {
              if (local == this.local)
                local = this.local.slice();
              local.splice(j--, 1);
            }
        }
    }
    if (children == this.children && local == this.local)
      return this;
    return local.length || children.length ? new _DecorationSet(local, children) : empty;
  }
  forChild(offset2, node) {
    if (this == empty)
      return this;
    if (node.isLeaf)
      return _DecorationSet.empty;
    let child, local;
    for (let i = 0; i < this.children.length; i += 3)
      if (this.children[i] >= offset2) {
        if (this.children[i] == offset2)
          child = this.children[i + 2];
        break;
      }
    let start2 = offset2 + 1, end2 = start2 + node.content.size;
    for (let i = 0; i < this.local.length; i++) {
      let dec = this.local[i];
      if (dec.from < end2 && dec.to > start2 && dec.type instanceof InlineType) {
        let from = Math.max(start2, dec.from) - start2, to = Math.min(end2, dec.to) - start2;
        if (from < to)
          (local || (local = [])).push(dec.copy(from, to));
      }
    }
    if (local) {
      let localSet = new _DecorationSet(local.sort(byPos), none);
      return child ? new DecorationGroup([localSet, child]) : localSet;
    }
    return child || empty;
  }
  /**
  @internal
  */
  eq(other) {
    if (this == other)
      return true;
    if (!(other instanceof _DecorationSet) || this.local.length != other.local.length || this.children.length != other.children.length)
      return false;
    for (let i = 0; i < this.local.length; i++)
      if (!this.local[i].eq(other.local[i]))
        return false;
    for (let i = 0; i < this.children.length; i += 3)
      if (this.children[i] != other.children[i] || this.children[i + 1] != other.children[i + 1] || !this.children[i + 2].eq(other.children[i + 2]))
        return false;
    return true;
  }
  /**
  @internal
  */
  locals(node) {
    return removeOverlap(this.localsInner(node));
  }
  /**
  @internal
  */
  localsInner(node) {
    if (this == empty)
      return none;
    if (node.inlineContent || !this.local.some(InlineType.is))
      return this.local;
    let result = [];
    for (let i = 0; i < this.local.length; i++) {
      if (!(this.local[i].type instanceof InlineType))
        result.push(this.local[i]);
    }
    return result;
  }
  forEachSet(f) {
    f(this);
  }
};
DecorationSet.empty = new DecorationSet([], []);
DecorationSet.removeOverlap = removeOverlap;
var empty = DecorationSet.empty;
var DecorationGroup = class _DecorationGroup {
  constructor(members) {
    this.members = members;
  }
  map(mapping, doc3) {
    const mappedDecos = this.members.map((member) => member.map(mapping, doc3, noSpec));
    return _DecorationGroup.from(mappedDecos);
  }
  forChild(offset2, child) {
    if (child.isLeaf)
      return DecorationSet.empty;
    let found2 = [];
    for (let i = 0; i < this.members.length; i++) {
      let result = this.members[i].forChild(offset2, child);
      if (result == empty)
        continue;
      if (result instanceof _DecorationGroup)
        found2 = found2.concat(result.members);
      else
        found2.push(result);
    }
    return _DecorationGroup.from(found2);
  }
  eq(other) {
    if (!(other instanceof _DecorationGroup) || other.members.length != this.members.length)
      return false;
    for (let i = 0; i < this.members.length; i++)
      if (!this.members[i].eq(other.members[i]))
        return false;
    return true;
  }
  locals(node) {
    let result, sorted = true;
    for (let i = 0; i < this.members.length; i++) {
      let locals = this.members[i].localsInner(node);
      if (!locals.length)
        continue;
      if (!result) {
        result = locals;
      } else {
        if (sorted) {
          result = result.slice();
          sorted = false;
        }
        for (let j = 0; j < locals.length; j++)
          result.push(locals[j]);
      }
    }
    return result ? removeOverlap(sorted ? result : result.sort(byPos)) : none;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(members) {
    switch (members.length) {
      case 0:
        return empty;
      case 1:
        return members[0];
      default:
        return new _DecorationGroup(members.every((m) => m instanceof DecorationSet) ? members : members.reduce((r, m) => r.concat(m instanceof DecorationSet ? m : m.members), []));
    }
  }
  forEachSet(f) {
    for (let i = 0; i < this.members.length; i++)
      this.members[i].forEachSet(f);
  }
};
function mapChildren(oldChildren, newLocal, mapping, node, offset2, oldOffset, options) {
  let children = oldChildren.slice();
  for (let i = 0, baseOffset = oldOffset; i < mapping.maps.length; i++) {
    let moved = 0;
    mapping.maps[i].forEach((oldStart, oldEnd, newStart, newEnd) => {
      let dSize = newEnd - newStart - (oldEnd - oldStart);
      for (let i2 = 0; i2 < children.length; i2 += 3) {
        let end2 = children[i2 + 1];
        if (end2 < 0 || oldStart > end2 + baseOffset - moved)
          continue;
        let start2 = children[i2] + baseOffset - moved;
        if (oldEnd >= start2) {
          children[i2 + 1] = oldStart <= start2 ? -2 : -1;
        } else if (oldStart >= baseOffset && dSize) {
          children[i2] += dSize;
          children[i2 + 1] += dSize;
        }
      }
      moved += dSize;
    });
    baseOffset = mapping.maps[i].map(baseOffset, -1);
  }
  let mustRebuild = false;
  for (let i = 0; i < children.length; i += 3)
    if (children[i + 1] < 0) {
      if (children[i + 1] == -2) {
        mustRebuild = true;
        children[i + 1] = -1;
        continue;
      }
      let from = mapping.map(oldChildren[i] + oldOffset), fromLocal = from - offset2;
      if (fromLocal < 0 || fromLocal >= node.content.size) {
        mustRebuild = true;
        continue;
      }
      let to = mapping.map(oldChildren[i + 1] + oldOffset, -1), toLocal = to - offset2;
      let { index: index2, offset: childOffset } = node.content.findIndex(fromLocal);
      let childNode = node.maybeChild(index2);
      if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
        let mapped = children[i + 2].mapInner(mapping, childNode, from + 1, oldChildren[i] + oldOffset + 1, options);
        if (mapped != empty) {
          children[i] = fromLocal;
          children[i + 1] = toLocal;
          children[i + 2] = mapped;
        } else {
          children[i + 1] = -2;
          mustRebuild = true;
        }
      } else {
        mustRebuild = true;
      }
    }
  if (mustRebuild) {
    let decorations = mapAndGatherRemainingDecorations(children, oldChildren, newLocal, mapping, offset2, oldOffset, options);
    let built = buildTree(decorations, node, 0, options);
    newLocal = built.local;
    for (let i = 0; i < children.length; i += 3)
      if (children[i + 1] < 0) {
        children.splice(i, 3);
        i -= 3;
      }
    for (let i = 0, j = 0; i < built.children.length; i += 3) {
      let from = built.children[i];
      while (j < children.length && children[j] < from)
        j += 3;
      children.splice(j, 0, built.children[i], built.children[i + 1], built.children[i + 2]);
    }
  }
  return new DecorationSet(newLocal.sort(byPos), children);
}
function moveSpans(spans, offset2) {
  if (!offset2 || !spans.length)
    return spans;
  let result = [];
  for (let i = 0; i < spans.length; i++) {
    let span = spans[i];
    result.push(new Decoration(span.from + offset2, span.to + offset2, span.type));
  }
  return result;
}
function mapAndGatherRemainingDecorations(children, oldChildren, decorations, mapping, offset2, oldOffset, options) {
  function gather(set3, oldOffset2) {
    for (let i = 0; i < set3.local.length; i++) {
      let mapped = set3.local[i].map(mapping, offset2, oldOffset2);
      if (mapped)
        decorations.push(mapped);
      else if (options.onRemove)
        options.onRemove(set3.local[i].spec);
    }
    for (let i = 0; i < set3.children.length; i += 3)
      gather(set3.children[i + 2], set3.children[i] + oldOffset2 + 1);
  }
  for (let i = 0; i < children.length; i += 3)
    if (children[i + 1] == -1)
      gather(children[i + 2], oldChildren[i] + oldOffset + 1);
  return decorations;
}
function takeSpansForNode(spans, node, offset2) {
  if (node.isLeaf)
    return null;
  let end2 = offset2 + node.nodeSize, found2 = null;
  for (let i = 0, span; i < spans.length; i++) {
    if ((span = spans[i]) && span.from > offset2 && span.to < end2) {
      (found2 || (found2 = [])).push(span);
      spans[i] = null;
    }
  }
  return found2;
}
function withoutNulls(array) {
  let result = [];
  for (let i = 0; i < array.length; i++)
    if (array[i] != null)
      result.push(array[i]);
  return result;
}
function buildTree(spans, node, offset2, options) {
  let children = [], hasNulls = false;
  node.forEach((childNode, localStart) => {
    let found2 = takeSpansForNode(spans, childNode, localStart + offset2);
    if (found2) {
      hasNulls = true;
      let subtree = buildTree(found2, childNode, offset2 + localStart + 1, options);
      if (subtree != empty)
        children.push(localStart, localStart + childNode.nodeSize, subtree);
    }
  });
  let locals = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset2).sort(byPos);
  for (let i = 0; i < locals.length; i++)
    if (!locals[i].type.valid(node, locals[i])) {
      if (options.onRemove)
        options.onRemove(locals[i].spec);
      locals.splice(i--, 1);
    }
  return locals.length || children.length ? new DecorationSet(locals, children) : empty;
}
function byPos(a, b) {
  return a.from - b.from || a.to - b.to;
}
function removeOverlap(spans) {
  let working = spans;
  for (let i = 0; i < working.length - 1; i++) {
    let span = working[i];
    if (span.from != span.to)
      for (let j = i + 1; j < working.length; j++) {
        let next = working[j];
        if (next.from == span.from) {
          if (next.to != span.to) {
            if (working == spans)
              working = spans.slice();
            working[j] = next.copy(next.from, span.to);
            insertAhead(working, j + 1, next.copy(span.to, next.to));
          }
          continue;
        } else {
          if (next.from < span.to) {
            if (working == spans)
              working = spans.slice();
            working[i] = span.copy(span.from, next.from);
            insertAhead(working, j, span.copy(next.from, span.to));
          }
          break;
        }
      }
  }
  return working;
}
function insertAhead(array, i, deco) {
  while (i < array.length && byPos(deco, array[i]) > 0)
    i++;
  array.splice(i, 0, deco);
}
function viewDecorations(view) {
  let found2 = [];
  view.someProp("decorations", (f) => {
    let result = f(view.state);
    if (result && result != empty)
      found2.push(result);
  });
  if (view.cursorWrapper)
    found2.push(DecorationSet.create(view.state.doc, [view.cursorWrapper.deco]));
  return DecorationGroup.from(found2);
}
var observeOptions = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true
};
var useCharData = ie && ie_version <= 11;
var SelectionState = class {
  constructor() {
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  set(sel) {
    this.anchorNode = sel.anchorNode;
    this.anchorOffset = sel.anchorOffset;
    this.focusNode = sel.focusNode;
    this.focusOffset = sel.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(sel) {
    return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset && sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset;
  }
};
var DOMObserver = class {
  constructor(view, handleDOMChange) {
    this.view = view;
    this.handleDOMChange = handleDOMChange;
    this.queue = [];
    this.flushingSoon = -1;
    this.observer = null;
    this.currentSelection = new SelectionState();
    this.onCharData = null;
    this.suppressingSelectionUpdates = false;
    this.lastChangedTextNode = null;
    this.observer = window.MutationObserver && new window.MutationObserver((mutations) => {
      for (let i = 0; i < mutations.length; i++)
        this.queue.push(mutations[i]);
      if (ie && ie_version <= 11 && mutations.some((m) => m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length))
        this.flushSoon();
      else
        this.flush();
    });
    if (useCharData) {
      this.onCharData = (e) => {
        this.queue.push({ target: e.target, type: "characterData", oldValue: e.prevValue });
        this.flushSoon();
      };
    }
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    if (this.flushingSoon < 0)
      this.flushingSoon = window.setTimeout(() => {
        this.flushingSoon = -1;
        this.flush();
      }, 20);
  }
  forceFlush() {
    if (this.flushingSoon > -1) {
      window.clearTimeout(this.flushingSoon);
      this.flushingSoon = -1;
      this.flush();
    }
  }
  start() {
    if (this.observer) {
      this.observer.takeRecords();
      this.observer.observe(this.view.dom, observeOptions);
    }
    if (this.onCharData)
      this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
    this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let take = this.observer.takeRecords();
      if (take.length) {
        for (let i = 0; i < take.length; i++)
          this.queue.push(take[i]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    if (this.onCharData)
      this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
    this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = true;
    setTimeout(() => this.suppressingSelectionUpdates = false, 50);
  }
  onSelectionChange() {
    if (!hasFocusAndSelection(this.view))
      return;
    if (this.suppressingSelectionUpdates)
      return selectionToDOM(this.view);
    if (ie && ie_version <= 11 && !this.view.state.selection.empty) {
      let sel = this.view.domSelectionRange();
      if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset))
        return this.flushSoon();
    }
    this.flush();
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(sel) {
    if (!sel.focusNode)
      return true;
    let ancestors = /* @__PURE__ */ new Set(), container;
    for (let scan = sel.focusNode; scan; scan = parentNode(scan))
      ancestors.add(scan);
    for (let scan = sel.anchorNode; scan; scan = parentNode(scan))
      if (ancestors.has(scan)) {
        container = scan;
        break;
      }
    let desc = container && this.view.docView.nearestDesc(container);
    if (desc && desc.ignoreMutation({
      type: "selection",
      target: container.nodeType == 3 ? container.parentNode : container
    })) {
      this.setCurSelection();
      return true;
    }
  }
  pendingRecords() {
    if (this.observer)
      for (let mut of this.observer.takeRecords())
        this.queue.push(mut);
    return this.queue;
  }
  flush() {
    let { view } = this;
    if (!view.docView || this.flushingSoon > -1)
      return;
    let mutations = this.pendingRecords();
    if (mutations.length)
      this.queue = [];
    let sel = view.domSelectionRange();
    let newSel = !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasFocusAndSelection(view) && !this.ignoreSelectionChange(sel);
    let from = -1, to = -1, typeOver = false, added = [];
    if (view.editable) {
      for (let i = 0; i < mutations.length; i++) {
        let result = this.registerMutation(mutations[i], added);
        if (result) {
          from = from < 0 ? result.from : Math.min(result.from, from);
          to = to < 0 ? result.to : Math.max(result.to, to);
          if (result.typeOver)
            typeOver = true;
        }
      }
    }
    if (gecko && added.length) {
      let brs = added.filter((n) => n.nodeName == "BR");
      if (brs.length == 2) {
        let [a, b] = brs;
        if (a.parentNode && a.parentNode.parentNode == b.parentNode)
          b.remove();
        else
          a.remove();
      } else {
        let { focusNode } = this.currentSelection;
        for (let br of brs) {
          let parent = br.parentNode;
          if (parent && parent.nodeName == "LI" && (!focusNode || blockParent(view, focusNode) != parent))
            br.remove();
        }
      }
    }
    let readSel = null;
    if (from < 0 && newSel && view.input.lastFocus > Date.now() - 200 && Math.max(view.input.lastTouch, view.input.lastClick.time) < Date.now() - 300 && selectionCollapsed(sel) && (readSel = selectionFromDOM(view)) && readSel.eq(Selection.near(view.state.doc.resolve(0), 1))) {
      view.input.lastFocus = 0;
      selectionToDOM(view);
      this.currentSelection.set(sel);
      view.scrollToSelection();
    } else if (from > -1 || newSel) {
      if (from > -1) {
        view.docView.markDirty(from, to);
        checkCSS(view);
      }
      this.handleDOMChange(from, to, typeOver, added);
      if (view.docView && view.docView.dirty)
        view.updateState(view.state);
      else if (!this.currentSelection.eq(sel))
        selectionToDOM(view);
      this.currentSelection.set(sel);
    }
  }
  registerMutation(mut, added) {
    if (added.indexOf(mut.target) > -1)
      return null;
    let desc = this.view.docView.nearestDesc(mut.target);
    if (mut.type == "attributes" && (desc == this.view.docView || mut.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    mut.attributeName == "style" && !mut.oldValue && !mut.target.getAttribute("style")))
      return null;
    if (!desc || desc.ignoreMutation(mut))
      return null;
    if (mut.type == "childList") {
      for (let i = 0; i < mut.addedNodes.length; i++) {
        let node = mut.addedNodes[i];
        added.push(node);
        if (node.nodeType == 3)
          this.lastChangedTextNode = node;
      }
      if (desc.contentDOM && desc.contentDOM != desc.dom && !desc.contentDOM.contains(mut.target))
        return { from: desc.posBefore, to: desc.posAfter };
      let prev = mut.previousSibling, next = mut.nextSibling;
      if (ie && ie_version <= 11 && mut.addedNodes.length) {
        for (let i = 0; i < mut.addedNodes.length; i++) {
          let { previousSibling, nextSibling } = mut.addedNodes[i];
          if (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0)
            prev = previousSibling;
          if (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0)
            next = nextSibling;
        }
      }
      let fromOffset = prev && prev.parentNode == mut.target ? domIndex(prev) + 1 : 0;
      let from = desc.localPosFromDOM(mut.target, fromOffset, -1);
      let toOffset = next && next.parentNode == mut.target ? domIndex(next) : mut.target.childNodes.length;
      let to = desc.localPosFromDOM(mut.target, toOffset, 1);
      return { from, to };
    } else if (mut.type == "attributes") {
      return { from: desc.posAtStart - desc.border, to: desc.posAtEnd + desc.border };
    } else {
      this.lastChangedTextNode = mut.target;
      return {
        from: desc.posAtStart,
        to: desc.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: mut.target.nodeValue == mut.oldValue
      };
    }
  }
};
var cssChecked = /* @__PURE__ */ new WeakMap();
var cssCheckWarned = false;
function checkCSS(view) {
  if (cssChecked.has(view))
    return;
  cssChecked.set(view, null);
  if (["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(view.dom).whiteSpace) !== -1) {
    view.requiresGeckoHackNode = gecko;
    if (cssCheckWarned)
      return;
    console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
    cssCheckWarned = true;
  }
}
function rangeToSelectionRange(view, range) {
  let anchorNode = range.startContainer, anchorOffset = range.startOffset;
  let focusNode = range.endContainer, focusOffset = range.endOffset;
  let currentAnchor = view.domAtPos(view.state.selection.anchor);
  if (isEquivalentPosition(currentAnchor.node, currentAnchor.offset, focusNode, focusOffset))
    [anchorNode, anchorOffset, focusNode, focusOffset] = [focusNode, focusOffset, anchorNode, anchorOffset];
  return { anchorNode, anchorOffset, focusNode, focusOffset };
}
function safariShadowSelectionRange(view, selection) {
  if (selection.getComposedRanges) {
    let range = selection.getComposedRanges(view.root)[0];
    if (range)
      return rangeToSelectionRange(view, range);
  }
  let found2;
  function read2(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    found2 = event.getTargetRanges()[0];
  }
  view.dom.addEventListener("beforeinput", read2, true);
  document.execCommand("indent");
  view.dom.removeEventListener("beforeinput", read2, true);
  return found2 ? rangeToSelectionRange(view, found2) : null;
}
function blockParent(view, node) {
  for (let p = node.parentNode; p && p != view.dom; p = p.parentNode) {
    let desc = view.docView.nearestDesc(p, true);
    if (desc && desc.node.isBlock)
      return p;
  }
  return null;
}
function parseBetween(view, from_, to_) {
  let { node: parent, fromOffset, toOffset, from, to } = view.docView.parseRange(from_, to_);
  let domSel = view.domSelectionRange();
  let find;
  let anchor = domSel.anchorNode;
  if (anchor && view.dom.contains(anchor.nodeType == 1 ? anchor : anchor.parentNode)) {
    find = [{ node: anchor, offset: domSel.anchorOffset }];
    if (!selectionCollapsed(domSel))
      find.push({ node: domSel.focusNode, offset: domSel.focusOffset });
  }
  if (chrome && view.input.lastKeyCode === 8) {
    for (let off = toOffset; off > fromOffset; off--) {
      let node = parent.childNodes[off - 1], desc = node.pmViewDesc;
      if (node.nodeName == "BR" && !desc) {
        toOffset = off;
        break;
      }
      if (!desc || desc.size)
        break;
    }
  }
  let startDoc = view.state.doc;
  let parser = view.someProp("domParser") || DOMParser.fromSchema(view.state.schema);
  let $from = startDoc.resolve(from);
  let sel = null, doc3 = parser.parse(parent, {
    topNode: $from.parent,
    topMatch: $from.parent.contentMatchAt($from.index()),
    topOpen: true,
    from: fromOffset,
    to: toOffset,
    preserveWhitespace: $from.parent.type.whitespace == "pre" ? "full" : true,
    findPositions: find,
    ruleFromNode,
    context: $from
  });
  if (find && find[0].pos != null) {
    let anchor2 = find[0].pos, head = find[1] && find[1].pos;
    if (head == null)
      head = anchor2;
    sel = { anchor: anchor2 + from, head: head + from };
  }
  return { doc: doc3, sel, from, to };
}
function ruleFromNode(dom) {
  let desc = dom.pmViewDesc;
  if (desc) {
    return desc.parseRule();
  } else if (dom.nodeName == "BR" && dom.parentNode) {
    if (safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName)) {
      let skip = document.createElement("div");
      skip.appendChild(document.createElement("li"));
      return { skip };
    } else if (dom.parentNode.lastChild == dom || safari && /^(tr|table)$/i.test(dom.parentNode.nodeName)) {
      return { ignore: true };
    }
  } else if (dom.nodeName == "IMG" && dom.getAttribute("mark-placeholder")) {
    return { ignore: true };
  }
  return null;
}
var isInline = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function readDOMChange(view, from, to, typeOver, addedNodes) {
  let compositionID = view.input.compositionPendingChanges || (view.composing ? view.input.compositionID : 0);
  view.input.compositionPendingChanges = 0;
  if (from < 0) {
    let origin = view.input.lastSelectionTime > Date.now() - 50 ? view.input.lastSelectionOrigin : null;
    let newSel = selectionFromDOM(view, origin);
    if (newSel && !view.state.selection.eq(newSel)) {
      if (chrome && android && view.input.lastKeyCode === 13 && Date.now() - 100 < view.input.lastKeyCodeTime && view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter"))))
        return;
      let tr = view.state.tr.setSelection(newSel);
      if (origin == "pointer")
        tr.setMeta("pointer", true);
      else if (origin == "key")
        tr.scrollIntoView();
      if (compositionID)
        tr.setMeta("composition", compositionID);
      view.dispatch(tr);
    }
    return;
  }
  let $before = view.state.doc.resolve(from);
  let shared = $before.sharedDepth(to);
  from = $before.before(shared + 1);
  to = view.state.doc.resolve(to).after(shared + 1);
  let sel = view.state.selection;
  let parse2 = parseBetween(view, from, to);
  let doc3 = view.state.doc, compare = doc3.slice(parse2.from, parse2.to);
  let preferredPos, preferredSide;
  if (view.input.lastKeyCode === 8 && Date.now() - 100 < view.input.lastKeyCodeTime) {
    preferredPos = view.state.selection.to;
    preferredSide = "end";
  } else {
    preferredPos = view.state.selection.from;
    preferredSide = "start";
  }
  view.input.lastKeyCode = null;
  let change = findDiff(compare.content, parse2.doc.content, parse2.from, preferredPos, preferredSide);
  if (change)
    view.input.domChangeCount++;
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 || android) && addedNodes.some((n) => n.nodeType == 1 && !isInline.test(n.nodeName)) && (!change || change.endA >= change.endB) && view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter")))) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (!change) {
    if (typeOver && sel instanceof TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor) && !view.composing && !(parse2.sel && parse2.sel.anchor != parse2.sel.head)) {
      change = { start: sel.from, endA: sel.to, endB: sel.to };
    } else {
      if (parse2.sel) {
        let sel2 = resolveSelection(view, view.state.doc, parse2.sel);
        if (sel2 && !sel2.eq(view.state.selection)) {
          let tr = view.state.tr.setSelection(sel2);
          if (compositionID)
            tr.setMeta("composition", compositionID);
          view.dispatch(tr);
        }
      }
      return;
    }
  }
  if (view.state.selection.from < view.state.selection.to && change.start == change.endB && view.state.selection instanceof TextSelection) {
    if (change.start > view.state.selection.from && change.start <= view.state.selection.from + 2 && view.state.selection.from >= parse2.from) {
      change.start = view.state.selection.from;
    } else if (change.endA < view.state.selection.to && change.endA >= view.state.selection.to - 2 && view.state.selection.to <= parse2.to) {
      change.endB += view.state.selection.to - change.endA;
      change.endA = view.state.selection.to;
    }
  }
  if (ie && ie_version <= 11 && change.endB == change.start + 1 && change.endA == change.start && change.start > parse2.from && parse2.doc.textBetween(change.start - parse2.from - 1, change.start - parse2.from + 1) == "  ") {
    change.start--;
    change.endA--;
    change.endB--;
  }
  let $from = parse2.doc.resolveNoCache(change.start - parse2.from);
  let $to = parse2.doc.resolveNoCache(change.endB - parse2.from);
  let $fromA = doc3.resolve(change.start);
  let inlineChange = $from.sameParent($to) && $from.parent.inlineContent && $fromA.end() >= change.endA;
  let nextSel;
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 && (!inlineChange || addedNodes.some((n) => n.nodeName == "DIV" || n.nodeName == "P")) || !inlineChange && $from.pos < parse2.doc.content.size && (!$from.sameParent($to) || !$from.parent.inlineContent) && !/\S/.test(parse2.doc.textBetween($from.pos, $to.pos, "", "")) && (nextSel = Selection.findFrom(parse2.doc.resolve($from.pos + 1), 1, true)) && nextSel.head > $from.pos) && view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter")))) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (view.state.selection.anchor > change.start && looksLikeBackspace(doc3, change.start, change.endA, $from, $to) && view.someProp("handleKeyDown", (f) => f(view, keyEvent(8, "Backspace")))) {
    if (android && chrome)
      view.domObserver.suppressSelectionUpdates();
    return;
  }
  if (chrome && change.endB == change.start)
    view.input.lastChromeDelete = Date.now();
  if (android && !inlineChange && $from.start() != $to.start() && $to.parentOffset == 0 && $from.depth == $to.depth && parse2.sel && parse2.sel.anchor == parse2.sel.head && parse2.sel.head == change.endA) {
    change.endB -= 2;
    $to = parse2.doc.resolveNoCache(change.endB - parse2.from);
    setTimeout(() => {
      view.someProp("handleKeyDown", function(f) {
        return f(view, keyEvent(13, "Enter"));
      });
    }, 20);
  }
  let chFrom = change.start, chTo = change.endA;
  let mkTr = (base2) => {
    let tr = base2 || view.state.tr.replace(chFrom, chTo, parse2.doc.slice(change.start - parse2.from, change.endB - parse2.from));
    if (parse2.sel) {
      let sel2 = resolveSelection(view, tr.doc, parse2.sel);
      if (sel2 && !(chrome && view.composing && sel2.empty && (change.start != change.endB || view.input.lastChromeDelete < Date.now() - 100) && (sel2.head == chFrom || sel2.head == tr.mapping.map(chTo) - 1) || ie && sel2.empty && sel2.head == chFrom))
        tr.setSelection(sel2);
    }
    if (compositionID)
      tr.setMeta("composition", compositionID);
    return tr.scrollIntoView();
  };
  let markChange;
  if (inlineChange) {
    if ($from.pos == $to.pos) {
      if (ie && ie_version <= 11 && $from.parentOffset == 0) {
        view.domObserver.suppressSelectionUpdates();
        setTimeout(() => selectionToDOM(view), 20);
      }
      let tr = mkTr(view.state.tr.delete(chFrom, chTo));
      let marks = doc3.resolve(change.start).marksAcross(doc3.resolve(change.endA));
      if (marks)
        tr.ensureMarks(marks);
      view.dispatch(tr);
    } else if (
      // Adding or removing a mark
      change.endA == change.endB && (markChange = isMarkChange($from.parent.content.cut($from.parentOffset, $to.parentOffset), $fromA.parent.content.cut($fromA.parentOffset, change.endA - $fromA.start())))
    ) {
      let tr = mkTr(view.state.tr);
      if (markChange.type == "add")
        tr.addMark(chFrom, chTo, markChange.mark);
      else
        tr.removeMark(chFrom, chTo, markChange.mark);
      view.dispatch(tr);
    } else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
      let text = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
      let deflt = () => mkTr(view.state.tr.insertText(text, chFrom, chTo));
      if (!view.someProp("handleTextInput", (f) => f(view, chFrom, chTo, text, deflt)))
        view.dispatch(deflt());
    }
  } else {
    view.dispatch(mkTr());
  }
}
function resolveSelection(view, doc3, parsedSel) {
  if (Math.max(parsedSel.anchor, parsedSel.head) > doc3.content.size)
    return null;
  return selectionBetween(view, doc3.resolve(parsedSel.anchor), doc3.resolve(parsedSel.head));
}
function isMarkChange(cur, prev) {
  let curMarks = cur.firstChild.marks, prevMarks = prev.firstChild.marks;
  let added = curMarks, removed = prevMarks, type, mark, update;
  for (let i = 0; i < prevMarks.length; i++)
    added = prevMarks[i].removeFromSet(added);
  for (let i = 0; i < curMarks.length; i++)
    removed = curMarks[i].removeFromSet(removed);
  if (added.length == 1 && removed.length == 0) {
    mark = added[0];
    type = "add";
    update = (node) => node.mark(mark.addToSet(node.marks));
  } else if (added.length == 0 && removed.length == 1) {
    mark = removed[0];
    type = "remove";
    update = (node) => node.mark(mark.removeFromSet(node.marks));
  } else {
    return null;
  }
  let updated = [];
  for (let i = 0; i < prev.childCount; i++)
    updated.push(update(prev.child(i)));
  if (Fragment.from(updated).eq(cur))
    return { mark, type };
}
function looksLikeBackspace(old, start2, end2, $newStart, $newEnd) {
  if (
    // The content must have shrunk
    end2 - start2 <= $newEnd.pos - $newStart.pos || // newEnd must point directly at or after the end of the block that newStart points into
    skipClosingAndOpening($newStart, true, false) < $newEnd.pos
  )
    return false;
  let $start = old.resolve(start2);
  if (!$newStart.parent.isTextblock) {
    let after = $start.nodeAfter;
    return after != null && end2 == start2 + after.nodeSize;
  }
  if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock)
    return false;
  let $next = old.resolve(skipClosingAndOpening($start, true, true));
  if (!$next.parent.isTextblock || $next.pos > end2 || skipClosingAndOpening($next, true, false) < end2)
    return false;
  return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content);
}
function skipClosingAndOpening($pos, fromEnd, mayOpen) {
  let depth = $pos.depth, end2 = fromEnd ? $pos.end() : $pos.pos;
  while (depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount)) {
    depth--;
    end2++;
    fromEnd = false;
  }
  if (mayOpen) {
    let next = $pos.node(depth).maybeChild($pos.indexAfter(depth));
    while (next && !next.isLeaf) {
      next = next.firstChild;
      end2++;
    }
  }
  return end2;
}
function findDiff(a, b, pos, preferredPos, preferredSide) {
  let start2 = a.findDiffStart(b, pos);
  if (start2 == null)
    return null;
  let { a: endA, b: endB } = a.findDiffEnd(b, pos + a.size, pos + b.size);
  if (preferredSide == "end") {
    let adjust = Math.max(0, start2 - Math.min(endA, endB));
    preferredPos -= endA + adjust - start2;
  }
  if (endA < start2 && a.size < b.size) {
    let move = preferredPos <= start2 && preferredPos >= endA ? start2 - preferredPos : 0;
    start2 -= move;
    if (start2 && start2 < b.size && isSurrogatePair(b.textBetween(start2 - 1, start2 + 1)))
      start2 += move ? 1 : -1;
    endB = start2 + (endB - endA);
    endA = start2;
  } else if (endB < start2) {
    let move = preferredPos <= start2 && preferredPos >= endB ? start2 - preferredPos : 0;
    start2 -= move;
    if (start2 && start2 < a.size && isSurrogatePair(a.textBetween(start2 - 1, start2 + 1)))
      start2 += move ? 1 : -1;
    endA = start2 + (endA - endB);
    endB = start2;
  }
  return { start: start2, endA, endB };
}
function isSurrogatePair(str) {
  if (str.length != 2)
    return false;
  let a = str.charCodeAt(0), b = str.charCodeAt(1);
  return a >= 56320 && a <= 57343 && b >= 55296 && b <= 56319;
}
var EditorView = class {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(place, props) {
    this._root = null;
    this.focused = false;
    this.trackWrites = null;
    this.mounted = false;
    this.markCursor = null;
    this.cursorWrapper = null;
    this.lastSelectedViewDesc = void 0;
    this.input = new InputState();
    this.prevDirectPlugins = [];
    this.pluginViews = [];
    this.requiresGeckoHackNode = false;
    this.dragging = null;
    this._props = props;
    this.state = props.state;
    this.directPlugins = props.plugins || [];
    this.directPlugins.forEach(checkStateComponent);
    this.dispatch = this.dispatch.bind(this);
    this.dom = place && place.mount || document.createElement("div");
    if (place) {
      if (place.appendChild)
        place.appendChild(this.dom);
      else if (typeof place == "function")
        place(this.dom);
      else if (place.mount)
        this.mounted = true;
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    this.nodeViews = buildNodeViews(this);
    this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this);
    this.domObserver = new DOMObserver(this, (from, to, typeOver, added) => readDOMChange(this, from, to, typeOver, added));
    this.domObserver.start();
    initInput(this);
    this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let prev = this._props;
      this._props = {};
      for (let name in prev)
        this._props[name] = prev[name];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(props) {
    if (props.handleDOMEvents != this._props.handleDOMEvents)
      ensureListeners(this);
    let prevProps = this._props;
    this._props = props;
    if (props.plugins) {
      props.plugins.forEach(checkStateComponent);
      this.directPlugins = props.plugins;
    }
    this.updateStateInner(props.state, prevProps);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(props) {
    let updated = {};
    for (let name in this._props)
      updated[name] = this._props[name];
    updated.state = this.state;
    for (let name in props)
      updated[name] = props[name];
    this.update(updated);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(state) {
    this.updateStateInner(state, this._props);
  }
  updateStateInner(state, prevProps) {
    var _a;
    let prev = this.state, redraw = false, updateSel = false;
    if (state.storedMarks && this.composing) {
      clearComposition(this);
      updateSel = true;
    }
    this.state = state;
    let pluginsChanged = prev.plugins != state.plugins || this._props.plugins != prevProps.plugins;
    if (pluginsChanged || this._props.plugins != prevProps.plugins || this._props.nodeViews != prevProps.nodeViews) {
      let nodeViews = buildNodeViews(this);
      if (changedNodeViews(nodeViews, this.nodeViews)) {
        this.nodeViews = nodeViews;
        redraw = true;
      }
    }
    if (pluginsChanged || prevProps.handleDOMEvents != this._props.handleDOMEvents) {
      ensureListeners(this);
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    let innerDeco = viewDecorations(this), outerDeco = computeDocDeco(this);
    let scroll = prev.plugins != state.plugins && !prev.doc.eq(state.doc) ? "reset" : state.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve";
    let updateDoc = redraw || !this.docView.matchesNode(state.doc, outerDeco, innerDeco);
    if (updateDoc || !state.selection.eq(prev.selection))
      updateSel = true;
    let oldScrollPos = scroll == "preserve" && updateSel && this.dom.style.overflowAnchor == null && storeScrollPos(this);
    if (updateSel) {
      this.domObserver.stop();
      let forceSelUpdate = updateDoc && (ie || chrome) && !this.composing && !prev.selection.empty && !state.selection.empty && selectionContextChanged(prev.selection, state.selection);
      if (updateDoc) {
        let chromeKludge = chrome ? this.trackWrites = this.domSelectionRange().focusNode : null;
        if (this.composing)
          this.input.compositionNode = findCompositionNode(this);
        if (redraw || !this.docView.update(state.doc, outerDeco, innerDeco, this)) {
          this.docView.updateOuterDeco(outerDeco);
          this.docView.destroy();
          this.docView = docViewDesc(state.doc, outerDeco, innerDeco, this.dom, this);
        }
        if (chromeKludge && !this.trackWrites)
          forceSelUpdate = true;
      }
      if (forceSelUpdate || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && anchorInRightPlace(this))) {
        selectionToDOM(this, forceSelUpdate);
      } else {
        syncNodeSelection(this, state.selection);
        this.domObserver.setCurSelection();
      }
      this.domObserver.start();
    }
    this.updatePluginViews(prev);
    if (((_a = this.dragging) === null || _a === void 0 ? void 0 : _a.node) && !prev.doc.eq(state.doc))
      this.updateDraggedNode(this.dragging, prev);
    if (scroll == "reset") {
      this.dom.scrollTop = 0;
    } else if (scroll == "to selection") {
      this.scrollToSelection();
    } else if (oldScrollPos) {
      resetScrollPos(oldScrollPos);
    }
  }
  /**
  @internal
  */
  scrollToSelection() {
    let startDOM = this.domSelectionRange().focusNode;
    if (!startDOM || !this.dom.contains(startDOM.nodeType == 1 ? startDOM : startDOM.parentNode)) ;
    else if (this.someProp("handleScrollToSelection", (f) => f(this))) ;
    else if (this.state.selection instanceof NodeSelection) {
      let target = this.docView.domAfterPos(this.state.selection.from);
      if (target.nodeType == 1)
        scrollRectIntoView(this, target.getBoundingClientRect(), startDOM);
    } else {
      scrollRectIntoView(this, this.coordsAtPos(this.state.selection.head, 1), startDOM);
    }
  }
  destroyPluginViews() {
    let view;
    while (view = this.pluginViews.pop())
      if (view.destroy)
        view.destroy();
  }
  updatePluginViews(prevState) {
    if (!prevState || prevState.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins;
      this.destroyPluginViews();
      for (let i = 0; i < this.directPlugins.length; i++) {
        let plugin = this.directPlugins[i];
        if (plugin.spec.view)
          this.pluginViews.push(plugin.spec.view(this));
      }
      for (let i = 0; i < this.state.plugins.length; i++) {
        let plugin = this.state.plugins[i];
        if (plugin.spec.view)
          this.pluginViews.push(plugin.spec.view(this));
      }
    } else {
      for (let i = 0; i < this.pluginViews.length; i++) {
        let pluginView = this.pluginViews[i];
        if (pluginView.update)
          pluginView.update(this, prevState);
      }
    }
  }
  updateDraggedNode(dragging, prev) {
    let sel = dragging.node, found2 = -1;
    if (this.state.doc.nodeAt(sel.from) == sel.node) {
      found2 = sel.from;
    } else {
      let movedPos = sel.from + (this.state.doc.content.size - prev.doc.content.size);
      let moved = movedPos > 0 && this.state.doc.nodeAt(movedPos);
      if (moved == sel.node)
        found2 = movedPos;
    }
    this.dragging = new Dragging(dragging.slice, dragging.move, found2 < 0 ? void 0 : NodeSelection.create(this.state.doc, found2));
  }
  someProp(propName, f) {
    let prop = this._props && this._props[propName], value2;
    if (prop != null && (value2 = f ? f(prop) : prop))
      return value2;
    for (let i = 0; i < this.directPlugins.length; i++) {
      let prop2 = this.directPlugins[i].props[propName];
      if (prop2 != null && (value2 = f ? f(prop2) : prop2))
        return value2;
    }
    let plugins = this.state.plugins;
    if (plugins)
      for (let i = 0; i < plugins.length; i++) {
        let prop2 = plugins[i].props[propName];
        if (prop2 != null && (value2 = f ? f(prop2) : prop2))
          return value2;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (ie) {
      let node = this.root.activeElement;
      if (node == this.dom)
        return true;
      if (!node || !this.dom.contains(node))
        return false;
      while (node && this.dom != node && this.dom.contains(node)) {
        if (node.contentEditable == "false")
          return false;
        node = node.parentElement;
      }
      return true;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop();
    if (this.editable)
      focusPreventScroll(this.dom);
    selectionToDOM(this);
    this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let cached2 = this._root;
    if (cached2 == null)
      for (let search = this.dom.parentNode; search; search = search.parentNode) {
        if (search.nodeType == 9 || search.nodeType == 11 && search.host) {
          if (!search.getSelection)
            Object.getPrototypeOf(search).getSelection = () => search.ownerDocument.getSelection();
          return this._root = search;
        }
      }
    return cached2 || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(coords) {
    return posAtCoords(this, coords);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(pos, side = 1) {
    return coordsAtPos(this, pos, side);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(pos, side = 0) {
    return this.docView.domFromPos(pos, side);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(pos) {
    let desc = this.docView.descAt(pos);
    return desc ? desc.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(node, offset2, bias = -1) {
    let pos = this.docView.posFromDOM(node, offset2, bias);
    if (pos == null)
      throw new RangeError("DOM position not inside the editor");
    return pos;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(dir, state) {
    return endOfTextblock(this, state || this.state, dir);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(html, event) {
    return doPaste(this, "", html, false, event || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(text, event) {
    return doPaste(this, text, null, true, event || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(slice) {
    return serializeForClipboard(this, slice);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    if (!this.docView)
      return;
    destroyInput(this);
    this.destroyPluginViews();
    if (this.mounted) {
      this.docView.update(this.state.doc, [], viewDecorations(this), this);
      this.dom.textContent = "";
    } else if (this.dom.parentNode) {
      this.dom.parentNode.removeChild(this.dom);
    }
    this.docView.destroy();
    this.docView = null;
    clearReusedRange();
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(event) {
    return dispatchEvent(this, event);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let sel = this.domSelection();
    if (!sel)
      return { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
    return safari && this.root.nodeType === 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariShadowSelectionRange(this, sel) || sel;
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
};
EditorView.prototype.dispatch = function(tr) {
  let dispatchTransaction = this._props.dispatchTransaction;
  if (dispatchTransaction)
    dispatchTransaction.call(this, tr);
  else
    this.updateState(this.state.apply(tr));
};
function computeDocDeco(view) {
  let attrs = /* @__PURE__ */ Object.create(null);
  attrs.class = "ProseMirror";
  attrs.contenteditable = String(view.editable);
  view.someProp("attributes", (value2) => {
    if (typeof value2 == "function")
      value2 = value2(view.state);
    if (value2)
      for (let attr in value2) {
        if (attr == "class")
          attrs.class += " " + value2[attr];
        else if (attr == "style")
          attrs.style = (attrs.style ? attrs.style + ";" : "") + value2[attr];
        else if (!attrs[attr] && attr != "contenteditable" && attr != "nodeName")
          attrs[attr] = String(value2[attr]);
      }
  });
  if (!attrs.translate)
    attrs.translate = "no";
  return [Decoration.node(0, view.state.doc.content.size, attrs)];
}
function updateCursorWrapper(view) {
  if (view.markCursor) {
    let dom = document.createElement("img");
    dom.className = "ProseMirror-separator";
    dom.setAttribute("mark-placeholder", "true");
    dom.setAttribute("alt", "");
    view.cursorWrapper = { dom, deco: Decoration.widget(view.state.selection.from, dom, { raw: true, marks: view.markCursor }) };
  } else {
    view.cursorWrapper = null;
  }
}
function getEditable(view) {
  return !view.someProp("editable", (value2) => value2(view.state) === false);
}
function selectionContextChanged(sel1, sel2) {
  let depth = Math.min(sel1.$anchor.sharedDepth(sel1.head), sel2.$anchor.sharedDepth(sel2.head));
  return sel1.$anchor.start(depth) != sel2.$anchor.start(depth);
}
function buildNodeViews(view) {
  let result = /* @__PURE__ */ Object.create(null);
  function add(obj) {
    for (let prop in obj)
      if (!Object.prototype.hasOwnProperty.call(result, prop))
        result[prop] = obj[prop];
  }
  view.someProp("nodeViews", add);
  view.someProp("markViews", add);
  return result;
}
function changedNodeViews(a, b) {
  let nA = 0, nB = 0;
  for (let prop in a) {
    if (a[prop] != b[prop])
      return true;
    nA++;
  }
  for (let _ in b)
    nB++;
  return nA != nB;
}
function checkStateComponent(plugin) {
  if (plugin.spec.state || plugin.spec.filterTransaction || plugin.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}

// node_modules/w3c-keyname/index.js
var base = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
};
var shift = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
};
var mac2 = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie2 = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);
var i;
for (i = 1; i <= 24; i++) base[i + 111] = "F" + i;
var i;
for (i = 65; i <= 90; i++) {
  base[i] = String.fromCharCode(i + 32);
  shift[i] = String.fromCharCode(i);
}
var i;
for (code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code];
var code;

// node_modules/prosemirror-keymap/dist/index.js
var mac3 = typeof navigator != "undefined" && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
var windows2 = typeof navigator != "undefined" && /Win/.test(navigator.platform);

// node_modules/prosemirror-commands/dist/index.js
var deleteSelection = (state, dispatch) => {
  if (state.selection.empty)
    return false;
  if (dispatch)
    dispatch(state.tr.deleteSelection().scrollIntoView());
  return true;
};
function atBlockStart(state, view) {
  let { $cursor } = state.selection;
  if (!$cursor || (view ? !view.endOfTextblock("backward", state) : $cursor.parentOffset > 0))
    return null;
  return $cursor;
}
var joinBackward = (state, dispatch, view) => {
  let $cursor = atBlockStart(state, view);
  if (!$cursor)
    return false;
  let $cut = findCutBefore($cursor);
  if (!$cut) {
    let range = $cursor.blockRange(), target = range && liftTarget(range);
    if (target == null)
      return false;
    if (dispatch)
      dispatch(state.tr.lift(range, target).scrollIntoView());
    return true;
  }
  let before = $cut.nodeBefore;
  if (deleteBarrier(state, $cut, dispatch, -1))
    return true;
  if ($cursor.parent.content.size == 0 && (textblockAt(before, "end") || NodeSelection.isSelectable(before))) {
    for (let depth = $cursor.depth; ; depth--) {
      let delStep = replaceStep(state.doc, $cursor.before(depth), $cursor.after(depth), Slice.empty);
      if (delStep && delStep.slice.size < delStep.to - delStep.from) {
        if (dispatch) {
          let tr = state.tr.step(delStep);
          tr.setSelection(textblockAt(before, "end") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1) : NodeSelection.create(tr.doc, $cut.pos - before.nodeSize));
          dispatch(tr.scrollIntoView());
        }
        return true;
      }
      if (depth == 1 || $cursor.node(depth - 1).childCount > 1)
        break;
    }
  }
  if (before.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch)
      dispatch(state.tr.delete($cut.pos - before.nodeSize, $cut.pos).scrollIntoView());
    return true;
  }
  return false;
};
var joinTextblockBackward = (state, dispatch, view) => {
  let $cursor = atBlockStart(state, view);
  if (!$cursor)
    return false;
  let $cut = findCutBefore($cursor);
  return $cut ? joinTextblocksAround(state, $cut, dispatch) : false;
};
var joinTextblockForward = (state, dispatch, view) => {
  let $cursor = atBlockEnd(state, view);
  if (!$cursor)
    return false;
  let $cut = findCutAfter($cursor);
  return $cut ? joinTextblocksAround(state, $cut, dispatch) : false;
};
function joinTextblocksAround(state, $cut, dispatch) {
  let before = $cut.nodeBefore, beforeText = before, beforePos = $cut.pos - 1;
  for (; !beforeText.isTextblock; beforePos--) {
    if (beforeText.type.spec.isolating)
      return false;
    let child = beforeText.lastChild;
    if (!child)
      return false;
    beforeText = child;
  }
  let after = $cut.nodeAfter, afterText = after, afterPos = $cut.pos + 1;
  for (; !afterText.isTextblock; afterPos++) {
    if (afterText.type.spec.isolating)
      return false;
    let child = afterText.firstChild;
    if (!child)
      return false;
    afterText = child;
  }
  let step = replaceStep(state.doc, beforePos, afterPos, Slice.empty);
  if (!step || step.from != beforePos || step instanceof ReplaceStep && step.slice.size >= afterPos - beforePos)
    return false;
  if (dispatch) {
    let tr = state.tr.step(step);
    tr.setSelection(TextSelection.create(tr.doc, beforePos));
    dispatch(tr.scrollIntoView());
  }
  return true;
}
function textblockAt(node, side, only = false) {
  for (let scan = node; scan; scan = side == "start" ? scan.firstChild : scan.lastChild) {
    if (scan.isTextblock)
      return true;
    if (only && scan.childCount != 1)
      return false;
  }
  return false;
}
var selectNodeBackward = (state, dispatch, view) => {
  let { $head, empty: empty3 } = state.selection, $cut = $head;
  if (!empty3)
    return false;
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("backward", state) : $head.parentOffset > 0)
      return false;
    $cut = findCutBefore($head);
  }
  let node = $cut && $cut.nodeBefore;
  if (!node || !NodeSelection.isSelectable(node))
    return false;
  if (dispatch)
    dispatch(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos - node.nodeSize)).scrollIntoView());
  return true;
};
function findCutBefore($pos) {
  if (!$pos.parent.type.spec.isolating)
    for (let i = $pos.depth - 1; i >= 0; i--) {
      if ($pos.index(i) > 0)
        return $pos.doc.resolve($pos.before(i + 1));
      if ($pos.node(i).type.spec.isolating)
        break;
    }
  return null;
}
function atBlockEnd(state, view) {
  let { $cursor } = state.selection;
  if (!$cursor || (view ? !view.endOfTextblock("forward", state) : $cursor.parentOffset < $cursor.parent.content.size))
    return null;
  return $cursor;
}
var joinForward = (state, dispatch, view) => {
  let $cursor = atBlockEnd(state, view);
  if (!$cursor)
    return false;
  let $cut = findCutAfter($cursor);
  if (!$cut)
    return false;
  let after = $cut.nodeAfter;
  if (deleteBarrier(state, $cut, dispatch, 1))
    return true;
  if ($cursor.parent.content.size == 0 && (textblockAt(after, "start") || NodeSelection.isSelectable(after))) {
    let delStep = replaceStep(state.doc, $cursor.before(), $cursor.after(), Slice.empty);
    if (delStep && delStep.slice.size < delStep.to - delStep.from) {
      if (dispatch) {
        let tr = state.tr.step(delStep);
        tr.setSelection(textblockAt(after, "start") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1) : NodeSelection.create(tr.doc, tr.mapping.map($cut.pos)));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  if (after.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch)
      dispatch(state.tr.delete($cut.pos, $cut.pos + after.nodeSize).scrollIntoView());
    return true;
  }
  return false;
};
var selectNodeForward = (state, dispatch, view) => {
  let { $head, empty: empty3 } = state.selection, $cut = $head;
  if (!empty3)
    return false;
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("forward", state) : $head.parentOffset < $head.parent.content.size)
      return false;
    $cut = findCutAfter($head);
  }
  let node = $cut && $cut.nodeAfter;
  if (!node || !NodeSelection.isSelectable(node))
    return false;
  if (dispatch)
    dispatch(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos)).scrollIntoView());
  return true;
};
function findCutAfter($pos) {
  if (!$pos.parent.type.spec.isolating)
    for (let i = $pos.depth - 1; i >= 0; i--) {
      let parent = $pos.node(i);
      if ($pos.index(i) + 1 < parent.childCount)
        return $pos.doc.resolve($pos.after(i + 1));
      if (parent.type.spec.isolating)
        break;
    }
  return null;
}
var joinUp = (state, dispatch) => {
  let sel = state.selection, nodeSel = sel instanceof NodeSelection, point;
  if (nodeSel) {
    if (sel.node.isTextblock || !canJoin(state.doc, sel.from))
      return false;
    point = sel.from;
  } else {
    point = joinPoint(state.doc, sel.from, -1);
    if (point == null)
      return false;
  }
  if (dispatch) {
    let tr = state.tr.join(point);
    if (nodeSel)
      tr.setSelection(NodeSelection.create(tr.doc, point - state.doc.resolve(point).nodeBefore.nodeSize));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var joinDown = (state, dispatch) => {
  let sel = state.selection, point;
  if (sel instanceof NodeSelection) {
    if (sel.node.isTextblock || !canJoin(state.doc, sel.to))
      return false;
    point = sel.to;
  } else {
    point = joinPoint(state.doc, sel.to, 1);
    if (point == null)
      return false;
  }
  if (dispatch)
    dispatch(state.tr.join(point).scrollIntoView());
  return true;
};
var lift = (state, dispatch) => {
  let { $from, $to } = state.selection;
  let range = $from.blockRange($to), target = range && liftTarget(range);
  if (target == null)
    return false;
  if (dispatch)
    dispatch(state.tr.lift(range, target).scrollIntoView());
  return true;
};
var newlineInCode = (state, dispatch) => {
  let { $head, $anchor } = state.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor))
    return false;
  if (dispatch)
    dispatch(state.tr.insertText("\n").scrollIntoView());
  return true;
};
function defaultBlockAt(match) {
  for (let i = 0; i < match.edgeCount; i++) {
    let { type } = match.edge(i);
    if (type.isTextblock && !type.hasRequiredAttrs())
      return type;
  }
  return null;
}
var exitCode = (state, dispatch) => {
  let { $head, $anchor } = state.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor))
    return false;
  let above = $head.node(-1), after = $head.indexAfter(-1), type = defaultBlockAt(above.contentMatchAt(after));
  if (!type || !above.canReplaceWith(after, after, type))
    return false;
  if (dispatch) {
    let pos = $head.after(), tr = state.tr.replaceWith(pos, pos, type.createAndFill());
    tr.setSelection(Selection.near(tr.doc.resolve(pos), 1));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var createParagraphNear = (state, dispatch) => {
  let sel = state.selection, { $from, $to } = sel;
  if (sel instanceof AllSelection || $from.parent.inlineContent || $to.parent.inlineContent)
    return false;
  let type = defaultBlockAt($to.parent.contentMatchAt($to.indexAfter()));
  if (!type || !type.isTextblock)
    return false;
  if (dispatch) {
    let side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
    let tr = state.tr.insert(side, type.createAndFill());
    tr.setSelection(TextSelection.create(tr.doc, side + 1));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var liftEmptyBlock = (state, dispatch) => {
  let { $cursor } = state.selection;
  if (!$cursor || $cursor.parent.content.size)
    return false;
  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    let before = $cursor.before();
    if (canSplit(state.doc, before)) {
      if (dispatch)
        dispatch(state.tr.split(before).scrollIntoView());
      return true;
    }
  }
  let range = $cursor.blockRange(), target = range && liftTarget(range);
  if (target == null)
    return false;
  if (dispatch)
    dispatch(state.tr.lift(range, target).scrollIntoView());
  return true;
};
function splitBlockAs(splitNode) {
  return (state, dispatch) => {
    let { $from, $to } = state.selection;
    if (state.selection instanceof NodeSelection && state.selection.node.isBlock) {
      if (!$from.parentOffset || !canSplit(state.doc, $from.pos))
        return false;
      if (dispatch)
        dispatch(state.tr.split($from.pos).scrollIntoView());
      return true;
    }
    if (!$from.depth)
      return false;
    let types = [];
    let splitDepth, deflt, atEnd = false, atStart = false;
    for (let d = $from.depth; ; d--) {
      let node = $from.node(d);
      if (node.isBlock) {
        atEnd = $from.end(d) == $from.pos + ($from.depth - d);
        atStart = $from.start(d) == $from.pos - ($from.depth - d);
        deflt = defaultBlockAt($from.node(d - 1).contentMatchAt($from.indexAfter(d - 1)));
        let splitType = splitNode && splitNode($to.parent, atEnd, $from);
        types.unshift(splitType || (atEnd && deflt ? { type: deflt } : null));
        splitDepth = d;
        break;
      } else {
        if (d == 1)
          return false;
        types.unshift(null);
      }
    }
    let tr = state.tr;
    if (state.selection instanceof TextSelection || state.selection instanceof AllSelection)
      tr.deleteSelection();
    let splitPos = tr.mapping.map($from.pos);
    let can = canSplit(tr.doc, splitPos, types.length, types);
    if (!can) {
      types[0] = deflt ? { type: deflt } : null;
      can = canSplit(tr.doc, splitPos, types.length, types);
    }
    if (!can)
      return false;
    tr.split(splitPos, types.length, types);
    if (!atEnd && atStart && $from.node(splitDepth).type != deflt) {
      let first2 = tr.mapping.map($from.before(splitDepth)), $first = tr.doc.resolve(first2);
      if (deflt && $from.node(splitDepth - 1).canReplaceWith($first.index(), $first.index() + 1, deflt))
        tr.setNodeMarkup(tr.mapping.map($from.before(splitDepth)), deflt);
    }
    if (dispatch)
      dispatch(tr.scrollIntoView());
    return true;
  };
}
var splitBlock = splitBlockAs();
var selectParentNode = (state, dispatch) => {
  let { $from, to } = state.selection, pos;
  let same = $from.sharedDepth(to);
  if (same == 0)
    return false;
  pos = $from.before(same);
  if (dispatch)
    dispatch(state.tr.setSelection(NodeSelection.create(state.doc, pos)));
  return true;
};
var selectAll = (state, dispatch) => {
  if (dispatch)
    dispatch(state.tr.setSelection(new AllSelection(state.doc)));
  return true;
};
function joinMaybeClear(state, $pos, dispatch) {
  let before = $pos.nodeBefore, after = $pos.nodeAfter, index2 = $pos.index();
  if (!before || !after || !before.type.compatibleContent(after.type))
    return false;
  if (!before.content.size && $pos.parent.canReplace(index2 - 1, index2)) {
    if (dispatch)
      dispatch(state.tr.delete($pos.pos - before.nodeSize, $pos.pos).scrollIntoView());
    return true;
  }
  if (!$pos.parent.canReplace(index2, index2 + 1) || !(after.isTextblock || canJoin(state.doc, $pos.pos)))
    return false;
  if (dispatch)
    dispatch(state.tr.join($pos.pos).scrollIntoView());
  return true;
}
function deleteBarrier(state, $cut, dispatch, dir) {
  let before = $cut.nodeBefore, after = $cut.nodeAfter, conn, match;
  let isolated = before.type.spec.isolating || after.type.spec.isolating;
  if (!isolated && joinMaybeClear(state, $cut, dispatch))
    return true;
  let canDelAfter = !isolated && $cut.parent.canReplace($cut.index(), $cut.index() + 1);
  if (canDelAfter && (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) && match.matchType(conn[0] || after.type).validEnd) {
    if (dispatch) {
      let end2 = $cut.pos + after.nodeSize, wrap = Fragment.empty;
      for (let i = conn.length - 1; i >= 0; i--)
        wrap = Fragment.from(conn[i].create(null, wrap));
      wrap = Fragment.from(before.copy(wrap));
      let tr = state.tr.step(new ReplaceAroundStep($cut.pos - 1, end2, $cut.pos, end2, new Slice(wrap, 1, 0), conn.length, true));
      let $joinAt = tr.doc.resolve(end2 + 2 * conn.length);
      if ($joinAt.nodeAfter && $joinAt.nodeAfter.type == before.type && canJoin(tr.doc, $joinAt.pos))
        tr.join($joinAt.pos);
      dispatch(tr.scrollIntoView());
    }
    return true;
  }
  let selAfter = after.type.spec.isolating || dir > 0 && isolated ? null : Selection.findFrom($cut, 1);
  let range = selAfter && selAfter.$from.blockRange(selAfter.$to), target = range && liftTarget(range);
  if (target != null && target >= $cut.depth) {
    if (dispatch)
      dispatch(state.tr.lift(range, target).scrollIntoView());
    return true;
  }
  if (canDelAfter && textblockAt(after, "start", true) && textblockAt(before, "end")) {
    let at = before, wrap = [];
    for (; ; ) {
      wrap.push(at);
      if (at.isTextblock)
        break;
      at = at.lastChild;
    }
    let afterText = after, afterDepth = 1;
    for (; !afterText.isTextblock; afterText = afterText.firstChild)
      afterDepth++;
    if (at.canReplace(at.childCount, at.childCount, afterText.content)) {
      if (dispatch) {
        let end2 = Fragment.empty;
        for (let i = wrap.length - 1; i >= 0; i--)
          end2 = Fragment.from(wrap[i].copy(end2));
        let tr = state.tr.step(new ReplaceAroundStep($cut.pos - wrap.length, $cut.pos + after.nodeSize, $cut.pos + afterDepth, $cut.pos + after.nodeSize - afterDepth, new Slice(end2, wrap.length, 0), 0, true));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  return false;
}
function selectTextblockSide(side) {
  return function(state, dispatch) {
    let sel = state.selection, $pos = side < 0 ? sel.$from : sel.$to;
    let depth = $pos.depth;
    while ($pos.node(depth).isInline) {
      if (!depth)
        return false;
      depth--;
    }
    if (!$pos.node(depth).isTextblock)
      return false;
    if (dispatch)
      dispatch(state.tr.setSelection(TextSelection.create(state.doc, side < 0 ? $pos.start(depth) : $pos.end(depth))));
    return true;
  };
}
var selectTextblockStart = selectTextblockSide(-1);
var selectTextblockEnd = selectTextblockSide(1);
function wrapIn(nodeType, attrs = null) {
  return function(state, dispatch) {
    let { $from, $to } = state.selection;
    let range = $from.blockRange($to), wrapping = range && findWrapping(range, nodeType, attrs);
    if (!wrapping)
      return false;
    if (dispatch)
      dispatch(state.tr.wrap(range, wrapping).scrollIntoView());
    return true;
  };
}
function setBlockType(nodeType, attrs = null) {
  return function(state, dispatch) {
    let applicable = false;
    for (let i = 0; i < state.selection.ranges.length && !applicable; i++) {
      let { $from: { pos: from }, $to: { pos: to } } = state.selection.ranges[i];
      state.doc.nodesBetween(from, to, (node, pos) => {
        if (applicable)
          return false;
        if (!node.isTextblock || node.hasMarkup(nodeType, attrs))
          return;
        if (node.type == nodeType) {
          applicable = true;
        } else {
          let $pos = state.doc.resolve(pos), index2 = $pos.index();
          applicable = $pos.parent.canReplaceWith(index2, index2 + 1, nodeType);
        }
      });
    }
    if (!applicable)
      return false;
    if (dispatch) {
      let tr = state.tr;
      for (let i = 0; i < state.selection.ranges.length; i++) {
        let { $from: { pos: from }, $to: { pos: to } } = state.selection.ranges[i];
        tr.setBlockType(from, to, nodeType, attrs);
      }
      dispatch(tr.scrollIntoView());
    }
    return true;
  };
}
function chainCommands(...commands2) {
  return function(state, dispatch, view) {
    for (let i = 0; i < commands2.length; i++)
      if (commands2[i](state, dispatch, view))
        return true;
    return false;
  };
}
var backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
var del = chainCommands(deleteSelection, joinForward, selectNodeForward);
var pcBaseKeymap = {
  "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
  "Mod-Enter": exitCode,
  "Backspace": backspace,
  "Mod-Backspace": backspace,
  "Shift-Backspace": backspace,
  "Delete": del,
  "Mod-Delete": del,
  "Mod-a": selectAll
};
var macBaseKeymap = {
  "Ctrl-h": pcBaseKeymap["Backspace"],
  "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
  "Ctrl-d": pcBaseKeymap["Delete"],
  "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
  "Alt-Delete": pcBaseKeymap["Mod-Delete"],
  "Alt-d": pcBaseKeymap["Mod-Delete"],
  "Ctrl-a": selectTextblockStart,
  "Ctrl-e": selectTextblockEnd
};
for (let key in pcBaseKeymap)
  macBaseKeymap[key] = pcBaseKeymap[key];
var mac4 = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os != "undefined" && os.platform ? os.platform() == "darwin" : false;

// node_modules/prosemirror-schema-list/dist/index.js
function wrapInList(listType, attrs = null) {
  return function(state, dispatch) {
    let { $from, $to } = state.selection;
    let range = $from.blockRange($to);
    if (!range)
      return false;
    let tr = dispatch ? state.tr : null;
    if (!wrapRangeInList(tr, range, listType, attrs))
      return false;
    if (dispatch)
      dispatch(tr.scrollIntoView());
    return true;
  };
}
function wrapRangeInList(tr, range, listType, attrs = null) {
  let doJoin = false, outerRange = range, doc3 = range.$from.doc;
  if (range.depth >= 2 && range.$from.node(range.depth - 1).type.compatibleContent(listType) && range.startIndex == 0) {
    if (range.$from.index(range.depth - 1) == 0)
      return false;
    let $insert = doc3.resolve(range.start - 2);
    outerRange = new NodeRange($insert, $insert, range.depth);
    if (range.endIndex < range.parent.childCount)
      range = new NodeRange(range.$from, doc3.resolve(range.$to.end(range.depth)), range.depth);
    doJoin = true;
  }
  let wrap = findWrapping(outerRange, listType, attrs, range);
  if (!wrap)
    return false;
  if (tr)
    doWrapInList(tr, range, wrap, doJoin, listType);
  return true;
}
function doWrapInList(tr, range, wrappers, joinBefore, listType) {
  let content = Fragment.empty;
  for (let i = wrappers.length - 1; i >= 0; i--)
    content = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
  tr.step(new ReplaceAroundStep(range.start - (joinBefore ? 2 : 0), range.end, range.start, range.end, new Slice(content, 0, 0), wrappers.length, true));
  let found2 = 0;
  for (let i = 0; i < wrappers.length; i++)
    if (wrappers[i].type == listType)
      found2 = i + 1;
  let splitDepth = wrappers.length - found2;
  let splitPos = range.start + wrappers.length - (joinBefore ? 2 : 0), parent = range.parent;
  for (let i = range.startIndex, e = range.endIndex, first2 = true; i < e; i++, first2 = false) {
    if (!first2 && canSplit(tr.doc, splitPos, splitDepth)) {
      tr.split(splitPos, splitDepth);
      splitPos += 2 * splitDepth;
    }
    splitPos += parent.child(i).nodeSize;
  }
  return tr;
}
function liftListItem(itemType) {
  return function(state, dispatch) {
    let { $from, $to } = state.selection;
    let range = $from.blockRange($to, (node) => node.childCount > 0 && node.firstChild.type == itemType);
    if (!range)
      return false;
    if (!dispatch)
      return true;
    if ($from.node(range.depth - 1).type == itemType)
      return liftToOuterList(state, dispatch, itemType, range);
    else
      return liftOutOfList(state, dispatch, range);
  };
}
function liftToOuterList(state, dispatch, itemType, range) {
  let tr = state.tr, end2 = range.end, endOfList = range.$to.end(range.depth);
  if (end2 < endOfList) {
    tr.step(new ReplaceAroundStep(end2 - 1, endOfList, end2, endOfList, new Slice(Fragment.from(itemType.create(null, range.parent.copy())), 1, 0), 1, true));
    range = new NodeRange(tr.doc.resolve(range.$from.pos), tr.doc.resolve(endOfList), range.depth);
  }
  const target = liftTarget(range);
  if (target == null)
    return false;
  tr.lift(range, target);
  let $after = tr.doc.resolve(tr.mapping.map(end2, -1) - 1);
  if (canJoin(tr.doc, $after.pos) && $after.nodeBefore.type == $after.nodeAfter.type)
    tr.join($after.pos);
  dispatch(tr.scrollIntoView());
  return true;
}
function liftOutOfList(state, dispatch, range) {
  let tr = state.tr, list = range.parent;
  for (let pos = range.end, i = range.endIndex - 1, e = range.startIndex; i > e; i--) {
    pos -= list.child(i).nodeSize;
    tr.delete(pos - 1, pos + 1);
  }
  let $start = tr.doc.resolve(range.start), item = $start.nodeAfter;
  if (tr.mapping.map(range.end) != range.start + $start.nodeAfter.nodeSize)
    return false;
  let atStart = range.startIndex == 0, atEnd = range.endIndex == list.childCount;
  let parent = $start.node(-1), indexBefore = $start.index(-1);
  if (!parent.canReplace(indexBefore + (atStart ? 0 : 1), indexBefore + 1, item.content.append(atEnd ? Fragment.empty : Fragment.from(list))))
    return false;
  let start2 = $start.pos, end2 = start2 + item.nodeSize;
  tr.step(new ReplaceAroundStep(start2 - (atStart ? 1 : 0), end2 + (atEnd ? 1 : 0), start2 + 1, end2 - 1, new Slice((atStart ? Fragment.empty : Fragment.from(list.copy(Fragment.empty))).append(atEnd ? Fragment.empty : Fragment.from(list.copy(Fragment.empty))), atStart ? 0 : 1, atEnd ? 0 : 1), atStart ? 0 : 1));
  dispatch(tr.scrollIntoView());
  return true;
}
function sinkListItem(itemType) {
  return function(state, dispatch) {
    let { $from, $to } = state.selection;
    let range = $from.blockRange($to, (node) => node.childCount > 0 && node.firstChild.type == itemType);
    if (!range)
      return false;
    let startIndex = range.startIndex;
    if (startIndex == 0)
      return false;
    let parent = range.parent, nodeBefore = parent.child(startIndex - 1);
    if (nodeBefore.type != itemType)
      return false;
    if (dispatch) {
      let nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type == parent.type;
      let inner = Fragment.from(nestedBefore ? itemType.create() : null);
      let slice = new Slice(Fragment.from(itemType.create(null, Fragment.from(parent.type.create(null, inner)))), nestedBefore ? 3 : 1, 0);
      let before = range.start, after = range.end;
      dispatch(state.tr.step(new ReplaceAroundStep(before - (nestedBefore ? 3 : 1), after, before, after, slice, 1, true)).scrollIntoView());
    }
    return true;
  };
}

// node_modules/@tiptap/core/dist/index.js
function createChainableState(config2) {
  const { state, transaction } = config2;
  let { selection } = transaction;
  let { doc: doc3 } = transaction;
  let { storedMarks } = transaction;
  return {
    ...state,
    apply: state.apply.bind(state),
    applyTransaction: state.applyTransaction.bind(state),
    plugins: state.plugins,
    schema: state.schema,
    reconfigure: state.reconfigure.bind(state),
    toJSON: state.toJSON.bind(state),
    get storedMarks() {
      return storedMarks;
    },
    get selection() {
      return selection;
    },
    get doc() {
      return doc3;
    },
    get tr() {
      selection = transaction.selection;
      doc3 = transaction.doc;
      storedMarks = transaction.storedMarks;
      return transaction;
    }
  };
}
var CommandManager = class {
  constructor(props) {
    this.editor = props.editor;
    this.rawCommands = this.editor.extensionManager.commands;
    this.customState = props.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands, editor, state } = this;
    const { view } = editor;
    const { tr } = state;
    const props = this.buildProps(tr);
    return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      const method = (...args) => {
        const callback = command2(...args)(props);
        if (!tr.getMeta("preventDispatch") && !this.hasCustomState) {
          view.dispatch(tr);
        }
        return callback;
      };
      return [name, method];
    }));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(startTr, shouldDispatch = true) {
    const { rawCommands, editor, state } = this;
    const { view } = editor;
    const callbacks = [];
    const hasStartTransaction = !!startTr;
    const tr = startTr || state.tr;
    const run = () => {
      if (!hasStartTransaction && shouldDispatch && !tr.getMeta("preventDispatch") && !this.hasCustomState) {
        view.dispatch(tr);
      }
      return callbacks.every((callback) => callback === true);
    };
    const chain = {
      ...Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
        const chainedCommand = (...args) => {
          const props = this.buildProps(tr, shouldDispatch);
          const callback = command2(...args)(props);
          callbacks.push(callback);
          return chain;
        };
        return [name, chainedCommand];
      })),
      run
    };
    return chain;
  }
  createCan(startTr) {
    const { rawCommands, state } = this;
    const dispatch = false;
    const tr = startTr || state.tr;
    const props = this.buildProps(tr, dispatch);
    const formattedCommands = Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      return [name, (...args) => command2(...args)({ ...props, dispatch: void 0 })];
    }));
    return {
      ...formattedCommands,
      chain: () => this.createChain(tr, dispatch)
    };
  }
  buildProps(tr, shouldDispatch = true) {
    const { rawCommands, editor, state } = this;
    const { view } = editor;
    const props = {
      tr,
      editor,
      view,
      state: createChainableState({
        state,
        transaction: tr
      }),
      dispatch: shouldDispatch ? () => void 0 : void 0,
      chain: () => this.createChain(tr, shouldDispatch),
      can: () => this.createCan(tr),
      get commands() {
        return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
          return [name, (...args) => command2(...args)(props)];
        }));
      }
    };
    return props;
  }
};
function getExtensionField(extension, field, context) {
  if (extension.config[field] === void 0 && extension.parent) {
    return getExtensionField(extension.parent, field, context);
  }
  if (typeof extension.config[field] === "function") {
    const value2 = extension.config[field].bind({
      ...context,
      parent: extension.parent ? getExtensionField(extension.parent, field, context) : null
    });
    return value2;
  }
  return extension.config[field];
}
function splitExtensions(extensions) {
  const baseExtensions = extensions.filter((extension) => extension.type === "extension");
  const nodeExtensions = extensions.filter((extension) => extension.type === "node");
  const markExtensions = extensions.filter((extension) => extension.type === "mark");
  return {
    baseExtensions,
    nodeExtensions,
    markExtensions
  };
}
function getNodeType(nameOrType, schema) {
  if (typeof nameOrType === "string") {
    if (!schema.nodes[nameOrType]) {
      throw Error(`There is no node type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema.nodes[nameOrType];
  }
  return nameOrType;
}
function isFunction(value2) {
  return typeof value2 === "function";
}
function callOrReturn(value2, context = void 0, ...props) {
  if (isFunction(value2)) {
    if (context) {
      return value2.bind(context)(...props);
    }
    return value2(...props);
  }
  return value2;
}
function isRegExp(value2) {
  return Object.prototype.toString.call(value2) === "[object RegExp]";
}
function getType(value2) {
  return Object.prototype.toString.call(value2).slice(8, -1);
}
function isPlainObject(value2) {
  if (getType(value2) !== "Object") {
    return false;
  }
  return value2.constructor === Object && Object.getPrototypeOf(value2) === Object.prototype;
}
function mergeDeep(target, source) {
  const output = { ...target };
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isPlainObject(source[key]) && isPlainObject(target[key])) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
var Extension = class _Extension {
  constructor(config2 = {}) {
    this.type = "extension";
    this.name = "extension";
    this.parent = null;
    this.child = null;
    this.config = {
      name: this.name,
      defaultOptions: {}
    };
    this.config = {
      ...this.config,
      ...config2
    };
    this.name = this.config.name;
    if (config2.defaultOptions && Object.keys(config2.defaultOptions).length > 0) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
    }
    this.options = this.config.defaultOptions;
    if (this.config.addOptions) {
      this.options = callOrReturn(getExtensionField(this, "addOptions", {
        name: this.name
      }));
    }
    this.storage = callOrReturn(getExtensionField(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(config2 = {}) {
    return new _Extension(config2);
  }
  configure(options = {}) {
    const extension = this.extend({
      ...this.config,
      addOptions: () => {
        return mergeDeep(this.options, options);
      }
    });
    extension.name = this.name;
    extension.parent = this.parent;
    return extension;
  }
  extend(extendedConfig = {}) {
    const extension = new _Extension({ ...this.config, ...extendedConfig });
    extension.parent = this;
    this.child = extension;
    extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
    if (extendedConfig.defaultOptions && Object.keys(extendedConfig.defaultOptions).length > 0) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
    }
    extension.options = callOrReturn(getExtensionField(extension, "addOptions", {
      name: extension.name
    }));
    extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
      name: extension.name,
      options: extension.options
    }));
    return extension;
  }
};
function getTextBetween(startNode, range, options) {
  const { from, to } = range;
  const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
  let text = "";
  startNode.nodesBetween(from, to, (node, pos, parent, index2) => {
    var _a;
    if (node.isBlock && pos > from) {
      text += blockSeparator;
    }
    const textSerializer = textSerializers === null || textSerializers === void 0 ? void 0 : textSerializers[node.type.name];
    if (textSerializer) {
      if (parent) {
        text += textSerializer({
          node,
          pos,
          parent,
          index: index2,
          range
        });
      }
      return false;
    }
    if (node.isText) {
      text += (_a = node === null || node === void 0 ? void 0 : node.text) === null || _a === void 0 ? void 0 : _a.slice(Math.max(from, pos) - pos, to - pos);
    }
  });
  return text;
}
function getTextSerializersFromSchema(schema) {
  return Object.fromEntries(Object.entries(schema.nodes).filter(([, node]) => node.spec.toText).map(([name, node]) => [name, node.spec.toText]));
}
var ClipboardTextSerializer = Extension.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor } = this;
            const { state, schema } = editor;
            const { doc: doc3, selection } = state;
            const { ranges } = selection;
            const from = Math.min(...ranges.map((range2) => range2.$from.pos));
            const to = Math.max(...ranges.map((range2) => range2.$to.pos));
            const textSerializers = getTextSerializersFromSchema(schema);
            const range = { from, to };
            return getTextBetween(doc3, range, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers
            });
          }
        }
      })
    ];
  }
});
var blur = () => ({ editor, view }) => {
  requestAnimationFrame(() => {
    var _a;
    if (!editor.isDestroyed) {
      view.dom.blur();
      (_a = window === null || window === void 0 ? void 0 : window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
    }
  });
  return true;
};
var clearContent = (emitUpdate = false) => ({ commands: commands2 }) => {
  return commands2.setContent("", emitUpdate);
};
var clearNodes = () => ({ state, tr, dispatch }) => {
  const { selection } = tr;
  const { ranges } = selection;
  if (!dispatch) {
    return true;
  }
  ranges.forEach(({ $from, $to }) => {
    state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
      if (node.type.isText) {
        return;
      }
      const { doc: doc3, mapping } = tr;
      const $mappedFrom = doc3.resolve(mapping.map(pos));
      const $mappedTo = doc3.resolve(mapping.map(pos + node.nodeSize));
      const nodeRange = $mappedFrom.blockRange($mappedTo);
      if (!nodeRange) {
        return;
      }
      const targetLiftDepth = liftTarget(nodeRange);
      if (node.type.isTextblock) {
        const { defaultType } = $mappedFrom.parent.contentMatchAt($mappedFrom.index());
        tr.setNodeMarkup(nodeRange.start, defaultType);
      }
      if (targetLiftDepth || targetLiftDepth === 0) {
        tr.lift(nodeRange, targetLiftDepth);
      }
    });
  });
  return true;
};
var command = (fn2) => (props) => {
  return fn2(props);
};
var createParagraphNear2 = () => ({ state, dispatch }) => {
  return createParagraphNear(state, dispatch);
};
var cut = (originRange, targetPos) => ({ editor, tr }) => {
  const { state } = editor;
  const contentSlice = state.doc.slice(originRange.from, originRange.to);
  tr.deleteRange(originRange.from, originRange.to);
  const newPos = tr.mapping.map(targetPos);
  tr.insert(newPos, contentSlice.content);
  tr.setSelection(new TextSelection(tr.doc.resolve(newPos - 1)));
  return true;
};
var deleteCurrentNode = () => ({ tr, dispatch }) => {
  const { selection } = tr;
  const currentNode = selection.$anchor.node();
  if (currentNode.content.size > 0) {
    return false;
  }
  const $pos = tr.selection.$anchor;
  for (let depth = $pos.depth; depth > 0; depth -= 1) {
    const node = $pos.node(depth);
    if (node.type === currentNode.type) {
      if (dispatch) {
        const from = $pos.before(depth);
        const to = $pos.after(depth);
        tr.delete(from, to).scrollIntoView();
      }
      return true;
    }
  }
  return false;
};
var deleteNode = (typeOrName) => ({ tr, state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  const $pos = tr.selection.$anchor;
  for (let depth = $pos.depth; depth > 0; depth -= 1) {
    const node = $pos.node(depth);
    if (node.type === type) {
      if (dispatch) {
        const from = $pos.before(depth);
        const to = $pos.after(depth);
        tr.delete(from, to).scrollIntoView();
      }
      return true;
    }
  }
  return false;
};
var deleteRange = (range) => ({ tr, dispatch }) => {
  const { from, to } = range;
  if (dispatch) {
    tr.delete(from, to);
  }
  return true;
};
var deleteSelection2 = () => ({ state, dispatch }) => {
  return deleteSelection(state, dispatch);
};
var enter = () => ({ commands: commands2 }) => {
  return commands2.keyboardShortcut("Enter");
};
var exitCode2 = () => ({ state, dispatch }) => {
  return exitCode(state, dispatch);
};
function objectIncludes(object1, object2, options = { strict: true }) {
  const keys4 = Object.keys(object2);
  if (!keys4.length) {
    return true;
  }
  return keys4.every((key) => {
    if (options.strict) {
      return object2[key] === object1[key];
    }
    if (isRegExp(object2[key])) {
      return object2[key].test(object1[key]);
    }
    return object2[key] === object1[key];
  });
}
function findMarkInSet(marks, type, attributes = {}) {
  return marks.find((item) => {
    return item.type === type && objectIncludes(
      // Only check equality for the attributes that are provided
      Object.fromEntries(Object.keys(attributes).map((k) => [k, item.attrs[k]])),
      attributes
    );
  });
}
function isMarkInSet(marks, type, attributes = {}) {
  return !!findMarkInSet(marks, type, attributes);
}
function getMarkRange($pos, type, attributes) {
  var _a;
  if (!$pos || !type) {
    return;
  }
  let start2 = $pos.parent.childAfter($pos.parentOffset);
  if (!start2.node || !start2.node.marks.some((mark2) => mark2.type === type)) {
    start2 = $pos.parent.childBefore($pos.parentOffset);
  }
  if (!start2.node || !start2.node.marks.some((mark2) => mark2.type === type)) {
    return;
  }
  attributes = attributes || ((_a = start2.node.marks[0]) === null || _a === void 0 ? void 0 : _a.attrs);
  const mark = findMarkInSet([...start2.node.marks], type, attributes);
  if (!mark) {
    return;
  }
  let startIndex = start2.index;
  let startPos = $pos.start() + start2.offset;
  let endIndex = startIndex + 1;
  let endPos = startPos + start2.node.nodeSize;
  while (startIndex > 0 && isMarkInSet([...$pos.parent.child(startIndex - 1).marks], type, attributes)) {
    startIndex -= 1;
    startPos -= $pos.parent.child(startIndex).nodeSize;
  }
  while (endIndex < $pos.parent.childCount && isMarkInSet([...$pos.parent.child(endIndex).marks], type, attributes)) {
    endPos += $pos.parent.child(endIndex).nodeSize;
    endIndex += 1;
  }
  return {
    from: startPos,
    to: endPos
  };
}
function getMarkType(nameOrType, schema) {
  if (typeof nameOrType === "string") {
    if (!schema.marks[nameOrType]) {
      throw Error(`There is no mark type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema.marks[nameOrType];
  }
  return nameOrType;
}
var extendMarkRange = (typeOrName, attributes = {}) => ({ tr, state, dispatch }) => {
  const type = getMarkType(typeOrName, state.schema);
  const { doc: doc3, selection } = tr;
  const { $from, from, to } = selection;
  if (dispatch) {
    const range = getMarkRange($from, type, attributes);
    if (range && range.from <= from && range.to >= to) {
      const newSelection = TextSelection.create(doc3, range.from, range.to);
      tr.setSelection(newSelection);
    }
  }
  return true;
};
var first = (commands2) => (props) => {
  const items = typeof commands2 === "function" ? commands2(props) : commands2;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i](props)) {
      return true;
    }
  }
  return false;
};
function isTextSelection(value2) {
  return value2 instanceof TextSelection;
}
function minMax(value2 = 0, min2 = 0, max2 = 0) {
  return Math.min(Math.max(value2, min2), max2);
}
function resolveFocusPosition(doc3, position = null) {
  if (!position) {
    return null;
  }
  const selectionAtStart = Selection.atStart(doc3);
  const selectionAtEnd = Selection.atEnd(doc3);
  if (position === "start" || position === true) {
    return selectionAtStart;
  }
  if (position === "end") {
    return selectionAtEnd;
  }
  const minPos = selectionAtStart.from;
  const maxPos = selectionAtEnd.to;
  if (position === "all") {
    return TextSelection.create(doc3, minMax(0, minPos, maxPos), minMax(doc3.content.size, minPos, maxPos));
  }
  return TextSelection.create(doc3, minMax(position, minPos, maxPos), minMax(position, minPos, maxPos));
}
function isAndroid() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function isiOS() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var focus = (position = null, options = {}) => ({ editor, view, tr, dispatch }) => {
  options = {
    scrollIntoView: true,
    ...options
  };
  const delayedFocus = () => {
    if (isiOS() || isAndroid()) {
      view.dom.focus();
    }
    requestAnimationFrame(() => {
      if (!editor.isDestroyed) {
        view.focus();
        if (options === null || options === void 0 ? void 0 : options.scrollIntoView) {
          editor.commands.scrollIntoView();
        }
      }
    });
  };
  if (view.hasFocus() && position === null || position === false) {
    return true;
  }
  if (dispatch && position === null && !isTextSelection(editor.state.selection)) {
    delayedFocus();
    return true;
  }
  const selection = resolveFocusPosition(tr.doc, position) || editor.state.selection;
  const isSameSelection = editor.state.selection.eq(selection);
  if (dispatch) {
    if (!isSameSelection) {
      tr.setSelection(selection);
    }
    if (isSameSelection && tr.storedMarks) {
      tr.setStoredMarks(tr.storedMarks);
    }
    delayedFocus();
  }
  return true;
};
var forEach = (items, fn2) => (props) => {
  return items.every((item, index2) => fn2(item, { ...props, index: index2 }));
};
var insertContent = (value2, options) => ({ tr, commands: commands2 }) => {
  return commands2.insertContentAt({ from: tr.selection.from, to: tr.selection.to }, value2, options);
};
var removeWhitespaces = (node) => {
  const children = node.childNodes;
  for (let i = children.length - 1; i >= 0; i -= 1) {
    const child = children[i];
    if (child.nodeType === 3 && child.nodeValue && /^(\n\s\s|\n)$/.test(child.nodeValue)) {
      node.removeChild(child);
    } else if (child.nodeType === 1) {
      removeWhitespaces(child);
    }
  }
  return node;
};
function elementFromString(value2) {
  const wrappedValue = `<body>${value2}</body>`;
  const html = new window.DOMParser().parseFromString(wrappedValue, "text/html").body;
  return removeWhitespaces(html);
}
function createNodeFromContent(content, schema, options) {
  if (content instanceof Node || content instanceof Fragment) {
    return content;
  }
  options = {
    slice: true,
    parseOptions: {},
    ...options
  };
  const isJSONContent = typeof content === "object" && content !== null;
  const isTextContent = typeof content === "string";
  if (isJSONContent) {
    try {
      const isArrayContent = Array.isArray(content) && content.length > 0;
      if (isArrayContent) {
        return Fragment.fromArray(content.map((item) => schema.nodeFromJSON(item)));
      }
      const node = schema.nodeFromJSON(content);
      if (options.errorOnInvalidContent) {
        node.check();
      }
      return node;
    } catch (error) {
      if (options.errorOnInvalidContent) {
        throw new Error("[tiptap error]: Invalid JSON content", { cause: error });
      }
      console.warn("[tiptap warn]: Invalid content.", "Passed value:", content, "Error:", error);
      return createNodeFromContent("", schema, options);
    }
  }
  if (isTextContent) {
    if (options.errorOnInvalidContent) {
      let hasInvalidContent = false;
      let invalidContent = "";
      const contentCheckSchema = new Schema({
        topNode: schema.spec.topNode,
        marks: schema.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: schema.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (e) => {
                  hasInvalidContent = true;
                  invalidContent = typeof e === "string" ? e : e.outerHTML;
                  return null;
                }
              }
            ]
          }
        })
      });
      if (options.slice) {
        DOMParser.fromSchema(contentCheckSchema).parseSlice(elementFromString(content), options.parseOptions);
      } else {
        DOMParser.fromSchema(contentCheckSchema).parse(elementFromString(content), options.parseOptions);
      }
      if (options.errorOnInvalidContent && hasInvalidContent) {
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${invalidContent}`) });
      }
    }
    const parser = DOMParser.fromSchema(schema);
    if (options.slice) {
      return parser.parseSlice(elementFromString(content), options.parseOptions).content;
    }
    return parser.parse(elementFromString(content), options.parseOptions);
  }
  return createNodeFromContent("", schema, options);
}
function selectionToInsertionEnd2(tr, startLen, bias) {
  const last = tr.steps.length - 1;
  if (last < startLen) {
    return;
  }
  const step = tr.steps[last];
  if (!(step instanceof ReplaceStep || step instanceof ReplaceAroundStep)) {
    return;
  }
  const map = tr.mapping.maps[last];
  let end2 = 0;
  map.forEach((_from, _to, _newFrom, newTo) => {
    if (end2 === 0) {
      end2 = newTo;
    }
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end2), bias));
}
var isFragment = (nodeOrFragment) => {
  return !("type" in nodeOrFragment);
};
var insertContentAt = (position, value2, options) => ({ tr, dispatch, editor }) => {
  var _a;
  if (dispatch) {
    options = {
      parseOptions: editor.options.parseOptions,
      updateSelection: true,
      applyInputRules: false,
      applyPasteRules: false,
      ...options
    };
    let content;
    try {
      content = createNodeFromContent(value2, editor.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...options.parseOptions
        },
        errorOnInvalidContent: (_a = options.errorOnInvalidContent) !== null && _a !== void 0 ? _a : editor.options.enableContentCheck
      });
    } catch (e) {
      editor.emit("contentError", {
        editor,
        error: e,
        disableCollaboration: () => {
          if (editor.storage.collaboration) {
            editor.storage.collaboration.isDisabled = true;
          }
        }
      });
      return false;
    }
    let { from, to } = typeof position === "number" ? { from: position, to: position } : { from: position.from, to: position.to };
    let isOnlyTextContent = true;
    let isOnlyBlockContent = true;
    const nodes = isFragment(content) ? content : [content];
    nodes.forEach((node) => {
      node.check();
      isOnlyTextContent = isOnlyTextContent ? node.isText && node.marks.length === 0 : false;
      isOnlyBlockContent = isOnlyBlockContent ? node.isBlock : false;
    });
    if (from === to && isOnlyBlockContent) {
      const { parent } = tr.doc.resolve(from);
      const isEmptyTextBlock = parent.isTextblock && !parent.type.spec.code && !parent.childCount;
      if (isEmptyTextBlock) {
        from -= 1;
        to += 1;
      }
    }
    let newContent;
    if (isOnlyTextContent) {
      if (Array.isArray(value2)) {
        newContent = value2.map((v) => v.text || "").join("");
      } else if (value2 instanceof Fragment) {
        let text = "";
        value2.forEach((node) => {
          if (node.text) {
            text += node.text;
          }
        });
        newContent = text;
      } else if (typeof value2 === "object" && !!value2 && !!value2.text) {
        newContent = value2.text;
      } else {
        newContent = value2;
      }
      tr.insertText(newContent, from, to);
    } else {
      newContent = content;
      tr.replaceWith(from, to, newContent);
    }
    if (options.updateSelection) {
      selectionToInsertionEnd2(tr, tr.steps.length - 1, -1);
    }
    if (options.applyInputRules) {
      tr.setMeta("applyInputRules", { from, text: newContent });
    }
    if (options.applyPasteRules) {
      tr.setMeta("applyPasteRules", { from, text: newContent });
    }
  }
  return true;
};
var joinUp2 = () => ({ state, dispatch }) => {
  return joinUp(state, dispatch);
};
var joinDown2 = () => ({ state, dispatch }) => {
  return joinDown(state, dispatch);
};
var joinBackward2 = () => ({ state, dispatch }) => {
  return joinBackward(state, dispatch);
};
var joinForward2 = () => ({ state, dispatch }) => {
  return joinForward(state, dispatch);
};
var joinItemBackward = () => ({ state, dispatch, tr }) => {
  try {
    const point = joinPoint(state.doc, state.selection.$from.pos, -1);
    if (point === null || point === void 0) {
      return false;
    }
    tr.join(point, 2);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  } catch {
    return false;
  }
};
var joinItemForward = () => ({ state, dispatch, tr }) => {
  try {
    const point = joinPoint(state.doc, state.selection.$from.pos, 1);
    if (point === null || point === void 0) {
      return false;
    }
    tr.join(point, 2);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  } catch {
    return false;
  }
};
var joinTextblockBackward2 = () => ({ state, dispatch }) => {
  return joinTextblockBackward(state, dispatch);
};
var joinTextblockForward2 = () => ({ state, dispatch }) => {
  return joinTextblockForward(state, dispatch);
};
function isMacOS() {
  return typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
}
function normalizeKeyName(name) {
  const parts2 = name.split(/-(?!$)/);
  let result = parts2[parts2.length - 1];
  if (result === "Space") {
    result = " ";
  }
  let alt;
  let ctrl;
  let shift2;
  let meta;
  for (let i = 0; i < parts2.length - 1; i += 1) {
    const mod = parts2[i];
    if (/^(cmd|meta|m)$/i.test(mod)) {
      meta = true;
    } else if (/^a(lt)?$/i.test(mod)) {
      alt = true;
    } else if (/^(c|ctrl|control)$/i.test(mod)) {
      ctrl = true;
    } else if (/^s(hift)?$/i.test(mod)) {
      shift2 = true;
    } else if (/^mod$/i.test(mod)) {
      if (isiOS() || isMacOS()) {
        meta = true;
      } else {
        ctrl = true;
      }
    } else {
      throw new Error(`Unrecognized modifier name: ${mod}`);
    }
  }
  if (alt) {
    result = `Alt-${result}`;
  }
  if (ctrl) {
    result = `Ctrl-${result}`;
  }
  if (meta) {
    result = `Meta-${result}`;
  }
  if (shift2) {
    result = `Shift-${result}`;
  }
  return result;
}
var keyboardShortcut = (name) => ({ editor, view, tr, dispatch }) => {
  const keys4 = normalizeKeyName(name).split(/-(?!$)/);
  const key = keys4.find((item) => !["Alt", "Ctrl", "Meta", "Shift"].includes(item));
  const event = new KeyboardEvent("keydown", {
    key: key === "Space" ? " " : key,
    altKey: keys4.includes("Alt"),
    ctrlKey: keys4.includes("Ctrl"),
    metaKey: keys4.includes("Meta"),
    shiftKey: keys4.includes("Shift"),
    bubbles: true,
    cancelable: true
  });
  const capturedTransaction = editor.captureTransaction(() => {
    view.someProp("handleKeyDown", (f) => f(view, event));
  });
  capturedTransaction === null || capturedTransaction === void 0 ? void 0 : capturedTransaction.steps.forEach((step) => {
    const newStep = step.map(tr.mapping);
    if (newStep && dispatch) {
      tr.maybeStep(newStep);
    }
  });
  return true;
};
function isNodeActive(state, typeOrName, attributes = {}) {
  const { from, to, empty: empty3 } = state.selection;
  const type = typeOrName ? getNodeType(typeOrName, state.schema) : null;
  const nodeRanges = [];
  state.doc.nodesBetween(from, to, (node, pos) => {
    if (node.isText) {
      return;
    }
    const relativeFrom = Math.max(from, pos);
    const relativeTo = Math.min(to, pos + node.nodeSize);
    nodeRanges.push({
      node,
      from: relativeFrom,
      to: relativeTo
    });
  });
  const selectionRange = to - from;
  const matchedNodeRanges = nodeRanges.filter((nodeRange) => {
    if (!type) {
      return true;
    }
    return type.name === nodeRange.node.type.name;
  }).filter((nodeRange) => objectIncludes(nodeRange.node.attrs, attributes, { strict: false }));
  if (empty3) {
    return !!matchedNodeRanges.length;
  }
  const range = matchedNodeRanges.reduce((sum, nodeRange) => sum + nodeRange.to - nodeRange.from, 0);
  return range >= selectionRange;
}
var lift2 = (typeOrName, attributes = {}) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  const isActive = isNodeActive(state, type, attributes);
  if (!isActive) {
    return false;
  }
  return lift(state, dispatch);
};
var liftEmptyBlock2 = () => ({ state, dispatch }) => {
  return liftEmptyBlock(state, dispatch);
};
var liftListItem2 = (typeOrName) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  return liftListItem(type)(state, dispatch);
};
var newlineInCode2 = () => ({ state, dispatch }) => {
  return newlineInCode(state, dispatch);
};
function getSchemaTypeNameByName(name, schema) {
  if (schema.nodes[name]) {
    return "node";
  }
  if (schema.marks[name]) {
    return "mark";
  }
  return null;
}
function deleteProps(obj, propOrProps) {
  const props = typeof propOrProps === "string" ? [propOrProps] : propOrProps;
  return Object.keys(obj).reduce((newObj, prop) => {
    if (!props.includes(prop)) {
      newObj[prop] = obj[prop];
    }
    return newObj;
  }, {});
}
var resetAttributes = (typeOrName, attributes) => ({ tr, state, dispatch }) => {
  let nodeType = null;
  let markType = null;
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (!schemaType) {
    return false;
  }
  if (schemaType === "node") {
    nodeType = getNodeType(typeOrName, state.schema);
  }
  if (schemaType === "mark") {
    markType = getMarkType(typeOrName, state.schema);
  }
  if (dispatch) {
    tr.selection.ranges.forEach((range) => {
      state.doc.nodesBetween(range.$from.pos, range.$to.pos, (node, pos) => {
        if (nodeType && nodeType === node.type) {
          tr.setNodeMarkup(pos, void 0, deleteProps(node.attrs, attributes));
        }
        if (markType && node.marks.length) {
          node.marks.forEach((mark) => {
            if (markType === mark.type) {
              tr.addMark(pos, pos + node.nodeSize, markType.create(deleteProps(mark.attrs, attributes)));
            }
          });
        }
      });
    });
  }
  return true;
};
var scrollIntoView = () => ({ tr, dispatch }) => {
  if (dispatch) {
    tr.scrollIntoView();
  }
  return true;
};
var selectAll2 = () => ({ tr, dispatch }) => {
  if (dispatch) {
    const selection = new AllSelection(tr.doc);
    tr.setSelection(selection);
  }
  return true;
};
var selectNodeBackward2 = () => ({ state, dispatch }) => {
  return selectNodeBackward(state, dispatch);
};
var selectNodeForward2 = () => ({ state, dispatch }) => {
  return selectNodeForward(state, dispatch);
};
var selectParentNode2 = () => ({ state, dispatch }) => {
  return selectParentNode(state, dispatch);
};
var selectTextblockEnd2 = () => ({ state, dispatch }) => {
  return selectTextblockEnd(state, dispatch);
};
var selectTextblockStart2 = () => ({ state, dispatch }) => {
  return selectTextblockStart(state, dispatch);
};
function createDocument(content, schema, parseOptions = {}, options = {}) {
  return createNodeFromContent(content, schema, {
    slice: false,
    parseOptions,
    errorOnInvalidContent: options.errorOnInvalidContent
  });
}
var setContent = (content, emitUpdate = false, parseOptions = {}, options = {}) => ({ editor, tr, dispatch, commands: commands2 }) => {
  var _a, _b;
  const { doc: doc3 } = tr;
  if (parseOptions.preserveWhitespace !== "full") {
    const document2 = createDocument(content, editor.schema, parseOptions, {
      errorOnInvalidContent: (_a = options.errorOnInvalidContent) !== null && _a !== void 0 ? _a : editor.options.enableContentCheck
    });
    if (dispatch) {
      tr.replaceWith(0, doc3.content.size, document2).setMeta("preventUpdate", !emitUpdate);
    }
    return true;
  }
  if (dispatch) {
    tr.setMeta("preventUpdate", !emitUpdate);
  }
  return commands2.insertContentAt({ from: 0, to: doc3.content.size }, content, {
    parseOptions,
    errorOnInvalidContent: (_b = options.errorOnInvalidContent) !== null && _b !== void 0 ? _b : editor.options.enableContentCheck
  });
};
function getMarkAttributes(state, typeOrName) {
  const type = getMarkType(typeOrName, state.schema);
  const { from, to, empty: empty3 } = state.selection;
  const marks = [];
  if (empty3) {
    if (state.storedMarks) {
      marks.push(...state.storedMarks);
    }
    marks.push(...state.selection.$head.marks());
  } else {
    state.doc.nodesBetween(from, to, (node) => {
      marks.push(...node.marks);
    });
  }
  const mark = marks.find((markItem) => markItem.type.name === type.name);
  if (!mark) {
    return {};
  }
  return { ...mark.attrs };
}
function defaultBlockAt2(match) {
  for (let i = 0; i < match.edgeCount; i += 1) {
    const { type } = match.edge(i);
    if (type.isTextblock && !type.hasRequiredAttrs()) {
      return type;
    }
  }
  return null;
}
function findParentNodeClosestToPos($pos, predicate) {
  for (let i = $pos.depth; i > 0; i -= 1) {
    const node = $pos.node(i);
    if (predicate(node)) {
      return {
        pos: i > 0 ? $pos.before(i) : 0,
        start: $pos.start(i),
        depth: i,
        node
      };
    }
  }
}
function findParentNode(predicate) {
  return (selection) => findParentNodeClosestToPos(selection.$from, predicate);
}
function getText2(node, options) {
  const range = {
    from: 0,
    to: node.content.size
  };
  return getTextBetween(node, range, options);
}
function getSplittedAttributes(extensionAttributes, typeName, attributes) {
  return Object.fromEntries(Object.entries(attributes).filter(([name]) => {
    const extensionAttribute = extensionAttributes.find((item) => {
      return item.type === typeName && item.name === name;
    });
    if (!extensionAttribute) {
      return false;
    }
    return extensionAttribute.attribute.keepOnSplit;
  }));
}
function isMarkActive(state, typeOrName, attributes = {}) {
  const { empty: empty3, ranges } = state.selection;
  const type = typeOrName ? getMarkType(typeOrName, state.schema) : null;
  if (empty3) {
    return !!(state.storedMarks || state.selection.$from.marks()).filter((mark) => {
      if (!type) {
        return true;
      }
      return type.name === mark.type.name;
    }).find((mark) => objectIncludes(mark.attrs, attributes, { strict: false }));
  }
  let selectionRange = 0;
  const markRanges = [];
  ranges.forEach(({ $from, $to }) => {
    const from = $from.pos;
    const to = $to.pos;
    state.doc.nodesBetween(from, to, (node, pos) => {
      if (!node.isText && !node.marks.length) {
        return;
      }
      const relativeFrom = Math.max(from, pos);
      const relativeTo = Math.min(to, pos + node.nodeSize);
      const range2 = relativeTo - relativeFrom;
      selectionRange += range2;
      markRanges.push(...node.marks.map((mark) => ({
        mark,
        from: relativeFrom,
        to: relativeTo
      })));
    });
  });
  if (selectionRange === 0) {
    return false;
  }
  const matchedRange = markRanges.filter((markRange) => {
    if (!type) {
      return true;
    }
    return type.name === markRange.mark.type.name;
  }).filter((markRange) => objectIncludes(markRange.mark.attrs, attributes, { strict: false })).reduce((sum, markRange) => sum + markRange.to - markRange.from, 0);
  const excludedRange = markRanges.filter((markRange) => {
    if (!type) {
      return true;
    }
    return markRange.mark.type !== type && markRange.mark.type.excludes(type);
  }).reduce((sum, markRange) => sum + markRange.to - markRange.from, 0);
  const range = matchedRange > 0 ? matchedRange + excludedRange : matchedRange;
  return range >= selectionRange;
}
function isList(name, extensions) {
  const { nodeExtensions } = splitExtensions(extensions);
  const extension = nodeExtensions.find((item) => item.name === name);
  if (!extension) {
    return false;
  }
  const context = {
    name: extension.name,
    options: extension.options,
    storage: extension.storage
  };
  const group = callOrReturn(getExtensionField(extension, "group", context));
  if (typeof group !== "string") {
    return false;
  }
  return group.split(" ").includes("list");
}
function isNodeEmpty(node, { checkChildren = true, ignoreWhitespace = false } = {}) {
  var _a;
  if (ignoreWhitespace) {
    if (node.type.name === "hardBreak") {
      return true;
    }
    if (node.isText) {
      return /^\s*$/m.test((_a = node.text) !== null && _a !== void 0 ? _a : "");
    }
  }
  if (node.isText) {
    return !node.text;
  }
  if (node.isAtom || node.isLeaf) {
    return false;
  }
  if (node.content.childCount === 0) {
    return true;
  }
  if (checkChildren) {
    let isContentEmpty = true;
    node.content.forEach((childNode) => {
      if (isContentEmpty === false) {
        return;
      }
      if (!isNodeEmpty(childNode, { ignoreWhitespace, checkChildren })) {
        isContentEmpty = false;
      }
    });
    return isContentEmpty;
  }
  return false;
}
function isNodeSelection(value2) {
  return value2 instanceof NodeSelection;
}
function posToDOMRect(view, from, to) {
  const minPos = 0;
  const maxPos = view.state.doc.content.size;
  const resolvedFrom = minMax(from, minPos, maxPos);
  const resolvedEnd = minMax(to, minPos, maxPos);
  const start2 = view.coordsAtPos(resolvedFrom);
  const end2 = view.coordsAtPos(resolvedEnd, -1);
  const top2 = Math.min(start2.top, end2.top);
  const bottom2 = Math.max(start2.bottom, end2.bottom);
  const left2 = Math.min(start2.left, end2.left);
  const right2 = Math.max(start2.right, end2.right);
  const width = right2 - left2;
  const height = bottom2 - top2;
  const x = left2;
  const y = top2;
  const data = {
    top: top2,
    bottom: bottom2,
    left: left2,
    right: right2,
    width,
    height,
    x,
    y
  };
  return {
    ...data,
    toJSON: () => data
  };
}
function canSetMark(state, tr, newMarkType) {
  var _a;
  const { selection } = tr;
  let cursor = null;
  if (isTextSelection(selection)) {
    cursor = selection.$cursor;
  }
  if (cursor) {
    const currentMarks = (_a = state.storedMarks) !== null && _a !== void 0 ? _a : cursor.marks();
    return !!newMarkType.isInSet(currentMarks) || !currentMarks.some((mark) => mark.type.excludes(newMarkType));
  }
  const { ranges } = selection;
  return ranges.some(({ $from, $to }) => {
    let someNodeSupportsMark = $from.depth === 0 ? state.doc.inlineContent && state.doc.type.allowsMarkType(newMarkType) : false;
    state.doc.nodesBetween($from.pos, $to.pos, (node, _pos, parent) => {
      if (someNodeSupportsMark) {
        return false;
      }
      if (node.isInline) {
        const parentAllowsMarkType = !parent || parent.type.allowsMarkType(newMarkType);
        const currentMarksAllowMarkType = !!newMarkType.isInSet(node.marks) || !node.marks.some((otherMark) => otherMark.type.excludes(newMarkType));
        someNodeSupportsMark = parentAllowsMarkType && currentMarksAllowMarkType;
      }
      return !someNodeSupportsMark;
    });
    return someNodeSupportsMark;
  });
}
var setMark = (typeOrName, attributes = {}) => ({ tr, state, dispatch }) => {
  const { selection } = tr;
  const { empty: empty3, ranges } = selection;
  const type = getMarkType(typeOrName, state.schema);
  if (dispatch) {
    if (empty3) {
      const oldAttributes = getMarkAttributes(state, type);
      tr.addStoredMark(type.create({
        ...oldAttributes,
        ...attributes
      }));
    } else {
      ranges.forEach((range) => {
        const from = range.$from.pos;
        const to = range.$to.pos;
        state.doc.nodesBetween(from, to, (node, pos) => {
          const trimmedFrom = Math.max(pos, from);
          const trimmedTo = Math.min(pos + node.nodeSize, to);
          const someHasMark = node.marks.find((mark) => mark.type === type);
          if (someHasMark) {
            node.marks.forEach((mark) => {
              if (type === mark.type) {
                tr.addMark(trimmedFrom, trimmedTo, type.create({
                  ...mark.attrs,
                  ...attributes
                }));
              }
            });
          } else {
            tr.addMark(trimmedFrom, trimmedTo, type.create(attributes));
          }
        });
      });
    }
  }
  return canSetMark(state, tr, type);
};
var setMeta = (key, value2) => ({ tr }) => {
  tr.setMeta(key, value2);
  return true;
};
var setNode = (typeOrName, attributes = {}) => ({ state, dispatch, chain }) => {
  const type = getNodeType(typeOrName, state.schema);
  let attributesToCopy;
  if (state.selection.$anchor.sameParent(state.selection.$head)) {
    attributesToCopy = state.selection.$anchor.parent.attrs;
  }
  if (!type.isTextblock) {
    console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');
    return false;
  }
  return chain().command(({ commands: commands2 }) => {
    const canSetBlock = setBlockType(type, { ...attributesToCopy, ...attributes })(state);
    if (canSetBlock) {
      return true;
    }
    return commands2.clearNodes();
  }).command(({ state: updatedState }) => {
    return setBlockType(type, { ...attributesToCopy, ...attributes })(updatedState, dispatch);
  }).run();
};
var setNodeSelection = (position) => ({ tr, dispatch }) => {
  if (dispatch) {
    const { doc: doc3 } = tr;
    const from = minMax(position, 0, doc3.content.size);
    const selection = NodeSelection.create(doc3, from);
    tr.setSelection(selection);
  }
  return true;
};
var setTextSelection = (position) => ({ tr, dispatch }) => {
  if (dispatch) {
    const { doc: doc3 } = tr;
    const { from, to } = typeof position === "number" ? { from: position, to: position } : position;
    const minPos = TextSelection.atStart(doc3).from;
    const maxPos = TextSelection.atEnd(doc3).to;
    const resolvedFrom = minMax(from, minPos, maxPos);
    const resolvedEnd = minMax(to, minPos, maxPos);
    const selection = TextSelection.create(doc3, resolvedFrom, resolvedEnd);
    tr.setSelection(selection);
  }
  return true;
};
var sinkListItem2 = (typeOrName) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  return sinkListItem(type)(state, dispatch);
};
function ensureMarks(state, splittableMarks) {
  const marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
  if (marks) {
    const filteredMarks = marks.filter((mark) => splittableMarks === null || splittableMarks === void 0 ? void 0 : splittableMarks.includes(mark.type.name));
    state.tr.ensureMarks(filteredMarks);
  }
}
var splitBlock2 = ({ keepMarks = true } = {}) => ({ tr, state, dispatch, editor }) => {
  const { selection, doc: doc3 } = tr;
  const { $from, $to } = selection;
  const extensionAttributes = editor.extensionManager.attributes;
  const newAttributes = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
  if (selection instanceof NodeSelection && selection.node.isBlock) {
    if (!$from.parentOffset || !canSplit(doc3, $from.pos)) {
      return false;
    }
    if (dispatch) {
      if (keepMarks) {
        ensureMarks(state, editor.extensionManager.splittableMarks);
      }
      tr.split($from.pos).scrollIntoView();
    }
    return true;
  }
  if (!$from.parent.isBlock) {
    return false;
  }
  const atEnd = $to.parentOffset === $to.parent.content.size;
  const deflt = $from.depth === 0 ? void 0 : defaultBlockAt2($from.node(-1).contentMatchAt($from.indexAfter(-1)));
  let types = atEnd && deflt ? [
    {
      type: deflt,
      attrs: newAttributes
    }
  ] : void 0;
  let can = canSplit(tr.doc, tr.mapping.map($from.pos), 1, types);
  if (!types && !can && canSplit(tr.doc, tr.mapping.map($from.pos), 1, deflt ? [{ type: deflt }] : void 0)) {
    can = true;
    types = deflt ? [
      {
        type: deflt,
        attrs: newAttributes
      }
    ] : void 0;
  }
  if (dispatch) {
    if (can) {
      if (selection instanceof TextSelection) {
        tr.deleteSelection();
      }
      tr.split(tr.mapping.map($from.pos), 1, types);
      if (deflt && !atEnd && !$from.parentOffset && $from.parent.type !== deflt) {
        const first2 = tr.mapping.map($from.before());
        const $first = tr.doc.resolve(first2);
        if ($from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt)) {
          tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
        }
      }
    }
    if (keepMarks) {
      ensureMarks(state, editor.extensionManager.splittableMarks);
    }
    tr.scrollIntoView();
  }
  return can;
};
var splitListItem = (typeOrName, overrideAttrs = {}) => ({ tr, state, dispatch, editor }) => {
  var _a;
  const type = getNodeType(typeOrName, state.schema);
  const { $from, $to } = state.selection;
  const node = state.selection.node;
  if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
    return false;
  }
  const grandParent = $from.node(-1);
  if (grandParent.type !== type) {
    return false;
  }
  const extensionAttributes = editor.extensionManager.attributes;
  if ($from.parent.content.size === 0 && $from.node(-1).childCount === $from.indexAfter(-1)) {
    if ($from.depth === 2 || $from.node(-3).type !== type || $from.index(-2) !== $from.node(-2).childCount - 1) {
      return false;
    }
    if (dispatch) {
      let wrap = Fragment.empty;
      const depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
      for (let d = $from.depth - depthBefore; d >= $from.depth - 3; d -= 1) {
        wrap = Fragment.from($from.node(d).copy(wrap));
      }
      const depthAfter = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
      const newNextTypeAttributes2 = {
        ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
        ...overrideAttrs
      };
      const nextType2 = ((_a = type.contentMatch.defaultType) === null || _a === void 0 ? void 0 : _a.createAndFill(newNextTypeAttributes2)) || void 0;
      wrap = wrap.append(Fragment.from(type.createAndFill(null, nextType2) || void 0));
      const start2 = $from.before($from.depth - (depthBefore - 1));
      tr.replace(start2, $from.after(-depthAfter), new Slice(wrap, 4 - depthBefore, 0));
      let sel = -1;
      tr.doc.nodesBetween(start2, tr.doc.content.size, (n, pos) => {
        if (sel > -1) {
          return false;
        }
        if (n.isTextblock && n.content.size === 0) {
          sel = pos + 1;
        }
      });
      if (sel > -1) {
        tr.setSelection(TextSelection.near(tr.doc.resolve(sel)));
      }
      tr.scrollIntoView();
    }
    return true;
  }
  const nextType = $to.pos === $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
  const newTypeAttributes = {
    ...getSplittedAttributes(extensionAttributes, grandParent.type.name, grandParent.attrs),
    ...overrideAttrs
  };
  const newNextTypeAttributes = {
    ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
    ...overrideAttrs
  };
  tr.delete($from.pos, $to.pos);
  const types = nextType ? [
    { type, attrs: newTypeAttributes },
    { type: nextType, attrs: newNextTypeAttributes }
  ] : [{ type, attrs: newTypeAttributes }];
  if (!canSplit(tr.doc, $from.pos, 2)) {
    return false;
  }
  if (dispatch) {
    const { selection, storedMarks } = state;
    const { splittableMarks } = editor.extensionManager;
    const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
    tr.split($from.pos, 2, types).scrollIntoView();
    if (!marks || !dispatch) {
      return true;
    }
    const filteredMarks = marks.filter((mark) => splittableMarks.includes(mark.type.name));
    tr.ensureMarks(filteredMarks);
  }
  return true;
};
var joinListBackwards = (tr, listType) => {
  const list = findParentNode((node) => node.type === listType)(tr.selection);
  if (!list) {
    return true;
  }
  const before = tr.doc.resolve(Math.max(0, list.pos - 1)).before(list.depth);
  if (before === void 0) {
    return true;
  }
  const nodeBefore = tr.doc.nodeAt(before);
  const canJoinBackwards = list.node.type === (nodeBefore === null || nodeBefore === void 0 ? void 0 : nodeBefore.type) && canJoin(tr.doc, list.pos);
  if (!canJoinBackwards) {
    return true;
  }
  tr.join(list.pos);
  return true;
};
var joinListForwards = (tr, listType) => {
  const list = findParentNode((node) => node.type === listType)(tr.selection);
  if (!list) {
    return true;
  }
  const after = tr.doc.resolve(list.start).after(list.depth);
  if (after === void 0) {
    return true;
  }
  const nodeAfter = tr.doc.nodeAt(after);
  const canJoinForwards = list.node.type === (nodeAfter === null || nodeAfter === void 0 ? void 0 : nodeAfter.type) && canJoin(tr.doc, after);
  if (!canJoinForwards) {
    return true;
  }
  tr.join(after);
  return true;
};
var toggleList = (listTypeOrName, itemTypeOrName, keepMarks, attributes = {}) => ({ editor, tr, state, dispatch, chain, commands: commands2, can }) => {
  const { extensions, splittableMarks } = editor.extensionManager;
  const listType = getNodeType(listTypeOrName, state.schema);
  const itemType = getNodeType(itemTypeOrName, state.schema);
  const { selection, storedMarks } = state;
  const { $from, $to } = selection;
  const range = $from.blockRange($to);
  const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
  if (!range) {
    return false;
  }
  const parentList = findParentNode((node) => isList(node.type.name, extensions))(selection);
  if (range.depth >= 1 && parentList && range.depth - parentList.depth <= 1) {
    if (parentList.node.type === listType) {
      return commands2.liftListItem(itemType);
    }
    if (isList(parentList.node.type.name, extensions) && listType.validContent(parentList.node.content) && dispatch) {
      return chain().command(() => {
        tr.setNodeMarkup(parentList.pos, listType);
        return true;
      }).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
    }
  }
  if (!keepMarks || !marks || !dispatch) {
    return chain().command(() => {
      const canWrapInList = can().wrapInList(listType, attributes);
      if (canWrapInList) {
        return true;
      }
      return commands2.clearNodes();
    }).wrapInList(listType, attributes).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
  }
  return chain().command(() => {
    const canWrapInList = can().wrapInList(listType, attributes);
    const filteredMarks = marks.filter((mark) => splittableMarks.includes(mark.type.name));
    tr.ensureMarks(filteredMarks);
    if (canWrapInList) {
      return true;
    }
    return commands2.clearNodes();
  }).wrapInList(listType, attributes).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
};
var toggleMark = (typeOrName, attributes = {}, options = {}) => ({ state, commands: commands2 }) => {
  const { extendEmptyMarkRange = false } = options;
  const type = getMarkType(typeOrName, state.schema);
  const isActive = isMarkActive(state, type, attributes);
  if (isActive) {
    return commands2.unsetMark(type, { extendEmptyMarkRange });
  }
  return commands2.setMark(type, attributes);
};
var toggleNode = (typeOrName, toggleTypeOrName, attributes = {}) => ({ state, commands: commands2 }) => {
  const type = getNodeType(typeOrName, state.schema);
  const toggleType = getNodeType(toggleTypeOrName, state.schema);
  const isActive = isNodeActive(state, type, attributes);
  let attributesToCopy;
  if (state.selection.$anchor.sameParent(state.selection.$head)) {
    attributesToCopy = state.selection.$anchor.parent.attrs;
  }
  if (isActive) {
    return commands2.setNode(toggleType, attributesToCopy);
  }
  return commands2.setNode(type, { ...attributesToCopy, ...attributes });
};
var toggleWrap = (typeOrName, attributes = {}) => ({ state, commands: commands2 }) => {
  const type = getNodeType(typeOrName, state.schema);
  const isActive = isNodeActive(state, type, attributes);
  if (isActive) {
    return commands2.lift(type);
  }
  return commands2.wrapIn(type, attributes);
};
var undoInputRule = () => ({ state, dispatch }) => {
  const plugins = state.plugins;
  for (let i = 0; i < plugins.length; i += 1) {
    const plugin = plugins[i];
    let undoable;
    if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
      if (dispatch) {
        const tr = state.tr;
        const toUndo = undoable.transform;
        for (let j = toUndo.steps.length - 1; j >= 0; j -= 1) {
          tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
        }
        if (undoable.text) {
          const marks = tr.doc.resolve(undoable.from).marks();
          tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
        } else {
          tr.delete(undoable.from, undoable.to);
        }
      }
      return true;
    }
  }
  return false;
};
var unsetAllMarks = () => ({ tr, dispatch }) => {
  const { selection } = tr;
  const { empty: empty3, ranges } = selection;
  if (empty3) {
    return true;
  }
  if (dispatch) {
    ranges.forEach((range) => {
      tr.removeMark(range.$from.pos, range.$to.pos);
    });
  }
  return true;
};
var unsetMark = (typeOrName, options = {}) => ({ tr, state, dispatch }) => {
  var _a;
  const { extendEmptyMarkRange = false } = options;
  const { selection } = tr;
  const type = getMarkType(typeOrName, state.schema);
  const { $from, empty: empty3, ranges } = selection;
  if (!dispatch) {
    return true;
  }
  if (empty3 && extendEmptyMarkRange) {
    let { from, to } = selection;
    const attrs = (_a = $from.marks().find((mark) => mark.type === type)) === null || _a === void 0 ? void 0 : _a.attrs;
    const range = getMarkRange($from, type, attrs);
    if (range) {
      from = range.from;
      to = range.to;
    }
    tr.removeMark(from, to, type);
  } else {
    ranges.forEach((range) => {
      tr.removeMark(range.$from.pos, range.$to.pos, type);
    });
  }
  tr.removeStoredMark(type);
  return true;
};
var updateAttributes = (typeOrName, attributes = {}) => ({ tr, state, dispatch }) => {
  let nodeType = null;
  let markType = null;
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (!schemaType) {
    return false;
  }
  if (schemaType === "node") {
    nodeType = getNodeType(typeOrName, state.schema);
  }
  if (schemaType === "mark") {
    markType = getMarkType(typeOrName, state.schema);
  }
  if (dispatch) {
    tr.selection.ranges.forEach((range) => {
      const from = range.$from.pos;
      const to = range.$to.pos;
      let lastPos;
      let lastNode;
      let trimmedFrom;
      let trimmedTo;
      if (tr.selection.empty) {
        state.doc.nodesBetween(from, to, (node, pos) => {
          if (nodeType && nodeType === node.type) {
            trimmedFrom = Math.max(pos, from);
            trimmedTo = Math.min(pos + node.nodeSize, to);
            lastPos = pos;
            lastNode = node;
          }
        });
      } else {
        state.doc.nodesBetween(from, to, (node, pos) => {
          if (pos < from && nodeType && nodeType === node.type) {
            trimmedFrom = Math.max(pos, from);
            trimmedTo = Math.min(pos + node.nodeSize, to);
            lastPos = pos;
            lastNode = node;
          }
          if (pos >= from && pos <= to) {
            if (nodeType && nodeType === node.type) {
              tr.setNodeMarkup(pos, void 0, {
                ...node.attrs,
                ...attributes
              });
            }
            if (markType && node.marks.length) {
              node.marks.forEach((mark) => {
                if (markType === mark.type) {
                  const trimmedFrom2 = Math.max(pos, from);
                  const trimmedTo2 = Math.min(pos + node.nodeSize, to);
                  tr.addMark(trimmedFrom2, trimmedTo2, markType.create({
                    ...mark.attrs,
                    ...attributes
                  }));
                }
              });
            }
          }
        });
      }
      if (lastNode) {
        if (lastPos !== void 0) {
          tr.setNodeMarkup(lastPos, void 0, {
            ...lastNode.attrs,
            ...attributes
          });
        }
        if (markType && lastNode.marks.length) {
          lastNode.marks.forEach((mark) => {
            if (markType === mark.type) {
              tr.addMark(trimmedFrom, trimmedTo, markType.create({
                ...mark.attrs,
                ...attributes
              }));
            }
          });
        }
      }
    });
  }
  return true;
};
var wrapIn2 = (typeOrName, attributes = {}) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  return wrapIn(type, attributes)(state, dispatch);
};
var wrapInList2 = (typeOrName, attributes = {}) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema);
  return wrapInList(type, attributes)(state, dispatch);
};
var commands = Object.freeze({
  __proto__: null,
  blur,
  clearContent,
  clearNodes,
  command,
  createParagraphNear: createParagraphNear2,
  cut,
  deleteCurrentNode,
  deleteNode,
  deleteRange,
  deleteSelection: deleteSelection2,
  enter,
  exitCode: exitCode2,
  extendMarkRange,
  first,
  focus,
  forEach,
  insertContent,
  insertContentAt,
  joinBackward: joinBackward2,
  joinDown: joinDown2,
  joinForward: joinForward2,
  joinItemBackward,
  joinItemForward,
  joinTextblockBackward: joinTextblockBackward2,
  joinTextblockForward: joinTextblockForward2,
  joinUp: joinUp2,
  keyboardShortcut,
  lift: lift2,
  liftEmptyBlock: liftEmptyBlock2,
  liftListItem: liftListItem2,
  newlineInCode: newlineInCode2,
  resetAttributes,
  scrollIntoView,
  selectAll: selectAll2,
  selectNodeBackward: selectNodeBackward2,
  selectNodeForward: selectNodeForward2,
  selectParentNode: selectParentNode2,
  selectTextblockEnd: selectTextblockEnd2,
  selectTextblockStart: selectTextblockStart2,
  setContent,
  setMark,
  setMeta,
  setNode,
  setNodeSelection,
  setTextSelection,
  sinkListItem: sinkListItem2,
  splitBlock: splitBlock2,
  splitListItem,
  toggleList,
  toggleMark,
  toggleNode,
  toggleWrap,
  undoInputRule,
  unsetAllMarks,
  unsetMark,
  updateAttributes,
  wrapIn: wrapIn2,
  wrapInList: wrapInList2
});
var Commands = Extension.create({
  name: "commands",
  addCommands() {
    return {
      ...commands
    };
  }
});
var Drop = Extension.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("tiptapDrop"),
        props: {
          handleDrop: (_, e, slice, moved) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice,
              moved
            });
          }
        }
      })
    ];
  }
});
var Editable = Extension.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
});
var focusEventsPluginKey = new PluginKey("focusEvents");
var FocusEvents = Extension.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor } = this;
    return [
      new Plugin({
        key: focusEventsPluginKey,
        props: {
          handleDOMEvents: {
            focus: (view, event) => {
              editor.isFocused = true;
              const transaction = editor.state.tr.setMeta("focus", { event }).setMeta("addToHistory", false);
              view.dispatch(transaction);
              return false;
            },
            blur: (view, event) => {
              editor.isFocused = false;
              const transaction = editor.state.tr.setMeta("blur", { event }).setMeta("addToHistory", false);
              view.dispatch(transaction);
              return false;
            }
          }
        }
      })
    ];
  }
});
var Keymap = Extension.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const handleBackspace = () => this.editor.commands.first(({ commands: commands2 }) => [
      () => commands2.undoInputRule(),
      // maybe convert first text block node to default node
      () => commands2.command(({ tr }) => {
        const { selection, doc: doc3 } = tr;
        const { empty: empty3, $anchor } = selection;
        const { pos, parent } = $anchor;
        const $parentPos = $anchor.parent.isTextblock && pos > 0 ? tr.doc.resolve(pos - 1) : $anchor;
        const parentIsIsolating = $parentPos.parent.type.spec.isolating;
        const parentPos = $anchor.pos - $anchor.parentOffset;
        const isAtStart = parentIsIsolating && $parentPos.parent.childCount === 1 ? parentPos === $anchor.pos : Selection.atStart(doc3).from === pos;
        if (!empty3 || !parent.type.isTextblock || parent.textContent.length || !isAtStart || isAtStart && $anchor.parent.type.name === "paragraph") {
          return false;
        }
        return commands2.clearNodes();
      }),
      () => commands2.deleteSelection(),
      () => commands2.joinBackward(),
      () => commands2.selectNodeBackward()
    ]);
    const handleDelete = () => this.editor.commands.first(({ commands: commands2 }) => [
      () => commands2.deleteSelection(),
      () => commands2.deleteCurrentNode(),
      () => commands2.joinForward(),
      () => commands2.selectNodeForward()
    ]);
    const handleEnter = () => this.editor.commands.first(({ commands: commands2 }) => [
      () => commands2.newlineInCode(),
      () => commands2.createParagraphNear(),
      () => commands2.liftEmptyBlock(),
      () => commands2.splitBlock()
    ]);
    const baseKeymap = {
      Enter: handleEnter,
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: handleBackspace,
      "Mod-Backspace": handleBackspace,
      "Shift-Backspace": handleBackspace,
      Delete: handleDelete,
      "Mod-Delete": handleDelete,
      "Mod-a": () => this.editor.commands.selectAll()
    };
    const pcKeymap = {
      ...baseKeymap
    };
    const macKeymap = {
      ...baseKeymap,
      "Ctrl-h": handleBackspace,
      "Alt-Backspace": handleBackspace,
      "Ctrl-d": handleDelete,
      "Ctrl-Alt-Backspace": handleDelete,
      "Alt-Delete": handleDelete,
      "Alt-d": handleDelete,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    if (isiOS() || isMacOS()) {
      return macKeymap;
    }
    return pcKeymap;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Plugin({
        key: new PluginKey("clearDocument"),
        appendTransaction: (transactions, oldState, newState) => {
          if (transactions.some((tr2) => tr2.getMeta("composition"))) {
            return;
          }
          const docChanges = transactions.some((transaction) => transaction.docChanged) && !oldState.doc.eq(newState.doc);
          const ignoreTr = transactions.some((transaction) => transaction.getMeta("preventClearDocument"));
          if (!docChanges || ignoreTr) {
            return;
          }
          const { empty: empty3, from, to } = oldState.selection;
          const allFrom = Selection.atStart(oldState.doc).from;
          const allEnd = Selection.atEnd(oldState.doc).to;
          const allWasSelected = from === allFrom && to === allEnd;
          if (empty3 || !allWasSelected) {
            return;
          }
          const isEmpty = isNodeEmpty(newState.doc);
          if (!isEmpty) {
            return;
          }
          const tr = newState.tr;
          const state = createChainableState({
            state: newState,
            transaction: tr
          });
          const { commands: commands2 } = new CommandManager({
            editor: this.editor,
            state
          });
          commands2.clearNodes();
          if (!tr.steps.length) {
            return;
          }
          return tr;
        }
      })
    ];
  }
});
var Paste = Extension.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("tiptapPaste"),
        props: {
          handlePaste: (_view, e, slice) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice
            });
          }
        }
      })
    ];
  }
});
var Tabindex = Extension.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var index = Object.freeze({
  __proto__: null,
  ClipboardTextSerializer,
  Commands,
  Drop,
  Editable,
  FocusEvents,
  Keymap,
  Paste,
  Tabindex,
  focusEventsPluginKey
});

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value2 = attributes[name2];
      if (value2 === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value2 === true ? "" : value2);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect2 = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect2.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect2.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect2.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect2.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect2.width / scaleX;
  var height = clientRect2.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect2 = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect2.width - width) <= 1) {
    width = clientRect2.width;
  }
  if (Math.abs(clientRect2.height - height) <= 1) {
    height = clientRect2.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value2, max2) {
  return max(min2, min(value2, max2));
}
function withinMaxClamp(min2, value2, max2) {
  var v = within(min2, value2, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value2, keys4) {
  return keys4.reduce(function(hashMap, key) {
    hashMap[key] = value2;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions2;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions2, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/tippy.js/dist/tippy.esm.js
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value2, index2, defaultValue) {
  if (Array.isArray(value2)) {
    var v = value2[index2];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index2] : defaultValue : v;
  }
  return value2;
}
function isType(value2, type) {
  var str = {}.toString.call(value2);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value2, args) {
  return typeof value2 === "function" ? value2.apply(void 0, args) : value2;
}
function debounce2(fn2, ms) {
  if (ms === 0) {
    return fn2;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn2(arg);
    }, ms);
  };
}
function removeProperties(obj, keys4) {
  var clone = Object.assign({}, obj);
  keys4.forEach(function(key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value2) {
  return value2.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value2) {
  return [].concat(value2);
}
function pushIfUnique(arr, value2) {
  if (arr.indexOf(value2) === -1) {
    arr.push(value2);
  }
}
function unique(arr) {
  return arr.filter(function(item, index2) {
    return arr.indexOf(item) === index2;
  });
}
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value2) {
  return [].slice.call(value2);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement2(value2) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value2, type);
  });
}
function isNodeList(value2) {
  return isType(value2, "NodeList");
}
function isMouseEvent(value2) {
  return isType(value2, "MouseEvent");
}
function isReferenceElement(value2) {
  return !!(value2 && value2._tippy && value2._tippy.reference === value2);
}
function getArrayOfElements(value2) {
  if (isElement2(value2)) {
    return [value2];
  }
  if (isNodeList(value2)) {
    return arrayFrom(value2);
  }
  if (Array.isArray(value2)) {
    return value2;
  }
  return arrayFrom(document.querySelectorAll(value2));
}
function setTransitionDuration(els, value2) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value2 + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement2(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? (
  // @ts-ignore
  !!window.msCrypto
) : false;
function createMemoryLeakWarning(method) {
  var txt = method === "destroy" ? "n already-" : " ";
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function clean(value2) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value2.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
}
function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c👷‍ This is a development-only message. It will be removed in production.\n  ");
}
function getFormattedMessage(message) {
  return [
    getDevMessage(message),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var visitedMessages;
if (true) {
  resetVisitedMessages();
}
function resetVisitedMessages() {
  visitedMessages = /* @__PURE__ */ new Set();
}
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;
    visitedMessages.add(message);
    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;
    visitedMessages.add(message);
    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === "[object Object]" && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ["tippy() was passed", "`" + String(targets) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" "));
  errorWhen(didPassPlainObject, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  if (true) {
    validateProps(partialProps, []);
  }
  var keys4 = Object.keys(partialProps);
  keys4.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }
  if (plugins === void 0) {
    plugins = [];
  }
  var keys4 = Object.keys(partialProps);
  keys4.forEach(function(prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop);
    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function(plugin) {
        return plugin.name === prop;
      }).length === 0;
    }
    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", "\n\n", "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value2) {
  var arrow2 = div();
  if (value2 === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement2(value2)) {
      arrow2.appendChild(value2);
    } else {
      dangerouslySetInnerHTML(arrow2, value2);
    }
  }
  return arrow2;
}
function setContent2(content, props) {
  if (isElement2(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent2(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent2(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce2(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    // methods
    clearDelayTimeouts,
    setProps,
    setContent: setContent3,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    if (true) {
      errorWhen(true, "render() function has not been supplied.");
    }
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc3 = getDocument();
    doc3.addEventListener("mousedown", onDocumentPress, true);
    doc3.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc3.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc3.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc3 = getDocument();
    doc3.removeEventListener("mousedown", onDocumentPress, true);
    doc3.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc3.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc3.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on2(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on2("touchstart", onTrigger2, {
        passive: true
      });
      on2("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on2(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on2("mouseleave", onMouseLeave);
          break;
        case "focus":
          on2(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on2("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn2(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper3(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode2;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode2 = node.parentNode;
    } else {
      parentNode2 = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode2.contains(popper2)) {
      parentNode2.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
    if (true) {
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
    }
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce2(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent3(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
    }
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
    }
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
    }
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
    }
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  if (true) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  if (true) {
    var isSingleContentElement = isElement2(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement2(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var applyStylesModifier = Object.assign({}, applyStyles_default, {
  effect: function effect4(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
tippy.setDefaultProps({
  render
});
var tippy_esm_default = tippy;

// node_modules/@tiptap/extension-bubble-menu/dist/index.js
var BubbleMenuView = class {
  constructor({ editor, element, view, tippyOptions = {}, updateDelay = 250, shouldShow }) {
    this.preventHide = false;
    this.shouldShow = ({ view: view2, state, from, to }) => {
      const { doc: doc3, selection } = state;
      const { empty: empty3 } = selection;
      const isEmptyTextBlock = !doc3.textBetween(from, to).length && isTextSelection(state.selection);
      const isChildOfMenu = this.element.contains(document.activeElement);
      const hasEditorFocus = view2.hasFocus() || isChildOfMenu;
      if (!hasEditorFocus || empty3 || isEmptyTextBlock || !this.editor.isEditable) {
        return false;
      }
      return true;
    };
    this.mousedownHandler = () => {
      this.preventHide = true;
    };
    this.dragstartHandler = () => {
      this.hide();
    };
    this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    };
    this.blurHandler = ({ event }) => {
      var _a;
      if (this.preventHide) {
        this.preventHide = false;
        return;
      }
      if ((event === null || event === void 0 ? void 0 : event.relatedTarget) && ((_a = this.element.parentNode) === null || _a === void 0 ? void 0 : _a.contains(event.relatedTarget))) {
        return;
      }
      if ((event === null || event === void 0 ? void 0 : event.relatedTarget) === this.editor.view.dom) {
        return;
      }
      this.hide();
    };
    this.tippyBlurHandler = (event) => {
      this.blurHandler({ event });
    };
    this.handleDebouncedUpdate = (view2, oldState) => {
      const selectionChanged = !(oldState === null || oldState === void 0 ? void 0 : oldState.selection.eq(view2.state.selection));
      const docChanged = !(oldState === null || oldState === void 0 ? void 0 : oldState.doc.eq(view2.state.doc));
      if (!selectionChanged && !docChanged) {
        return;
      }
      if (this.updateDebounceTimer) {
        clearTimeout(this.updateDebounceTimer);
      }
      this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(view2, selectionChanged, docChanged, oldState);
      }, this.updateDelay);
    };
    this.updateHandler = (view2, selectionChanged, docChanged, oldState) => {
      var _a, _b, _c;
      const { state, composing } = view2;
      const { selection } = state;
      const isSame = !selectionChanged && !docChanged;
      if (composing || isSame) {
        return;
      }
      this.createTooltip();
      const { ranges } = selection;
      const from = Math.min(...ranges.map((range) => range.$from.pos));
      const to = Math.max(...ranges.map((range) => range.$to.pos));
      const shouldShow2 = (_a = this.shouldShow) === null || _a === void 0 ? void 0 : _a.call(this, {
        editor: this.editor,
        element: this.element,
        view: view2,
        state,
        oldState,
        from,
        to
      });
      if (!shouldShow2) {
        this.hide();
        return;
      }
      (_b = this.tippy) === null || _b === void 0 ? void 0 : _b.setProps({
        getReferenceClientRect: ((_c = this.tippyOptions) === null || _c === void 0 ? void 0 : _c.getReferenceClientRect) || (() => {
          if (isNodeSelection(state.selection)) {
            let node = view2.nodeDOM(from);
            if (node) {
              const nodeViewWrapper = node.dataset.nodeViewWrapper ? node : node.querySelector("[data-node-view-wrapper]");
              if (nodeViewWrapper) {
                node = nodeViewWrapper.firstChild;
              }
              if (node) {
                return node.getBoundingClientRect();
              }
            }
          }
          return posToDOMRect(view2, from, to);
        })
      });
      this.show();
    };
    this.editor = editor;
    this.element = element;
    this.view = view;
    this.updateDelay = updateDelay;
    if (shouldShow) {
      this.shouldShow = shouldShow;
    }
    this.element.addEventListener("mousedown", this.mousedownHandler, { capture: true });
    this.view.dom.addEventListener("dragstart", this.dragstartHandler);
    this.editor.on("focus", this.focusHandler);
    this.editor.on("blur", this.blurHandler);
    this.tippyOptions = tippyOptions;
    this.element.remove();
    this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: editorElement } = this.editor.options;
    const editorIsAttached = !!editorElement.parentElement;
    if (this.tippy || !editorIsAttached) {
      return;
    }
    this.tippy = tippy_esm_default(editorElement, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: true,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    });
    if (this.tippy.popper.firstChild) {
      this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler);
    }
  }
  update(view, oldState) {
    const { state } = view;
    const hasValidSelection = state.selection.from !== state.selection.to;
    if (this.updateDelay > 0 && hasValidSelection) {
      this.handleDebouncedUpdate(view, oldState);
      return;
    }
    const selectionChanged = !(oldState === null || oldState === void 0 ? void 0 : oldState.selection.eq(view.state.selection));
    const docChanged = !(oldState === null || oldState === void 0 ? void 0 : oldState.doc.eq(view.state.doc));
    this.updateHandler(view, selectionChanged, docChanged, oldState);
  }
  show() {
    var _a;
    (_a = this.tippy) === null || _a === void 0 ? void 0 : _a.show();
  }
  hide() {
    var _a;
    (_a = this.tippy) === null || _a === void 0 ? void 0 : _a.hide();
  }
  destroy() {
    var _a, _b;
    if ((_a = this.tippy) === null || _a === void 0 ? void 0 : _a.popper.firstChild) {
      this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler);
    }
    (_b = this.tippy) === null || _b === void 0 ? void 0 : _b.destroy();
    this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: true });
    this.view.dom.removeEventListener("dragstart", this.dragstartHandler);
    this.editor.off("focus", this.focusHandler);
    this.editor.off("blur", this.blurHandler);
  }
};
var BubbleMenuPlugin = (options) => {
  return new Plugin({
    key: typeof options.pluginKey === "string" ? new PluginKey(options.pluginKey) : options.pluginKey,
    view: (view) => new BubbleMenuView({ view, ...options })
  });
};
var BubbleMenu = Extension.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    if (!this.options.element) {
      return [];
    }
    return [
      BubbleMenuPlugin({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ];
  }
});

// node_modules/@tiptap/extension-floating-menu/dist/index.js
var FloatingMenuView = class {
  getTextContent(node) {
    return getText2(node, { textSerializers: getTextSerializersFromSchema(this.editor.schema) });
  }
  constructor({ editor, element, view, tippyOptions = {}, shouldShow }) {
    this.preventHide = false;
    this.shouldShow = ({ view: view2, state }) => {
      const { selection } = state;
      const { $anchor, empty: empty3 } = selection;
      const isRootDepth = $anchor.depth === 1;
      const isEmptyTextBlock = $anchor.parent.isTextblock && !$anchor.parent.type.spec.code && !$anchor.parent.textContent && $anchor.parent.childCount === 0 && !this.getTextContent($anchor.parent);
      if (!view2.hasFocus() || !empty3 || !isRootDepth || !isEmptyTextBlock || !this.editor.isEditable) {
        return false;
      }
      return true;
    };
    this.mousedownHandler = () => {
      this.preventHide = true;
    };
    this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    };
    this.blurHandler = ({ event }) => {
      var _a;
      if (this.preventHide) {
        this.preventHide = false;
        return;
      }
      if ((event === null || event === void 0 ? void 0 : event.relatedTarget) && ((_a = this.element.parentNode) === null || _a === void 0 ? void 0 : _a.contains(event.relatedTarget))) {
        return;
      }
      if ((event === null || event === void 0 ? void 0 : event.relatedTarget) === this.editor.view.dom) {
        return;
      }
      this.hide();
    };
    this.tippyBlurHandler = (event) => {
      this.blurHandler({ event });
    };
    this.editor = editor;
    this.element = element;
    this.view = view;
    if (shouldShow) {
      this.shouldShow = shouldShow;
    }
    this.element.addEventListener("mousedown", this.mousedownHandler, { capture: true });
    this.editor.on("focus", this.focusHandler);
    this.editor.on("blur", this.blurHandler);
    this.tippyOptions = tippyOptions;
    this.element.remove();
    this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: editorElement } = this.editor.options;
    const editorIsAttached = !!editorElement.parentElement;
    if (this.tippy || !editorIsAttached) {
      return;
    }
    this.tippy = tippy_esm_default(editorElement, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: true,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    });
    if (this.tippy.popper.firstChild) {
      this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler);
    }
  }
  update(view, oldState) {
    var _a, _b, _c;
    const { state } = view;
    const { doc: doc3, selection } = state;
    const { from, to } = selection;
    const isSame = oldState && oldState.doc.eq(doc3) && oldState.selection.eq(selection);
    if (isSame) {
      return;
    }
    this.createTooltip();
    const shouldShow = (_a = this.shouldShow) === null || _a === void 0 ? void 0 : _a.call(this, {
      editor: this.editor,
      view,
      state,
      oldState
    });
    if (!shouldShow) {
      this.hide();
      return;
    }
    (_b = this.tippy) === null || _b === void 0 ? void 0 : _b.setProps({
      getReferenceClientRect: ((_c = this.tippyOptions) === null || _c === void 0 ? void 0 : _c.getReferenceClientRect) || (() => posToDOMRect(view, from, to))
    });
    this.show();
  }
  show() {
    var _a;
    (_a = this.tippy) === null || _a === void 0 ? void 0 : _a.show();
  }
  hide() {
    var _a;
    (_a = this.tippy) === null || _a === void 0 ? void 0 : _a.hide();
  }
  destroy() {
    var _a, _b;
    if ((_a = this.tippy) === null || _a === void 0 ? void 0 : _a.popper.firstChild) {
      this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler);
    }
    (_b = this.tippy) === null || _b === void 0 ? void 0 : _b.destroy();
    this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: true });
    this.editor.off("focus", this.focusHandler);
    this.editor.off("blur", this.blurHandler);
  }
};
var FloatingMenuPlugin = (options) => {
  return new Plugin({
    key: typeof options.pluginKey === "string" ? new PluginKey(options.pluginKey) : options.pluginKey,
    view: (view) => new FloatingMenuView({ view, ...options })
  });
};
var FloatingMenu = Extension.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    if (!this.options.element) {
      return [];
    }
    return [
      FloatingMenuPlugin({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ];
  }
});

// node_modules/@tiptap/vue-3/dist/index.js
var BubbleMenu2 = defineComponent({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: true
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(props, { slots }) {
    const root = ref(null);
    onMounted(() => {
      const { updateDelay, editor, pluginKey, shouldShow, tippyOptions } = props;
      editor.registerPlugin(BubbleMenuPlugin({
        updateDelay,
        editor,
        element: root.value,
        pluginKey,
        shouldShow,
        tippyOptions
      }));
    });
    onBeforeUnmount(() => {
      const { pluginKey, editor } = props;
      editor.unregisterPlugin(pluginKey);
    });
    return () => {
      var _a;
      return h("div", { ref: root }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
  }
});
var EditorContent = defineComponent({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(props) {
    const rootEl = ref();
    const instance = getCurrentInstance();
    watchEffect(() => {
      const editor = props.editor;
      if (editor && editor.options.element && rootEl.value) {
        nextTick(() => {
          if (!rootEl.value || !editor.options.element.firstChild) {
            return;
          }
          const element = unref(rootEl.value);
          rootEl.value.append(...editor.options.element.childNodes);
          editor.contentComponent = instance.ctx._;
          if (instance) {
            editor.appContext = {
              ...instance.appContext,
              // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
              // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
              // @ts-expect-error forward instance's 'provides' into appContext
              provides: instance.provides
            };
          }
          editor.setOptions({
            element
          });
          editor.createNodeViews();
        });
      }
    });
    onBeforeUnmount(() => {
      const editor = props.editor;
      if (!editor) {
        return;
      }
      editor.contentComponent = null;
      editor.appContext = null;
    });
    return { rootEl };
  },
  render() {
    return h("div", {
      ref: (el) => {
        this.rootEl = el;
      }
    });
  }
});
var FloatingMenu2 = defineComponent({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: true
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(props, { slots }) {
    const root = ref(null);
    onMounted(() => {
      const { pluginKey, editor, tippyOptions, shouldShow } = props;
      editor.registerPlugin(FloatingMenuPlugin({
        pluginKey,
        editor,
        element: root.value,
        tippyOptions,
        shouldShow
      }));
    });
    onBeforeUnmount(() => {
      const { pluginKey, editor } = props;
      editor.unregisterPlugin(pluginKey);
    });
    return () => {
      var _a;
      return h("div", { ref: root }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
  }
});
var NodeViewContent = defineComponent({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return h(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
var NodeViewWrapper = defineComponent({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var _a, _b;
    return h(this.as, {
      // @ts-ignore
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
      onDragstart: this.onDragStart
    }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a));
  }
});

// node_modules/frappe-ui/src/index.ts
import { default as default50 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListView.vue";
import { default as default51 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListView.vue";
import { default as default52 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListHeader.vue";
import { default as default53 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListHeaderItem.vue";
import { default as default54 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListEmptyState.vue";
import { default as default55 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListRows.vue";
import { default as default56 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListRow.vue";
import { default as default57 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListRowItem.vue";
import { default as default58 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListGroups.vue";
import { default as default59 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListGroupHeader.vue";
import { default as default60 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListGroupRows.vue";
import { default as default61 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListSelectBanner.vue";
import { default as default62 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListView/ListFooter.vue";
import { default as default63 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Toast/Toast.vue";

// node_modules/frappe-ui/src/components/Toast/index.ts
import ToastComponent from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Toast/Toast.vue";
import LoadingIndicator from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/LoadingIndicator.vue";
var toastsState = ref([]);
var toastIdCounter = 0;
var updateToastInState = (id, updates) => {
  const index2 = toastsState.value.findIndex((t3) => t3.id === id);
  if (index2 !== -1) {
    toastsState.value[index2] = {
      ...toastsState.value[index2],
      ...updates,
      open: true
    };
  }
};
var toast = {
  create: (options) => {
    const id = `toast-${toastIdCounter++}`;
    const durationInMs = options.duration != null ? options.duration * 1e3 : 5e3;
    const toastItem = {
      id: options.id || id,
      open: true,
      message: options.message,
      type: options.type || "info",
      duration: durationInMs,
      action: options.action,
      icon: options.icon,
      closable: options.closable ?? true
    };
    toastsState.value.push(toastItem);
    return toastItem.id;
  },
  remove: (id) => {
    toastsState.value = toastsState.value.filter((t3) => t3.id !== id);
  },
  removeAll: () => {
    toastsState.value = [];
  },
  promise: async (promiseToResolve, options) => {
    const loadingDurationInSeconds = options.duration ?? 0;
    const toastId = toast.create({
      message: options.loading,
      type: "info",
      icon: () => h(LoadingIndicator, { class: "text-ink-white" }),
      duration: loadingDurationInSeconds,
      closable: false
    });
    try {
      const data = await promiseToResolve;
      const successMessage = typeof options.success === "function" ? options.success(data) : options.success;
      const successToastDurationInSeconds = options.successDuration ?? options.duration ?? 5;
      updateToastInState(toastId, {
        message: successMessage,
        type: "success",
        duration: successToastDurationInSeconds * 1e3,
        icon: void 0,
        closable: true
      });
      return data;
    } catch (error) {
      const errorMessage = typeof options.error === "function" ? options.error(error) : options.error;
      const errorToastDurationInSeconds = options.errorDuration ?? options.duration ?? 5;
      updateToastInState(toastId, {
        message: errorMessage,
        type: "error",
        duration: errorToastDurationInSeconds * 1e3,
        icon: void 0,
        closable: true
      });
      throw error;
    }
  },
  success: (message, options = {}) => toast.create({ message, type: "success", ...options }),
  error: (message, options = {}) => toast.create({ message, type: "error", ...options }),
  warning: (message, options = {}) => toast.create({ message, type: "warning", ...options }),
  info: (message, options = {}) => toast.create({ message, type: "info", ...options })
};
var Toasts = defineComponent({
  name: "FrappeToasts",
  setup() {
    const handleUpdateOpen = (id, isOpen) => {
      if (!isOpen) {
        toast.remove(id);
      } else {
        const t3 = toastsState.value.find((item) => item.id === id);
        if (t3) t3.open = true;
      }
    };
    const handleActionForItem = (toastItem) => {
      toast.remove(toastItem.id);
    };
    return () => toastsState.value.map(
      (t3) => h(ToastComponent, {
        key: t3.id,
        open: t3.open,
        message: t3.message,
        type: t3.type,
        duration: t3.duration,
        action: t3.action,
        icon: t3.icon,
        closable: t3.closable,
        "onUpdate:open": (isOpen) => handleUpdateOpen(t3.id, isOpen),
        onAction: () => handleActionForItem(t3)
      })
    );
  }
});

// node_modules/frappe-ui/src/components/Tooltip/index.ts
import { default as default30 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Tooltip/Tooltip.vue";

// node_modules/frappe-ui/src/index.ts
import { default as default64 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/CommandPalette/CommandPalette.vue";
import { default as default65 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/CommandPalette/CommandPaletteItem.vue";
import { default as default66 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListFilter/ListFilter.vue";
import { default as default67 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Calendar/Calendar.vue";
import { default as default68 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ListFilter/NestedPopover.vue";

// node_modules/frappe-ui/src/components/CircularProgressBar/index.ts
import { default as default31 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/CircularProgressBar/CircularProgressBar.vue";

// node_modules/frappe-ui/src/components/Tree/index.ts
import { default as default32 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Tree/Tree.vue";

// node_modules/frappe-ui/src/index.ts
import { default as default69 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Provider/FrappeUIProvider.vue";
import { default as default70 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Charts/AxisChart.vue";
import { default as default71 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Charts/NumberChart.vue";
import { default as default72 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Charts/DonutChart.vue";
import { default as default73 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Charts/FunnelChart.vue";
import { default as default74 } from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/Charts/ECharts.vue";

// node_modules/frappe-ui/src/directives/onOutsideClick.js
var instanceMap = /* @__PURE__ */ new Map();
function onDocumentClick(e, el, fn2) {
  let target = e.target;
  if (el !== target && !el.contains(target)) {
    fn2 == null ? void 0 : fn2(e);
  }
}
var onOutsideClick_default = {
  beforeMount(el, binding) {
    const fn2 = binding.value;
    const clickHandler = function(e) {
      onDocumentClick(e, el, fn2);
    };
    removeHandlerIfPresent(el);
    instanceMap.set(el, clickHandler);
    document.addEventListener("click", clickHandler);
  },
  unmounted(el) {
    removeHandlerIfPresent(el);
  }
};
function removeHandlerIfPresent(el) {
  const clickHandler = instanceMap.get(el);
  if (!clickHandler) {
    return;
  }
  instanceMap.delete(el);
  document.removeEventListener("click", clickHandler);
}

// node_modules/frappe-ui/src/directives/visibility.js
var visibility_default = {
  beforeMount(el, binding, vnode) {
    let fn2 = binding.value;
    if (!fn2) return;
    let observer = new IntersectionObserver((entries) => {
      let entry = entries[0];
      let visible = entry.isIntersecting && entry.intersectionRatio > 0;
      fn2(visible, entry);
    });
    nextTick(() => {
      observer.observe(el);
    });
    el._visibility_observer = observer;
  },
  unmounted(el) {
    if (el._visibility_observer) {
      el._visibility_observer.disconnect();
      delete el._visibility_observer;
    }
  }
};

// node_modules/frappe-ui/src/utils/call.js
async function call(method, args, options = {}) {
  if (!args) {
    args = {};
  }
  let headers = Object.assign(
    {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      "X-Frappe-Site-Name": window.location.hostname
    },
    options.headers || {}
  );
  if (window.csrf_token && window.csrf_token !== "{{ csrf_token }}") {
    headers["X-Frappe-CSRF-Token"] = window.csrf_token;
  }
  let path = method.startsWith("/") ? method : `/api/method/${method}`;
  const res = await fetch(path, {
    method: "POST",
    headers,
    body: JSON.stringify(args)
  });
  if (res.ok) {
    const data = await res.json();
    if (data.docs || method === "login") {
      return data;
    }
    if (data.exc) {
      try {
        console.groupCollapsed(method);
        console.log(`method: ${method}`);
        console.log(`params:`, args);
        let warning = JSON.parse(data.exc);
        for (let text of warning) {
          console.log(text);
        }
        console.groupEnd();
      } catch (e) {
        console.warn("Error printing debug messages", e);
      }
    }
    return data.message;
  } else {
    let response = await res.text();
    let error, exception;
    try {
      error = JSON.parse(response);
    } catch (e2) {
    }
    let errorParts = [
      [method, error.exc_type, error._error_message].filter(Boolean).join(" ")
    ];
    if (error.exc) {
      exception = error.exc;
      try {
        exception = JSON.parse(exception)[0];
        console.log(exception);
      } catch (e2) {
      }
    }
    let e = new Error(errorParts.join("\n"));
    e.exc_type = error.exc_type;
    e.exc = exception;
    e.status = res.status;
    e.messages = error._server_messages ? JSON.parse(error._server_messages) : [];
    e.messages = e.messages.concat(error.message);
    e.messages = e.messages.map((m) => {
      try {
        return JSON.parse(m).message;
      } catch (error2) {
        return m;
      }
    });
    e.messages = e.messages.filter(Boolean);
    if (!e.messages.length) {
      e.messages = error._error_message ? [error._error_message] : ["Internal Server Error"];
    }
    if (options.onError) {
      options.onError({ response: res, status: res.status, error: e });
    }
    throw e;
  }
}
function createCall(options) {
  return function customCall(method, args) {
    return call(method, args, options);
  };
}

// node_modules/frappe-ui/src/utils/debounce.ts
function debounce3(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = void 0;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// node_modules/frappe-ui/src/utils/file-to-base64.ts
var file_to_base64_default = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result == null) {
        reject(new Error("FileReader result is null"));
      } else if (typeof reader.result === "string") {
        resolve(reader.result);
      }
    };
    reader.readAsDataURL(file);
  });
};

// node_modules/frappe-ui/src/utils/fileUploadHandler.ts
var FileUploadHandler = class {
  constructor() {
    __publicField(this, "listeners");
    __publicField(this, "failed");
    this.listeners = {};
    this.failed = false;
  }
  on(event, handler) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(handler);
  }
  trigger(event, data) {
    let handlers3 = this.listeners[event] || [];
    handlers3.forEach((handler) => {
      handler.call(this, data);
    });
  }
  upload(file, options) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.upload.addEventListener("loadstart", () => {
        this.trigger("start");
      });
      xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
          this.trigger("progress", {
            uploaded: e.loaded,
            total: e.total
          });
        }
      });
      xhr.upload.addEventListener("load", () => {
        this.trigger("finish");
      });
      xhr.addEventListener("error", () => {
        this.trigger("error");
        reject();
      });
      xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          let error;
          if (xhr.status === 200) {
            let r = null;
            try {
              r = JSON.parse(xhr.responseText);
            } catch (e) {
              r = xhr.responseText;
            }
            let out = r.message || r;
            resolve(out);
          } else if (xhr.status === 403) {
            error = JSON.parse(xhr.responseText);
          } else {
            this.failed = true;
            try {
              error = JSON.parse(xhr.responseText);
            } catch (e) {
            }
          }
          if (error && error.exc) {
            console.error(JSON.parse(error.exc)[0]);
          }
          reject(error);
        }
      };
      const uploadEndpoint = options.upload_endpoint || "/api/method/upload_file";
      xhr.open("POST", uploadEndpoint, true);
      xhr.setRequestHeader("Accept", "application/json");
      if (window.csrf_token && window.csrf_token !== "{{ csrf_token }}") {
        xhr.setRequestHeader("X-Frappe-CSRF-Token", window.csrf_token);
      }
      let form_data = new FormData();
      if (file) {
        form_data.append("file", file, file.name);
      }
      form_data.append("is_private", options.private || false ? "1" : "0");
      form_data.append("folder", options.folder || "Home");
      if (options.file_url) {
        form_data.append("file_url", options.file_url);
      }
      if (options.doctype) {
        form_data.append("doctype", options.doctype);
      }
      if (options.docname) {
        form_data.append("docname", options.docname);
      }
      if (options.fieldname) {
        form_data.append("fieldname", options.fieldname);
      }
      if (options.method) {
        form_data.append("method", options.method);
      }
      if (options.type) {
        form_data.append("type", options.type);
      }
      if (options.optimize) {
        form_data.append("optimize", "1");
        if (options.max_width) {
          form_data.append("max_width", options.max_width.toString());
        }
        if (options.max_height) {
          form_data.append("max_height", options.max_height.toString());
        }
      }
      xhr.send(form_data);
    });
  }
};
var fileUploadHandler_default = FileUploadHandler;

// node_modules/frappe-ui/src/utils/pageMeta.js
var faviconRef = document.querySelector('link[rel="icon"]');
var defaultFavIcon = faviconRef == null ? void 0 : faviconRef.href;
function usePageMeta(fn2) {
  watch(
    () => {
      try {
        return fn2();
      } catch (error) {
        if (true) {
          console.warn("Failed to parse pageMeta in", fn2);
          console.error(error);
        }
        return null;
      }
    },
    (pageMeta) => {
      if (!pageMeta) return;
      if (pageMeta.title) {
        document.title = pageMeta.title;
      }
      if (pageMeta.emoji) {
        let href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${pageMeta.emoji}</text></svg>`;
        faviconRef.href = href;
      } else if (pageMeta.icon) {
        faviconRef.href = pageMeta.icon;
      } else {
        faviconRef.href = defaultFavIcon;
      }
    },
    {
      immediate: true,
      deep: true
    }
  );
}
var pageMeta_default = {
  install(app) {
    app.mixin(createMixin());
  }
};
function createMixin() {
  return {
    created() {
      if (this.$options.pageMeta) {
        let fn2 = this.$options.pageMeta.bind(this);
        usePageMeta(fn2);
      }
    }
  };
}

// node_modules/dayjs/esm/constant.js
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
var MS = "millisecond";
var S = "second";
var MIN = "minute";
var H = "hour";
var D = "day";
var W = "week";
var M = "month";
var Q = "quarter";
var Y = "year";
var DATE = "date";
var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
var INVALID_DATE_STRING = "Invalid Date";
var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

// node_modules/dayjs/esm/locale/en.js
var en_default = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
  }
};

// node_modules/dayjs/esm/utils.js
var padStart = function padStart2(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};
var padZoneStr = function padZoneStr2(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return (negMinutes <= 0 ? "+" : "-") + padStart(hourOffset, 2, "0") + ":" + padStart(minuteOffset, 2, "0");
};
var monthDiff = function monthDiff2(a, b) {
  if (a.date() < b.date()) return -monthDiff2(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};
var absFloor = function absFloor2(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};
var prettyUnit = function prettyUnit2(u3) {
  var special = {
    M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q
  };
  return special[u3] || String(u3 || "").toLowerCase().replace(/s$/, "");
};
var isUndefined = function isUndefined2(s) {
  return s === void 0;
};
var utils_default = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};

// node_modules/dayjs/esm/index.js
var L = "en";
var Ls = {};
Ls[L] = en_default;
var IS_DAYJS = "$isDayjsObject";
var isDayjs = function isDayjs2(d) {
  return d instanceof Dayjs || !!(d && d[IS_DAYJS]);
};
var parseLocale = function parseLocale2(preset, object, isLocal) {
  var l;
  if (!preset) return L;
  if (typeof preset === "string") {
    var presetLower = preset.toLowerCase();
    if (Ls[presetLower]) {
      l = presetLower;
    }
    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }
    var presetSplit = preset.split("-");
    if (!l && presetSplit.length > 1) {
      return parseLocale2(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }
  if (!isLocal && l) L = l;
  return l || !isLocal && L;
};
var dayjs = function dayjs2(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  }
  var cfg = typeof c === "object" ? c : {};
  cfg.date = date;
  cfg.args = arguments;
  return new Dayjs(cfg);
};
var wrapper = function wrapper2(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset
    // todo: refactor; do not use this.$offset in you code
  });
};
var Utils = utils_default;
Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;
var parseDate = function parseDate2(cfg) {
  var date = cfg.date, utc = cfg.utc;
  if (date === null) return /* @__PURE__ */ new Date(NaN);
  if (Utils.u(date)) return /* @__PURE__ */ new Date();
  if (date instanceof Date) return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);
    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || "0").substring(0, 3);
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
var Dayjs = function() {
  function Dayjs2(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg);
    this.$x = this.$x || cfg.x || {};
    this[IS_DAYJS] = true;
  }
  var _proto = Dayjs2.prototype;
  _proto.parse = function parse2(cfg) {
    this.$d = parseDate(cfg);
    this.init();
  };
  _proto.init = function init() {
    var $d2 = this.$d;
    this.$y = $d2.getFullYear();
    this.$M = $d2.getMonth();
    this.$D = $d2.getDate();
    this.$W = $d2.getDay();
    this.$H = $d2.getHours();
    this.$m = $d2.getMinutes();
    this.$s = $d2.getSeconds();
    this.$ms = $d2.getMilliseconds();
  };
  _proto.$utils = function $utils() {
    return Utils;
  };
  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };
  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };
  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };
  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };
  _proto.$g = function $g(input, get2, set3) {
    if (Utils.u(input)) return this[get2];
    return this.set(set3, input);
  };
  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1e3);
  };
  _proto.valueOf = function valueOf() {
    return this.$d.getTime();
  };
  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);
    var instanceFactory = function instanceFactory2(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };
    var instanceFactorySet = function instanceFactorySet2(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply(
        // eslint-disable-line prefer-spread
        _this.toDate("s"),
        (isStartOf ? argumentStart : argumentEnd).slice(slice)
      ), _this);
    };
    var $W = this.$W, $M = this.$M, $D = this.$D;
    var utcPad = "set" + (this.$u ? "UTC" : "");
    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
      case W: {
        var weekStart = this.$locale().weekStart || 0;
        var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
      }
      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);
      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);
      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);
      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);
      default:
        return this.clone();
    }
  };
  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };
  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? "UTC" : "");
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;
    if (unit === M || unit === Y) {
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name) this.$d[name](arg);
    this.init();
    return this;
  };
  _proto.set = function set3(string, _int2) {
    return this.clone().$set(string, _int2);
  };
  _proto.get = function get2(unit) {
    return this[Utils.p(unit)]();
  };
  _proto.add = function add(number, units) {
    var _this2 = this, _C$MIN$C$H$C$S$unit;
    number = Number(number);
    var unit = Utils.p(units);
    var instanceFactorySet = function instanceFactorySet2(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };
    if (unit === M) {
      return this.set(M, this.$M + number);
    }
    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }
    if (unit === D) {
      return instanceFactorySet(1);
    }
    if (unit === W) {
      return instanceFactorySet(7);
    }
    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1;
    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };
  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };
  _proto.format = function format(formatStr) {
    var _this3 = this;
    var locale = this.$locale();
    if (!this.isValid()) return locale.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H, $m = this.$m, $M = this.$M;
    var weekdays = locale.weekdays, months = locale.months, meridiem = locale.meridiem;
    var getShort = function getShort2(arr, index2, full, length) {
      return arr && (arr[index2] || arr(_this3, str)) || full[index2].slice(0, length);
    };
    var get$H = function get$H2(num) {
      return Utils.s($H % 12 || 12, num, "0");
    };
    var meridiemFunc = meridiem || function(hour, minute, isLowercase) {
      var m = hour < 12 ? "AM" : "PM";
      return isLowercase ? m.toLowerCase() : m;
    };
    var matches2 = function matches3(match) {
      switch (match) {
        case "YY":
          return String(_this3.$y).slice(-2);
        case "YYYY":
          return Utils.s(_this3.$y, 4, "0");
        case "M":
          return $M + 1;
        case "MM":
          return Utils.s($M + 1, 2, "0");
        case "MMM":
          return getShort(locale.monthsShort, $M, months, 3);
        case "MMMM":
          return getShort(months, $M);
        case "D":
          return _this3.$D;
        case "DD":
          return Utils.s(_this3.$D, 2, "0");
        case "d":
          return String(_this3.$W);
        case "dd":
          return getShort(locale.weekdaysMin, _this3.$W, weekdays, 2);
        case "ddd":
          return getShort(locale.weekdaysShort, _this3.$W, weekdays, 3);
        case "dddd":
          return weekdays[_this3.$W];
        case "H":
          return String($H);
        case "HH":
          return Utils.s($H, 2, "0");
        case "h":
          return get$H(1);
        case "hh":
          return get$H(2);
        case "a":
          return meridiemFunc($H, $m, true);
        case "A":
          return meridiemFunc($H, $m, false);
        case "m":
          return String($m);
        case "mm":
          return Utils.s($m, 2, "0");
        case "s":
          return String(_this3.$s);
        case "ss":
          return Utils.s(_this3.$s, 2, "0");
        case "SSS":
          return Utils.s(_this3.$ms, 3, "0");
        case "Z":
          return zoneStr;
        default:
          break;
      }
      return null;
    };
    return str.replace(REGEX_FORMAT, function(match, $1) {
      return $1 || matches2(match) || zoneStr.replace(":", "");
    });
  };
  _proto.utcOffset = function utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };
  _proto.diff = function diff(input, units, _float) {
    var _this4 = this;
    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff2 = this - that;
    var getMonth = function getMonth2() {
      return Utils.m(_this4, that);
    };
    var result;
    switch (unit) {
      case Y:
        result = getMonth() / 12;
        break;
      case M:
        result = getMonth();
        break;
      case Q:
        result = getMonth() / 3;
        break;
      case W:
        result = (diff2 - zoneDelta) / MILLISECONDS_A_WEEK;
        break;
      case D:
        result = (diff2 - zoneDelta) / MILLISECONDS_A_DAY;
        break;
      case H:
        result = diff2 / MILLISECONDS_A_HOUR;
        break;
      case MIN:
        result = diff2 / MILLISECONDS_A_MINUTE;
        break;
      case S:
        result = diff2 / MILLISECONDS_A_SECOND;
        break;
      default:
        result = diff2;
        break;
    }
    return _float ? result : Utils.a(result);
  };
  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };
  _proto.$locale = function $locale() {
    return Ls[this.$L];
  };
  _proto.locale = function locale(preset, object) {
    if (!preset) return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName) that.$L = nextLocaleName;
    return that;
  };
  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };
  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };
  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };
  _proto.toISOString = function toISOString() {
    return this.$d.toISOString();
  };
  _proto.toString = function toString2() {
    return this.$d.toUTCString();
  };
  return Dayjs2;
}();
var proto = Dayjs.prototype;
dayjs.prototype = proto;
[["$ms", MS], ["$s", S], ["$m", MIN], ["$H", H], ["$W", D], ["$M", M], ["$y", Y], ["$D", DATE]].forEach(function(g) {
  proto[g[1]] = function(input) {
    return this.$g(input, g[0], g[1]);
  };
});
dayjs.extend = function(plugin, option) {
  if (!plugin.$i) {
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }
  return dayjs;
};
dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;
dayjs.unix = function(timestamp2) {
  return dayjs(timestamp2 * 1e3);
};
dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
var esm_default = dayjs;

// node_modules/dayjs/esm/plugin/relativeTime/index.js
var relativeTime_default = function(o, c, d) {
  o = o || {};
  var proto2 = c.prototype;
  var relObj = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  d.en.relativeTime = relObj;
  proto2.fromToBase = function(input, withoutSuffix, instance, isFrom, postFormat) {
    var loc = instance.$locale().relativeTime || relObj;
    var T = o.thresholds || [{
      l: "s",
      r: 44,
      d: S
    }, {
      l: "m",
      r: 89
    }, {
      l: "mm",
      r: 44,
      d: MIN
    }, {
      l: "h",
      r: 89
    }, {
      l: "hh",
      r: 21,
      d: H
    }, {
      l: "d",
      r: 35
    }, {
      l: "dd",
      r: 25,
      d: D
    }, {
      l: "M",
      r: 45
    }, {
      l: "MM",
      r: 10,
      d: M
    }, {
      l: "y",
      r: 17
    }, {
      l: "yy",
      d: Y
    }];
    var Tl = T.length;
    var result;
    var out;
    var isFuture;
    for (var i = 0; i < Tl; i += 1) {
      var t3 = T[i];
      if (t3.d) {
        result = isFrom ? d(input).diff(instance, t3.d, true) : instance.diff(input, t3.d, true);
      }
      var abs = (o.rounding || Math.round)(Math.abs(result));
      isFuture = result > 0;
      if (abs <= t3.r || !t3.r) {
        if (abs <= 1 && i > 0) t3 = T[i - 1];
        var format = loc[t3.l];
        if (postFormat) {
          abs = postFormat("" + abs);
        }
        if (typeof format === "string") {
          out = format.replace("%d", abs);
        } else {
          out = format(abs, withoutSuffix, t3.l, isFuture);
        }
        break;
      }
    }
    if (withoutSuffix) return out;
    var pastOrFuture = isFuture ? loc.future : loc.past;
    if (typeof pastOrFuture === "function") {
      return pastOrFuture(out);
    }
    return pastOrFuture.replace("%s", out);
  };
  function fromTo(input, withoutSuffix, instance, isFrom) {
    return proto2.fromToBase(input, withoutSuffix, instance, isFrom);
  }
  proto2.to = function(input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this, true);
  };
  proto2.from = function(input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this);
  };
  var makeNow = function makeNow2(thisDay) {
    return thisDay.$u ? d.utc() : d();
  };
  proto2.toNow = function(withoutSuffix) {
    return this.to(makeNow(this), withoutSuffix);
  };
  proto2.fromNow = function(withoutSuffix) {
    return this.from(makeNow(this), withoutSuffix);
  };
};

// node_modules/dayjs/esm/plugin/localizedFormat/utils.js
var t = function t2(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(_, a, b) {
    return a || b.slice(1);
  });
};
var englishFormats = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
var u = function u2(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(_, a, b) {
    var B = b && b.toUpperCase();
    return a || formats[b] || englishFormats[b] || t(formats[B]);
  });
};

// node_modules/dayjs/esm/plugin/localizedFormat/index.js
var localizedFormat_default = function(o, c, d) {
  var proto2 = c.prototype;
  var oldFormat = proto2.format;
  d.en.formats = englishFormats;
  proto2.format = function(formatStr) {
    if (formatStr === void 0) {
      formatStr = FORMAT_DEFAULT;
    }
    var _this$$locale = this.$locale(), _this$$locale$formats = _this$$locale.formats, formats = _this$$locale$formats === void 0 ? {} : _this$$locale$formats;
    var result = u(formatStr, formats);
    return oldFormat.call(this, result);
  };
};

// node_modules/dayjs/esm/plugin/updateLocale/index.js
var updateLocale_default = function(option, Dayjs2, dayjs4) {
  dayjs4.updateLocale = function(locale, customConfig) {
    var localeList = dayjs4.Ls;
    var localeConfig = localeList[locale];
    if (!localeConfig) return;
    var customConfigKeys = customConfig ? Object.keys(customConfig) : [];
    customConfigKeys.forEach(function(c) {
      localeConfig[c] = customConfig[c];
    });
    return localeConfig;
  };
};

// node_modules/dayjs/esm/plugin/isToday/index.js
var isToday_default = function(o, c, d) {
  var proto2 = c.prototype;
  proto2.isToday = function() {
    var comparisonTemplate = "YYYY-MM-DD";
    var now = d();
    return this.format(comparisonTemplate) === now.format(comparisonTemplate);
  };
};

// node_modules/dayjs/esm/plugin/duration/index.js
var MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * 365;
var MILLISECONDS_A_MONTH = MILLISECONDS_A_YEAR / 12;
var durationRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
var unitToMS = {
  years: MILLISECONDS_A_YEAR,
  months: MILLISECONDS_A_MONTH,
  days: MILLISECONDS_A_DAY,
  hours: MILLISECONDS_A_HOUR,
  minutes: MILLISECONDS_A_MINUTE,
  seconds: MILLISECONDS_A_SECOND,
  milliseconds: 1,
  weeks: MILLISECONDS_A_WEEK
};
var isDuration = function isDuration2(d) {
  return d instanceof Duration;
};
var $d;
var $u;
var wrapper3 = function wrapper4(input, instance, unit) {
  return new Duration(input, unit, instance.$l);
};
var prettyUnit3 = function prettyUnit4(unit) {
  return $u.p(unit) + "s";
};
var isNegative = function isNegative2(number) {
  return number < 0;
};
var roundNumber = function roundNumber2(number) {
  return isNegative(number) ? Math.ceil(number) : Math.floor(number);
};
var absolute = function absolute2(number) {
  return Math.abs(number);
};
var getNumberUnitFormat = function getNumberUnitFormat2(number, unit) {
  if (!number) {
    return {
      negative: false,
      format: ""
    };
  }
  if (isNegative(number)) {
    return {
      negative: true,
      format: "" + absolute(number) + unit
    };
  }
  return {
    negative: false,
    format: "" + number + unit
  };
};
var Duration = function() {
  function Duration2(input, unit, locale) {
    var _this = this;
    this.$d = {};
    this.$l = locale;
    if (input === void 0) {
      this.$ms = 0;
      this.parseFromMilliseconds();
    }
    if (unit) {
      return wrapper3(input * unitToMS[prettyUnit3(unit)], this);
    }
    if (typeof input === "number") {
      this.$ms = input;
      this.parseFromMilliseconds();
      return this;
    }
    if (typeof input === "object") {
      Object.keys(input).forEach(function(k) {
        _this.$d[prettyUnit3(k)] = input[k];
      });
      this.calMilliseconds();
      return this;
    }
    if (typeof input === "string") {
      var d = input.match(durationRegex);
      if (d) {
        var properties = d.slice(2);
        var numberD = properties.map(function(value2) {
          return value2 != null ? Number(value2) : 0;
        });
        this.$d.years = numberD[0];
        this.$d.months = numberD[1];
        this.$d.weeks = numberD[2];
        this.$d.days = numberD[3];
        this.$d.hours = numberD[4];
        this.$d.minutes = numberD[5];
        this.$d.seconds = numberD[6];
        this.calMilliseconds();
        return this;
      }
    }
    return this;
  }
  var _proto = Duration2.prototype;
  _proto.calMilliseconds = function calMilliseconds() {
    var _this2 = this;
    this.$ms = Object.keys(this.$d).reduce(function(total, unit) {
      return total + (_this2.$d[unit] || 0) * unitToMS[unit];
    }, 0);
  };
  _proto.parseFromMilliseconds = function parseFromMilliseconds() {
    var $ms = this.$ms;
    this.$d.years = roundNumber($ms / MILLISECONDS_A_YEAR);
    $ms %= MILLISECONDS_A_YEAR;
    this.$d.months = roundNumber($ms / MILLISECONDS_A_MONTH);
    $ms %= MILLISECONDS_A_MONTH;
    this.$d.days = roundNumber($ms / MILLISECONDS_A_DAY);
    $ms %= MILLISECONDS_A_DAY;
    this.$d.hours = roundNumber($ms / MILLISECONDS_A_HOUR);
    $ms %= MILLISECONDS_A_HOUR;
    this.$d.minutes = roundNumber($ms / MILLISECONDS_A_MINUTE);
    $ms %= MILLISECONDS_A_MINUTE;
    this.$d.seconds = roundNumber($ms / MILLISECONDS_A_SECOND);
    $ms %= MILLISECONDS_A_SECOND;
    this.$d.milliseconds = $ms;
  };
  _proto.toISOString = function toISOString() {
    var Y2 = getNumberUnitFormat(this.$d.years, "Y");
    var M2 = getNumberUnitFormat(this.$d.months, "M");
    var days = +this.$d.days || 0;
    if (this.$d.weeks) {
      days += this.$d.weeks * 7;
    }
    var D2 = getNumberUnitFormat(days, "D");
    var H2 = getNumberUnitFormat(this.$d.hours, "H");
    var m = getNumberUnitFormat(this.$d.minutes, "M");
    var seconds = this.$d.seconds || 0;
    if (this.$d.milliseconds) {
      seconds += this.$d.milliseconds / 1e3;
      seconds = Math.round(seconds * 1e3) / 1e3;
    }
    var S2 = getNumberUnitFormat(seconds, "S");
    var negativeMode = Y2.negative || M2.negative || D2.negative || H2.negative || m.negative || S2.negative;
    var T = H2.format || m.format || S2.format ? "T" : "";
    var P = negativeMode ? "-" : "";
    var result = P + "P" + Y2.format + M2.format + D2.format + T + H2.format + m.format + S2.format;
    return result === "P" || result === "-P" ? "P0D" : result;
  };
  _proto.toJSON = function toJSON() {
    return this.toISOString();
  };
  _proto.format = function format(formatStr) {
    var str = formatStr || "YYYY-MM-DDTHH:mm:ss";
    var matches2 = {
      Y: this.$d.years,
      YY: $u.s(this.$d.years, 2, "0"),
      YYYY: $u.s(this.$d.years, 4, "0"),
      M: this.$d.months,
      MM: $u.s(this.$d.months, 2, "0"),
      D: this.$d.days,
      DD: $u.s(this.$d.days, 2, "0"),
      H: this.$d.hours,
      HH: $u.s(this.$d.hours, 2, "0"),
      m: this.$d.minutes,
      mm: $u.s(this.$d.minutes, 2, "0"),
      s: this.$d.seconds,
      ss: $u.s(this.$d.seconds, 2, "0"),
      SSS: $u.s(this.$d.milliseconds, 3, "0")
    };
    return str.replace(REGEX_FORMAT, function(match, $1) {
      return $1 || String(matches2[match]);
    });
  };
  _proto.as = function as(unit) {
    return this.$ms / unitToMS[prettyUnit3(unit)];
  };
  _proto.get = function get2(unit) {
    var base2 = this.$ms;
    var pUnit = prettyUnit3(unit);
    if (pUnit === "milliseconds") {
      base2 %= 1e3;
    } else if (pUnit === "weeks") {
      base2 = roundNumber(base2 / unitToMS[pUnit]);
    } else {
      base2 = this.$d[pUnit];
    }
    return base2 || 0;
  };
  _proto.add = function add(input, unit, isSubtract) {
    var another;
    if (unit) {
      another = input * unitToMS[prettyUnit3(unit)];
    } else if (isDuration(input)) {
      another = input.$ms;
    } else {
      another = wrapper3(input, this).$ms;
    }
    return wrapper3(this.$ms + another * (isSubtract ? -1 : 1), this);
  };
  _proto.subtract = function subtract(input, unit) {
    return this.add(input, unit, true);
  };
  _proto.locale = function locale(l) {
    var that = this.clone();
    that.$l = l;
    return that;
  };
  _proto.clone = function clone() {
    return wrapper3(this.$ms, this);
  };
  _proto.humanize = function humanize(withSuffix) {
    return $d().add(this.$ms, "ms").locale(this.$l).fromNow(!withSuffix);
  };
  _proto.valueOf = function valueOf() {
    return this.asMilliseconds();
  };
  _proto.milliseconds = function milliseconds() {
    return this.get("milliseconds");
  };
  _proto.asMilliseconds = function asMilliseconds() {
    return this.as("milliseconds");
  };
  _proto.seconds = function seconds() {
    return this.get("seconds");
  };
  _proto.asSeconds = function asSeconds() {
    return this.as("seconds");
  };
  _proto.minutes = function minutes() {
    return this.get("minutes");
  };
  _proto.asMinutes = function asMinutes() {
    return this.as("minutes");
  };
  _proto.hours = function hours() {
    return this.get("hours");
  };
  _proto.asHours = function asHours() {
    return this.as("hours");
  };
  _proto.days = function days() {
    return this.get("days");
  };
  _proto.asDays = function asDays() {
    return this.as("days");
  };
  _proto.weeks = function weeks() {
    return this.get("weeks");
  };
  _proto.asWeeks = function asWeeks() {
    return this.as("weeks");
  };
  _proto.months = function months() {
    return this.get("months");
  };
  _proto.asMonths = function asMonths() {
    return this.as("months");
  };
  _proto.years = function years() {
    return this.get("years");
  };
  _proto.asYears = function asYears() {
    return this.as("years");
  };
  return Duration2;
}();
var manipulateDuration = function manipulateDuration2(date, duration, k) {
  return date.add(duration.years() * k, "y").add(duration.months() * k, "M").add(duration.days() * k, "d").add(duration.hours() * k, "h").add(duration.minutes() * k, "m").add(duration.seconds() * k, "s").add(duration.milliseconds() * k, "ms");
};
var duration_default = function(option, Dayjs2, dayjs4) {
  $d = dayjs4;
  $u = dayjs4().$utils();
  dayjs4.duration = function(input, unit) {
    var $l = dayjs4.locale();
    return wrapper3(input, {
      $l
    }, unit);
  };
  dayjs4.isDuration = isDuration;
  var oldAdd = Dayjs2.prototype.add;
  var oldSubtract = Dayjs2.prototype.subtract;
  Dayjs2.prototype.add = function(value2, unit) {
    if (isDuration(value2)) {
      return manipulateDuration(this, value2, 1);
    }
    return oldAdd.bind(this)(value2, unit);
  };
  Dayjs2.prototype.subtract = function(value2, unit) {
    if (isDuration(value2)) {
      return manipulateDuration(this, value2, -1);
    }
    return oldSubtract.bind(this)(value2, unit);
  };
};

// node_modules/dayjs/esm/plugin/utc/index.js
var REGEX_VALID_OFFSET_FORMAT = /[+-]\d\d(?::?\d\d)?/g;
var REGEX_OFFSET_HOURS_MINUTES_FORMAT = /([+-]|\d\d)/g;
function offsetFromString(value2) {
  if (value2 === void 0) {
    value2 = "";
  }
  var offset2 = value2.match(REGEX_VALID_OFFSET_FORMAT);
  if (!offset2) {
    return null;
  }
  var _ref = ("" + offset2[0]).match(REGEX_OFFSET_HOURS_MINUTES_FORMAT) || ["-", 0, 0], indicator = _ref[0], hoursOffset = _ref[1], minutesOffset = _ref[2];
  var totalOffsetInMinutes = +hoursOffset * 60 + +minutesOffset;
  if (totalOffsetInMinutes === 0) {
    return 0;
  }
  return indicator === "+" ? totalOffsetInMinutes : -totalOffsetInMinutes;
}
var utc_default = function(option, Dayjs2, dayjs4) {
  var proto2 = Dayjs2.prototype;
  dayjs4.utc = function(date) {
    var cfg = {
      date,
      utc: true,
      args: arguments
    };
    return new Dayjs2(cfg);
  };
  proto2.utc = function(keepLocalTime) {
    var ins = dayjs4(this.toDate(), {
      locale: this.$L,
      utc: true
    });
    if (keepLocalTime) {
      return ins.add(this.utcOffset(), MIN);
    }
    return ins;
  };
  proto2.local = function() {
    return dayjs4(this.toDate(), {
      locale: this.$L,
      utc: false
    });
  };
  var oldParse = proto2.parse;
  proto2.parse = function(cfg) {
    if (cfg.utc) {
      this.$u = true;
    }
    if (!this.$utils().u(cfg.$offset)) {
      this.$offset = cfg.$offset;
    }
    oldParse.call(this, cfg);
  };
  var oldInit = proto2.init;
  proto2.init = function() {
    if (this.$u) {
      var $d2 = this.$d;
      this.$y = $d2.getUTCFullYear();
      this.$M = $d2.getUTCMonth();
      this.$D = $d2.getUTCDate();
      this.$W = $d2.getUTCDay();
      this.$H = $d2.getUTCHours();
      this.$m = $d2.getUTCMinutes();
      this.$s = $d2.getUTCSeconds();
      this.$ms = $d2.getUTCMilliseconds();
    } else {
      oldInit.call(this);
    }
  };
  var oldUtcOffset = proto2.utcOffset;
  proto2.utcOffset = function(input, keepLocalTime) {
    var _this$$utils = this.$utils(), u3 = _this$$utils.u;
    if (u3(input)) {
      if (this.$u) {
        return 0;
      }
      if (!u3(this.$offset)) {
        return this.$offset;
      }
      return oldUtcOffset.call(this);
    }
    if (typeof input === "string") {
      input = offsetFromString(input);
      if (input === null) {
        return this;
      }
    }
    var offset2 = Math.abs(input) <= 16 ? input * 60 : input;
    var ins = this;
    if (keepLocalTime) {
      ins.$offset = offset2;
      ins.$u = input === 0;
      return ins;
    }
    if (input !== 0) {
      var localTimezoneOffset = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
      ins = this.local().add(offset2 + localTimezoneOffset, MIN);
      ins.$offset = offset2;
      ins.$x.$localOffset = localTimezoneOffset;
    } else {
      ins = this.utc();
    }
    return ins;
  };
  var oldFormat = proto2.format;
  var UTC_FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ss[Z]";
  proto2.format = function(formatStr) {
    var str = formatStr || (this.$u ? UTC_FORMAT_DEFAULT : "");
    return oldFormat.call(this, str);
  };
  proto2.valueOf = function() {
    var addedOffset = !this.$utils().u(this.$offset) ? this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset()) : 0;
    return this.$d.valueOf() - addedOffset * MILLISECONDS_A_MINUTE;
  };
  proto2.isUTC = function() {
    return !!this.$u;
  };
  proto2.toISOString = function() {
    return this.toDate().toISOString();
  };
  proto2.toString = function() {
    return this.toDate().toUTCString();
  };
  var oldToDate = proto2.toDate;
  proto2.toDate = function(type) {
    if (type === "s" && this.$offset) {
      return dayjs4(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate();
    }
    return oldToDate.call(this);
  };
  var oldDiff = proto2.diff;
  proto2.diff = function(input, units, _float) {
    if (input && this.$u === input.$u) {
      return oldDiff.call(this, input, units, _float);
    }
    var localThis = this.local();
    var localInput = dayjs4(input).local();
    return oldDiff.call(localThis, localInput, units, _float);
  };
};

// node_modules/dayjs/esm/plugin/timezone/index.js
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
var dtfCache = {};
var getDateTimeFormat = function getDateTimeFormat2(timezone, options) {
  if (options === void 0) {
    options = {};
  }
  var timeZoneName = options.timeZoneName || "short";
  var key = timezone + "|" + timeZoneName;
  var dtf = dtfCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName
    });
    dtfCache[key] = dtf;
  }
  return dtf;
};
var timezone_default = function(o, c, d) {
  var defaultTimezone;
  var makeFormatParts = function makeFormatParts2(timestamp2, timezone, options) {
    if (options === void 0) {
      options = {};
    }
    var date = new Date(timestamp2);
    var dtf = getDateTimeFormat(timezone, options);
    return dtf.formatToParts(date);
  };
  var tzOffset = function tzOffset2(timestamp2, timezone) {
    var formatResult = makeFormatParts(timestamp2, timezone);
    var filled = [];
    for (var i = 0; i < formatResult.length; i += 1) {
      var _formatResult$i = formatResult[i], type = _formatResult$i.type, value2 = _formatResult$i.value;
      var pos = typeToPos[type];
      if (pos >= 0) {
        filled[pos] = parseInt(value2, 10);
      }
    }
    var hour = filled[3];
    var fixedHour = hour === 24 ? 0 : hour;
    var utcString = filled[0] + "-" + filled[1] + "-" + filled[2] + " " + fixedHour + ":" + filled[4] + ":" + filled[5] + ":000";
    var utcTs = d.utc(utcString).valueOf();
    var asTS = +timestamp2;
    var over = asTS % 1e3;
    asTS -= over;
    return (utcTs - asTS) / (60 * 1e3);
  };
  var fixOffset = function fixOffset2(localTS, o0, tz) {
    var utcGuess = localTS - o0 * 60 * 1e3;
    var o2 = tzOffset(utcGuess, tz);
    if (o0 === o2) {
      return [utcGuess, o0];
    }
    utcGuess -= (o2 - o0) * 60 * 1e3;
    var o3 = tzOffset(utcGuess, tz);
    if (o2 === o3) {
      return [utcGuess, o2];
    }
    return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
  };
  var proto2 = c.prototype;
  proto2.tz = function(timezone, keepLocalTime) {
    if (timezone === void 0) {
      timezone = defaultTimezone;
    }
    var oldOffset = this.utcOffset();
    var date = this.toDate();
    var target = date.toLocaleString("en-US", {
      timeZone: timezone
    });
    var diff = Math.round((date - new Date(target)) / 1e3 / 60);
    var offset2 = -Math.round(date.getTimezoneOffset() / 15) * 15 - diff;
    var isUTC = !Number(offset2);
    var ins;
    if (isUTC) {
      ins = this.utcOffset(0, keepLocalTime);
    } else {
      ins = d(target, {
        locale: this.$L
      }).$set(MS, this.$ms).utcOffset(offset2, true);
      if (keepLocalTime) {
        var newOffset = ins.utcOffset();
        ins = ins.add(oldOffset - newOffset, MIN);
      }
    }
    ins.$x.$timezone = timezone;
    return ins;
  };
  proto2.offsetName = function(type) {
    var zone = this.$x.$timezone || d.tz.guess();
    var result = makeFormatParts(this.valueOf(), zone, {
      timeZoneName: type
    }).find(function(m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return result && result.value;
  };
  var oldStartOf = proto2.startOf;
  proto2.startOf = function(units, startOf) {
    if (!this.$x || !this.$x.$timezone) {
      return oldStartOf.call(this, units, startOf);
    }
    var withoutTz = d(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
      locale: this.$L
    });
    var startOfWithoutTz = oldStartOf.call(withoutTz, units, startOf);
    return startOfWithoutTz.tz(this.$x.$timezone, true);
  };
  d.tz = function(input, arg1, arg2) {
    var parseFormat = arg2 && arg1;
    var timezone = arg2 || arg1 || defaultTimezone;
    var previousOffset = tzOffset(+d(), timezone);
    if (typeof input !== "string") {
      return d(input).tz(timezone);
    }
    var localTs = d.utc(input, parseFormat).valueOf();
    var _fixOffset = fixOffset(localTs, previousOffset, timezone), targetTs = _fixOffset[0], targetOffset = _fixOffset[1];
    var ins = d(targetTs).utcOffset(targetOffset);
    ins.$x.$timezone = timezone;
    return ins;
  };
  d.tz.guess = function() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };
  d.tz.setDefault = function(timezone) {
    defaultTimezone = timezone;
  };
};

// node_modules/dayjs/esm/plugin/advancedFormat/index.js
var advancedFormat_default = function(o, c) {
  var proto2 = c.prototype;
  var oldFormat = proto2.format;
  proto2.format = function(formatStr) {
    var _this = this;
    var locale = this.$locale();
    if (!this.isValid()) {
      return oldFormat.bind(this)(formatStr);
    }
    var utils = this.$utils();
    var str = formatStr || FORMAT_DEFAULT;
    var result = str.replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(match) {
      switch (match) {
        case "Q":
          return Math.ceil((_this.$M + 1) / 3);
        case "Do":
          return locale.ordinal(_this.$D);
        case "gggg":
          return _this.weekYear();
        case "GGGG":
          return _this.isoWeekYear();
        case "wo":
          return locale.ordinal(_this.week(), "W");
        case "w":
        case "ww":
          return utils.s(_this.week(), match === "w" ? 1 : 2, "0");
        case "W":
        case "WW":
          return utils.s(_this.isoWeek(), match === "W" ? 1 : 2, "0");
        case "k":
        case "kk":
          return utils.s(String(_this.$H === 0 ? 24 : _this.$H), match === "k" ? 1 : 2, "0");
        case "X":
          return Math.floor(_this.$d.getTime() / 1e3);
        case "x":
          return _this.$d.getTime();
        case "z":
          return "[" + _this.offsetName() + "]";
        case "zzz":
          return "[" + _this.offsetName("long") + "]";
        default:
          return match;
      }
    });
    return oldFormat.bind(this)(result);
  };
};

// node_modules/frappe-ui/src/utils/config.js
var config = {};
function setConfig(key, value2) {
  config[key] = value2;
}
function getConfig(key) {
  return config[key] || null;
}

// node_modules/frappe-ui/src/utils/dayjs.js
esm_default.extend(updateLocale_default);
esm_default.extend(relativeTime_default);
esm_default.extend(localizedFormat_default);
esm_default.extend(isToday_default);
esm_default.extend(duration_default);
esm_default.extend(utc_default);
esm_default.extend(timezone_default);
esm_default.extend(advancedFormat_default);
function getBrowserTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function dayjsLocal(dateTimeString) {
  let systemTimezone = getConfig("systemTimezone");
  let localTimezone = getConfig("localTimezone") || getBrowserTimezone();
  if (!systemTimezone) return esm_default(dateTimeString);
  if (!dateTimeString) return esm_default().tz(localTimezone);
  return esm_default.tz(dateTimeString, systemTimezone).tz(localTimezone);
}
var dayjs3 = esm_default;

// node_modules/frappe-ui/src/utils/request.js
function request(_options) {
  let options = Object.assign({}, _options);
  if (!options.url) {
    throw new Error("[request] options.url is required");
  }
  if (options.transformRequest) {
    options = options.transformRequest(_options);
  }
  if (!options.responseType) {
    options.responseType = "json";
  }
  if (!options.method) {
    options.method = "GET";
  }
  let url2 = options.url;
  let body;
  if (options.params) {
    if (options.method === "GET") {
      let params = new URLSearchParams();
      for (let key in options.params) {
        params.append(key, options.params[key]);
      }
      url2 = options.url + "?" + params.toString();
    } else {
      body = JSON.stringify(options.params);
    }
  }
  return fetch(url2, {
    method: options.method || "GET",
    headers: options.headers,
    body
  }).then((response) => {
    if (options.transformResponse) {
      return options.transformResponse(response, options);
    }
    if (response.status >= 200 && response.status < 300) {
      if (options.responseType === "json") {
        return response.json();
      }
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }).catch((error) => {
    if (options.transformError) {
      return options.transformError(error);
    }
    throw error;
  });
}

// node_modules/idb-keyval/dist/index.js
function promisifyRequest(request2) {
  return new Promise((resolve, reject) => {
    request2.oncomplete = request2.onsuccess = () => resolve(request2.result);
    request2.onabort = request2.onerror = () => reject(request2.error);
  });
}
function createStore(dbName, storeName) {
  let dbp;
  const getDB = () => {
    if (dbp)
      return dbp;
    const request2 = indexedDB.open(dbName);
    request2.onupgradeneeded = () => request2.result.createObjectStore(storeName);
    dbp = promisifyRequest(request2);
    dbp.then((db) => {
      db.onclose = () => dbp = void 0;
    }, () => {
    });
    return dbp;
  };
  return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
var defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value2, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value2, key);
    return promisifyRequest(store.transaction);
  });
}
function setMany(entries, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    entries.forEach((entry) => store.put(entry[1], entry[0]));
    return promisifyRequest(store.transaction);
  });
}
function del2(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys2(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}

// node_modules/frappe-ui/src/resources/local.js
function saveLocal(key, data) {
  if (typeof indexedDB === "undefined") {
    return Promise.resolve(null);
  }
  if (!key) return Promise.resolve();
  return set(key, JSON.stringify(data));
}
function deleteLocal(key) {
  if (typeof indexedDB === "undefined") {
    return Promise.resolve(null);
  }
  if (!key) return Promise.resolve();
  return del2(key);
}
function getLocal(key) {
  if (typeof indexedDB === "undefined") {
    return Promise.resolve(null);
  }
  return get(key).then((val) => val ? JSON.parse(val) : val);
}

// node_modules/frappe-ui/src/resources/resources.js
var cached = {};
function createResource(options, vm) {
  let cacheKey = null;
  if (options.cache) {
    cacheKey = getCacheKey(options.cache);
    let cachedResource = cached[cacheKey];
    if (cachedResource) {
      if (cachedResource.auto) {
        cachedResource.reload();
      }
      return cachedResource;
    }
  }
  if (typeof options == "string") {
    options = {
      url: options,
      auto: true
    };
  }
  let fetchFunction = options.debounce ? debounce3(fetch2, options.debounce) : fetch2;
  let out = reactive({
    method: options.method,
    url: options.url,
    data: options.initialData || null,
    previousData: null,
    loading: false,
    fetched: false,
    error: null,
    promise: null,
    auto: options.auto,
    params: null,
    fetch: fetchFunction,
    reload: fetchFunction,
    submit: fetchFunction,
    reset,
    update,
    setData
  });
  async function fetch2(params, tempOptions = {}) {
    let resourceFetcher = options.resourceFetcher || getConfig("resourceFetcher") || request;
    if (params instanceof Event) {
      params = null;
    }
    params = params || out.params;
    if (options.makeParams) {
      params = options.makeParams.call(vm, params);
    }
    out.params = params;
    out.previousData = out.data ? JSON.parse(JSON.stringify(out.data)) : null;
    out.loading = true;
    out.error = null;
    if (options.onFetch) {
      options.onFetch.call(vm, out.params);
    }
    let beforeSubmitFunctions = [options.beforeSubmit, tempOptions.beforeSubmit];
    for (let fn2 of beforeSubmitFunctions) {
      if (fn2) {
        fn2.call(vm, out.params);
      }
    }
    let validateFunction = tempOptions.validate || options.validate;
    let errorFunctions = [options.onError, tempOptions.onError];
    let successFunctions = [options.onSuccess, tempOptions.onSuccess];
    let dataFunctions = [options.onData, tempOptions.onData];
    if (validateFunction) {
      let invalidMessage;
      try {
        invalidMessage = await validateFunction.call(vm, out.params);
        if (invalidMessage && typeof invalidMessage == "string") {
          throw new Error(invalidMessage);
        }
      } catch (error) {
        handleError(error, errorFunctions);
        return;
      }
    }
    try {
      out.promise = resourceFetcher({
        ...options,
        params: params || options.params
      });
      let data = await out.promise;
      saveLocal(cacheKey, data);
      out.data = transform(data);
      out.fetched = true;
      for (let fn2 of successFunctions) {
        if (fn2) {
          fn2.call(vm, data);
        }
      }
      for (let fn2 of dataFunctions) {
        if (fn2) {
          fn2.call(vm, data);
        }
      }
    } catch (error) {
      handleError(error, errorFunctions);
    }
    out.loading = false;
    return out.data;
  }
  function update({ method, url: url2, params, auto: auto2 }) {
    if (method && method !== options.method) {
      out.method = method;
    }
    if (url2 && url2 !== options.url) {
      out.url = url2;
    }
    if (params && params !== options.params) {
      out.params = params;
    }
    if (auto2 !== void 0 && auto2 !== out.auto) {
      out.auto = auto2;
    }
  }
  function reset() {
    out.data = options.initialData || null;
    out.previousData = null;
    out.loading = false;
    out.fetched = false;
    out.error = null;
    out.params = null;
    out.auto = options.auto;
  }
  function handleError(error, errorFunctions) {
    out.loading = false;
    if (out.previousData) {
      out.data = out.previousData;
    }
    out.error = error;
    for (let fn2 of errorFunctions) {
      if (fn2) {
        fn2.call(vm, error);
      }
    }
    if (errorFunctions.every((fn2) => fn2 == null)) {
      let errorHandler = getConfig("fallbackErrorHandler");
      if (errorHandler) {
        try {
          errorHandler(error);
        } catch (error2) {
          console.warn("Error in fallbackErrorHandler", error2);
        }
      }
    }
    throw error;
  }
  function setData(data) {
    if (typeof data === "function") {
      data = data.call(vm, out.data);
    }
    out.data = transform(data);
  }
  function transform(data) {
    if (options.transform) {
      let returnValue = options.transform.call(vm, data);
      if (returnValue != null) {
        return returnValue;
      }
    }
    return data;
  }
  if (cacheKey && !cached[cacheKey]) {
    cached[cacheKey] = out;
    getLocal(cacheKey).then((data) => {
      var _a;
      if ((out.loading || !out.fetched) && data) {
        setData(data);
        (_a = options.onData) == null ? void 0 : _a.call(vm, data);
      }
    });
  }
  if (options.auto) {
    out.fetch();
  }
  return out;
}
function getCacheKey(cacheKey) {
  if (!cacheKey) {
    return null;
  }
  if (typeof cacheKey === "string") {
    cacheKey = [cacheKey];
  }
  return JSON.stringify(cacheKey);
}
function getCachedResource(cacheKey) {
  cacheKey = getCacheKey(cacheKey);
  return cached[cacheKey] || null;
}

// node_modules/frappe-ui/src/resources/realtime.js
function onDocUpdate(socket, doctype, callback) {
  subscribe(socket, doctype);
  socket.on("list_update", (data) => {
    if (data.doctype == doctype) {
      callback(data.name);
    }
  });
}
var subscribed = {};
function subscribe(socket, doctype) {
  if (subscribed[doctype]) return;
  socket.emit("doctype_subscribe", doctype);
  subscribed[doctype] = true;
}

// node_modules/frappe-ui/src/resources/listResource.js
var listCache = reactive({});
var resourcesByDocType = {};
function createListResource(options, vm) {
  var _a, _b, _c, _d, _e;
  if (!options.doctype) {
    throw new Error("List resource requires doctype");
  }
  let cacheKey = getCacheKey(options.cache);
  if (cacheKey) {
    let cachedResource = listCache[cacheKey];
    if (cachedResource) {
      if (cachedResource.auto) {
        cachedResource.reload();
      }
      return cachedResource;
    }
  }
  let defaultListUrl = getConfig("defaultListUrl") || "frappe.client.get_list";
  let defaultDocInsertUrl = getConfig("defaultDocInsertUrl") || "frappe.client.insert";
  let defaultDocUpdateUrl = getConfig("defaultDocUpdateUrl") || "frappe.client.set_value";
  let defaultDocDeleteUrl = getConfig("defaultDocDeleteUrl") || "frappe.client.delete";
  let defaultRunDocMethodUrl = getConfig("defaultRunDocMethodUrl") || "run_doc_method";
  let out = reactive({
    doctype: options.doctype,
    fields: options.fields,
    filters: options.filters,
    orFilters: options.orFilters,
    orderBy: options.orderBy,
    start: options.start || 0,
    pageLength: options.pageLength || 20,
    groupBy: options.groupBy,
    parent: options.parent,
    debug: options.debug || 0,
    originalData: null,
    dataMap: {},
    data: null,
    previous,
    hasPreviousPage: false,
    next,
    hasNextPage: true,
    auto: options.auto,
    list: createResource(
      {
        url: options.url || defaultListUrl,
        makeParams() {
          return {
            doctype: out.doctype,
            fields: out.fields,
            filters: out.filters,
            or_filters: out.orFilters,
            order_by: out.orderBy,
            start: out.start,
            limit: out.pageLength,
            limit_start: out.start,
            limit_page_length: out.pageLength,
            group_by: out.groupBy,
            parent: out.parent,
            debug: out.debug
          };
        },
        onSuccess(data) {
          var _a2;
          out.hasPreviousPage = !!out.start;
          out.hasNextPage = data.length < out.pageLength ? false : true;
          let pagedData;
          if (!out.start || out.start == 0) {
            pagedData = data;
          } else if (out.start > 0) {
            pagedData = out.originalData.concat(data);
          }
          saveLocal(cacheKey, pagedData);
          setData(pagedData);
          (_a2 = options.onSuccess) == null ? void 0 : _a2.call(vm, out.data);
        },
        onError: options.onError
      },
      vm
    ),
    fetchOne: createResource(
      {
        url: options.url || defaultListUrl,
        makeParams(name) {
          return {
            doctype: out.doctype,
            fields: out.fields || "*",
            filters: { name }
          };
        },
        onSuccess(data) {
          var _a2, _b2;
          if (data.length > 0 && out.originalData) {
            let doc3 = data[0];
            updateRowInListResource(out.doctype, doc3);
          }
          (_b2 = (_a2 = options.fetchOne) == null ? void 0 : _a2.onSuccess) == null ? void 0 : _b2.call(vm, out.data);
        },
        onError: (_a = options.fetchOne) == null ? void 0 : _a.onError
      },
      vm
    ),
    insert: createResource(
      {
        url: defaultDocInsertUrl,
        makeParams(values) {
          return {
            doc: {
              doctype: out.doctype,
              ...values
            }
          };
        },
        onSuccess(data) {
          var _a2, _b2;
          out.list.fetch();
          (_b2 = (_a2 = options.insert) == null ? void 0 : _a2.onSuccess) == null ? void 0 : _b2.call(vm, data);
        },
        onError: (_b = options.insert) == null ? void 0 : _b.onError
      },
      vm
    ),
    setValue: createResource(
      {
        url: defaultDocUpdateUrl,
        makeParams(options2) {
          let { name, ...values } = options2;
          return {
            doctype: out.doctype,
            name,
            fieldname: values
          };
        },
        onSuccess(doc3) {
          var _a2, _b2;
          updateRowInListResource(out.doctype, doc3);
          (_b2 = (_a2 = options.setValue) == null ? void 0 : _a2.onSuccess) == null ? void 0 : _b2.call(vm, doc3);
        },
        onError: (_c = options.setValue) == null ? void 0 : _c.onError
      },
      vm
    ),
    delete: createResource(
      {
        url: defaultDocDeleteUrl,
        makeParams(name) {
          return {
            doctype: out.doctype,
            name
          };
        },
        onSuccess(data) {
          var _a2, _b2;
          out.list.fetch();
          (_b2 = (_a2 = options.delete) == null ? void 0 : _a2.onSuccess) == null ? void 0 : _b2.call(vm, data);
        },
        onError: (_d = options.delete) == null ? void 0 : _d.onError
      },
      vm
    ),
    runDocMethod: createResource(
      {
        url: defaultRunDocMethodUrl,
        makeParams({ method, name, ...values }) {
          return {
            dt: out.doctype,
            dn: name,
            method,
            args: values
          };
        },
        onSuccess(data) {
          var _a2, _b2;
          if (data.docs) {
            for (let doc3 of data.docs) {
              updateRowInListResource(doc3.doctype, doc3);
            }
          }
          (_b2 = (_a2 = options.runDocMethod) == null ? void 0 : _a2.onSuccess) == null ? void 0 : _b2.call(vm, data);
        },
        onError: (_e = options.runDocMethod) == null ? void 0 : _e.onError
      },
      vm
    ),
    update,
    fetch: fetch2,
    reload,
    setData,
    transform,
    getRow
  });
  function update(updatedOptions) {
    Object.assign(out, updatedOptions);
  }
  function transform(data) {
    if (options.transform) {
      let returnValue = options.transform.call(vm, data);
      if (returnValue != null) {
        return returnValue;
      }
    }
    return data;
  }
  function reload() {
    let _start = out.start;
    let _pageLength = out.pageLength;
    if (out.start > 0) {
      out.start = 0;
      out.pageLength = out.originalData.length;
    }
    return out.list.fetch().finally(() => {
      out.start = _start;
      out.pageLength = _pageLength;
    });
  }
  function fetch2() {
    reload();
  }
  function setData(data) {
    out.originalData = data;
    if (typeof data === "function") {
      data = data.call(vm, out.data);
    }
    out.data = transform(data);
    if (Array.isArray(out.data)) {
      out.dataMap = {};
      for (let row of out.data) {
        if (!row.name) continue;
        let key = row.name.toString();
        out.dataMap[key] = row;
      }
    }
  }
  function previous() {
    out.start = out.start - out.pageLength;
    out.list.fetch();
  }
  function next() {
    out.start = out.start + out.pageLength;
    out.list.fetch();
  }
  function getRow(name) {
    let key = name.toString();
    return out.dataMap[key];
  }
  if (options.realtime && (vm == null ? void 0 : vm.$socket)) {
    onDocUpdate(vm.$socket, out.doctype, (name) => {
      var _a2;
      if ((_a2 = out.originalData) == null ? void 0 : _a2.find((d) => d.name === name)) {
        out.fetchOne.submit(name);
      }
    });
  }
  if (cacheKey) {
    listCache[cacheKey] = out;
    getLocal(cacheKey).then((data) => {
      var _a2;
      if ((out.list.loading || !out.list.fetched) && data) {
        setData(data);
        (_a2 = options.onData) == null ? void 0 : _a2.call(vm, data);
      }
    });
  }
  if (options.auto) {
    out.list.fetch();
  }
  resourcesByDocType[out.doctype] = resourcesByDocType[out.doctype] || [];
  resourcesByDocType[out.doctype].push(out);
  return out;
}
function getCachedListResource(cacheKey) {
  cacheKey = getCacheKey(cacheKey);
  return listCache[cacheKey] || null;
}
function updateRowInListResource(doctype, doc3) {
  if (!doc3.name) return;
  let resources = resourcesByDocType[doctype] || [];
  for (let resource of resources) {
    if (resource.originalData) {
      for (let row of resource.originalData) {
        if (row.name && row.name == doc3.name) {
          delete row._previousData;
          let previousRowData = JSON.stringify(row);
          for (let key in row) {
            if (key in doc3) {
              row[key] = doc3[key];
            }
          }
          row._previousData = previousRowData;
        }
      }
      resource.data = resource.transform(resource.originalData);
    }
  }
}
function deleteRowInListResource(doctype, docname) {
  let resources = resourcesByDocType[doctype] || [];
  for (let resource of resources) {
    if (resource.originalData) {
      resource.originalData = resource.originalData.filter(
        (row) => row.name.toString() !== docname.toString()
      );
      resource.data = resource.transform(resource.originalData);
    }
  }
}
function revertRowInListResource(doctype, doc3) {
  let resources = resourcesByDocType[doctype] || [];
  for (let resource of resources) {
    if (resource.originalData) {
      for (let row of resource.originalData) {
        if (row.name && row.name == doc3.name) {
          let previousRowData = JSON.parse(row._previousData);
          for (let key in row) {
            row[key] = previousRowData[key];
          }
          delete row._previousData;
        }
      }
      resource.data = resource.transform(resource.originalData);
    }
  }
}

// node_modules/frappe-ui/src/resources/documentResource.js
var documentCache = reactive({});
function createDocumentResource(options, vm) {
  var _a;
  if (!(options.doctype && options.name)) return;
  let cacheKey = getCacheKey([options.doctype, options.name]);
  let cachedResource = documentCache[cacheKey];
  if (cachedResource) {
    if (cachedResource.auto) {
      cachedResource.reload();
    }
    return cachedResource;
  }
  let defaultDocGetUrl = getConfig("defaultDocGetUrl") || "frappe.client.get";
  let defaultDocUpdateUrl = getConfig("defaultDocUpdateUrl") || "frappe.client.set_value";
  let defaultDocDeleteUrl = getConfig("defaultDocDeleteUrl") || "frappe.client.delete";
  let defaultRunDocMethodUrl = getConfig("defaultRunDocMethodUrl") || "run_doc_method";
  let setValueOptions = {
    url: defaultDocUpdateUrl,
    makeParams(values) {
      return {
        doctype: out.doctype,
        name: out.name,
        fieldname: values
      };
    },
    beforeSubmit(params) {
      out.previousDoc = JSON.stringify(out.doc);
      Object.assign(out.doc, params.fieldname || {});
      updateRowInListResource(out.doctype, out.doc);
    },
    onSuccess(data) {
      var _a2, _b;
      out.doc = transform(data);
      out.originalDoc = JSON.parse(JSON.stringify(out.doc));
      (_b = (_a2 = options.setValue) == null ? void 0 : _a2.onSuccess) == null ? void 0 : _b.call(vm, data);
    },
    onError(error) {
      var _a2, _b;
      out.doc = JSON.parse(out.previousDoc);
      (_b = (_a2 = options.setValue) == null ? void 0 : _a2.onError) == null ? void 0 : _b.call(vm, error);
      revertRowInListResource(out.doctype, out.doc);
    }
  };
  const autoPropIsPassed = options.auto !== void 0;
  let out = reactive({
    doctype: options.doctype,
    name: options.name,
    doc: null,
    originalDoc: null,
    isDirty: false,
    auto: autoPropIsPassed ? options.auto : true,
    get: createResource(
      {
        url: defaultDocGetUrl,
        makeParams() {
          return {
            doctype: out.doctype,
            name: out.name
          };
        },
        onSuccess(data) {
          var _a2;
          saveLocal(cacheKey, data);
          out.doc = transform(data);
          out.originalDoc = JSON.parse(JSON.stringify(out.doc));
          (_a2 = options.onSuccess) == null ? void 0 : _a2.call(vm, out.doc);
        },
        onError(error) {
          var _a2;
          deleteLocal(cacheKey);
          out.doc = null;
          out.originalDoc = null;
          (_a2 = options.onError) == null ? void 0 : _a2.call(vm, error);
        }
      },
      vm
    ),
    setValue: createResource(setValueOptions, vm),
    setValueDebounced: createResource(
      {
        ...setValueOptions,
        debounce: options.debounce || 500
      },
      vm
    ),
    save: createResource(
      {
        ...setValueOptions,
        makeParams() {
          let values = JSON.parse(JSON.stringify(out.doc));
          delete values.doctype;
          delete values.name;
          return {
            doctype: out.doctype,
            name: out.name,
            fieldname: values
          };
        }
      },
      vm
    ),
    delete: createResource(
      {
        url: defaultDocDeleteUrl,
        makeParams() {
          return {
            doctype: out.doctype,
            name: out.name
          };
        },
        onSuccess() {
          var _a2, _b;
          out.doc = null;
          (_b = (_a2 = options.delete) == null ? void 0 : _a2.onSuccess) == null ? void 0 : _b.call(vm);
          deleteRowInListResource(out.doctype, out.name);
        },
        onError: (_a = options.delete) == null ? void 0 : _a.onError
      },
      vm
    ),
    reload,
    setDoc
  });
  watch(
    () => out.doc,
    () => {
      out.isDirty = JSON.stringify(out.doc) !== JSON.stringify(out.originalDoc);
    },
    {
      deep: true
    }
  );
  for (let methodKey in options.whitelistedMethods) {
    let methodOptions = options.whitelistedMethods[methodKey];
    if (typeof methodOptions == "string") {
      methodOptions = {
        method: methodOptions
      };
    }
    let {
      method,
      onSuccess,
      makeParams,
      transform: _transform,
      ...otherOptions
    } = methodOptions;
    out[methodKey] = createResource(
      {
        url: defaultRunDocMethodUrl,
        makeParams(values) {
          values = makeParams ? makeParams.call(vm, values) : values;
          return {
            dt: out.doctype,
            dn: out.name,
            method,
            args: values
          };
        },
        transform(data) {
          if (_transform) {
            let returnValue = _transform.call(vm, data.message);
            if (returnValue != null) {
              return returnValue;
            }
          }
          return data.message;
        },
        onSuccess(data) {
          if (data.docs) {
            for (let doc3 of data.docs) {
              if (doc3.doctype === out.doctype && doc3.name.toString() === out.name.toString()) {
                out.doc = transform(doc3);
                updateRowInListResource(out.doctype, out.doc);
                break;
              }
            }
          }
          onSuccess == null ? void 0 : onSuccess.call(vm, data.message);
        },
        ...otherOptions
      },
      vm
    );
  }
  function reload() {
    return out.get.fetch();
  }
  function setDoc(doc3) {
    if (typeof doc3 === "function") {
      doc3 = doc3.call(vm, out.doc);
    }
    out.doc = transform(doc3);
  }
  function transform(doc3) {
    if (options.transform) {
      let returnValue = options.transform.call(vm, doc3);
      if (typeof returnValue === "object") {
        return returnValue;
      }
    }
    return doc3;
  }
  if (options.realtime && vm.$socket) {
    onDocUpdate(vm.$socket, out.doctype, (name) => {
      if (name == out.name) {
        out.get.fetch();
      }
    });
  }
  documentCache[cacheKey] = out;
  getLocal(cacheKey).then((data) => {
    if ((out.get.loading || !out.get.fetched) && data) {
      out.doc = transform(data);
    }
  });
  if (out.auto) {
    out.get.fetch();
  }
  return out;
}
function getCachedDocumentResource(doctype, name) {
  let cacheKey = getCacheKey([doctype, name]);
  return documentCache[cacheKey] || null;
}

// node_modules/frappe-ui/src/resources/plugin.js
var createMixin2 = (mixinOptions) => ({
  created() {
    if (this.$options.resources) {
      this._resources = reactive({});
      for (let key in this.$options.resources) {
        let options = this.$options.resources[key];
        if (typeof options == "function") {
          watch(
            () => {
              let out = null;
              try {
                out = options.call(this);
              } catch (error) {
                console.warn("Failed to get resource options\n\n", error);
                out = null;
              }
              return out;
            },
            (options2, oldOptions) => {
              if (!options2) {
                return;
              }
              let changed = !oldOptions || JSON.stringify(options2) !== JSON.stringify(oldOptions);
              if (!changed) return;
              this._resources[key] = createResourceForOptions(options2, this);
            },
            {
              immediate: true,
              deep: true
            }
          );
        } else {
          let resource = createResourceForOptions(options, this);
          this._resources[key] = resource;
        }
      }
    }
  },
  methods: {
    $getResource(cacheKey) {
      return getCachedResource(cacheKey);
    },
    $getDocumentResource(doctype, name) {
      return getCachedDocumentResource(doctype, name);
    },
    $getDoc(doctype, name) {
      let resource = this.$getDocumentResource(doctype, name);
      return resource ? resource.doc : null;
    },
    $getListResource(cacheKey) {
      return getCachedListResource(cacheKey);
    },
    $refetchResource(cache2) {
      let resource = this.$getResource(cache2);
      resource && resource.fetch();
    }
  },
  computed: {
    $resources() {
      return this._resources;
    }
  }
});
function createResourceForOptions(options, vm) {
  if (options.type === "document") {
    return createDocumentResource(options, vm);
  }
  if (options.type === "list") {
    return createListResource(options, vm);
  }
  return createResource(options, vm);
}
var plugin_default = {
  install(app, options) {
    let resourceMixin = createMixin2(options);
    app.mixin(resourceMixin);
  }
};

// node_modules/frappe-ui/src/utils/frappeRequest.js
function frappeRequest(options) {
  return request({
    ...options,
    transformRequest: (options2 = {}) => {
      if (!options2.url) {
        throw new Error("[frappeRequest] options.url is required");
      }
      let headers = Object.assign(
        {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
          "X-Frappe-Site-Name": window.location.hostname
        },
        options2.headers || {}
      );
      if (window.csrf_token && window.csrf_token !== "{{ csrf_token }}") {
        headers["X-Frappe-CSRF-Token"] = window.csrf_token;
      }
      if (!options2.url.startsWith("/") && !options2.url.startsWith("http")) {
        options2.url = "/api/method/" + options2.url;
      }
      return {
        ...options2,
        method: options2.method || "POST",
        headers
      };
    },
    transformResponse: async (response, options2) => {
      let url2 = options2.url;
      if (response.ok) {
        const data = await response.json();
        if (data.docs || url2 === "/api/method/login") {
          return data;
        }
        if (data.exc) {
          try {
            console.groupCollapsed(url2);
            console.log(options2);
            let warning = JSON.parse(data.exc);
            for (let text of warning) {
              console.log(text);
            }
            console.groupEnd();
          } catch (e) {
            console.warn("Error printing debug messages", e);
          }
        }
        return data.message;
      } else {
        let errorResponse = await response.text();
        let error, exception;
        try {
          error = JSON.parse(errorResponse);
        } catch (e2) {
        }
        let errorParts = [
          [options2.url, error.exc_type, error._error_message].filter(Boolean).join(" ")
        ];
        if (error.exc) {
          exception = error.exc;
          try {
            exception = JSON.parse(exception)[0];
            console.log(exception);
          } catch (e2) {
          }
        }
        let e = new Error(errorParts.join("\n"));
        e.exc_type = error.exc_type;
        e.exc = exception;
        e.response = response;
        e.status = errorResponse.status;
        e.messages = error._server_messages ? JSON.parse(error._server_messages) : [];
        e.messages = e.messages.concat(error.message);
        e.messages = e.messages.map((m) => {
          try {
            return JSON.parse(m).message;
          } catch (error2) {
            return m;
          }
        });
        e.messages = e.messages.filter(Boolean);
        if (!e.messages.length) {
          e.messages = error._error_message ? [error._error_message] : ["Internal Server Error"];
        }
        options2.onError && options2.onError(e);
        throw e;
      }
    },
    transformError: (error) => {
      options.onError && options.onError(error);
      throw error;
    }
  });
}

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = { type: "error", data: "parser error" };

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, (encoded) => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var decode = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        return data;
      } else {
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        return data;
      } else {
        return data.buffer;
      }
  }
};

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      encodePacketToBinary(packet, (encodedPacket) => {
        const payloadLength = encodedPacket.length;
        let header;
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 128;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
var TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size);
  let j = 0;
  for (let i = 0; i < size; i++) {
    buffer[i] = chunks[0][j++];
    if (j === chunks[0].length) {
      chunks.shift();
      j = 0;
    }
  }
  if (chunks.length && j < chunks[0].length) {
    chunks[0] = chunks[0].slice(j);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const chunks = [];
  let state = 0;
  let expectedLength = -1;
  let isBinary2 = false;
  return new TransformStream({
    transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary2 = (header[0] & 128) === 128;
          expectedLength = header[0] & 127;
          if (expectedLength < 126) {
            state = 3;
          } else if (expectedLength === 126) {
            state = 1;
          } else {
            state = 2;
          }
        } else if (state === 1) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3;
        } else if (state === 2) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n = view.getUint32(0);
          if (n > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
          state = 3;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary2 ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
var protocol = 4;

// node_modules/@socket.io/component-emitter/lib/esm/index.js
function Emitter(obj) {
  if (obj) return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn2) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn2);
  return this;
};
Emitter.prototype.once = function(event, fn2) {
  function on2() {
    this.off(event, on2);
    fn2.apply(this, arguments);
  }
  on2.fn = fn2;
  this.on(event, on2);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn2) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks) return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn2 || cb.fn === fn2) {
      callbacks.splice(i, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};

// node_modules/engine.io-client/build/esm/globals.js
var nextTick2 = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
var defaultBinaryType = "arraybuffer";
function createCookieJar() {
}

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0, length = 0;
  for (let i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 128) {
      length += 1;
    } else if (c < 2048) {
      length += 2;
    } else if (c < 55296 || c >= 57344) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }
  return length;
}
function randomString() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode(obj) {
  let str = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
    }
  }
  return str;
}
function decode2(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i = 0, l = pairs.length; i < l; i++) {
    let pair = pairs[i].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/transport.js
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
    this.supportsBinary = !opts.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   */
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  /**
   * Closes the transport.
   */
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {
    }
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(data) {
    const packet = decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(onPause) {
  }
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
};

// node_modules/engine.io-client/build/esm/transports/polling.js
var Polling = class extends Transport {
  constructor() {
    super(...arguments);
    this._polling = false;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this._polling || !this.writable) {
      let total = 0;
      if (this._polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(data) {
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this._polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this._poll();
      } else {
      }
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const close2 = () => {
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      close2();
    } else {
      this.once("open", close2);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
};

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/polling-xhr.js
function empty2() {
}
var BaseXHR = class extends Polling {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(opts) {
    super(opts);
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(data, fn2) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn2);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class _Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(createRequest, uri, opts) {
    super();
    this.createRequest = createRequest;
    installTimerFunctions(this, opts);
    this._opts = opts;
    this._method = opts.method || "GET";
    this._uri = uri;
    this._data = void 0 !== opts.data ? opts.data : null;
    this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var _a;
    const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this._opts.xd;
    const xhr = this._xhr = this.createRequest(opts);
    try {
      xhr.open(this._method, this._uri, true);
      try {
        if (this._opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this._opts.extraHeaders) {
            if (this._opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {
      }
      if ("POST" === this._method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this._opts.withCredentials;
      }
      if (this._opts.requestTimeout) {
        xhr.timeout = this._opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a2;
        if (xhr.readyState === 3) {
          (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie")
          );
        }
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this._onLoad();
        } else {
          this.setTimeoutFn(() => {
            this._onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this._data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this._onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this._index = _Request.requestsCount++;
      _Request.requests[this._index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(err) {
    this.emitReserved("error", err, this._xhr);
    this._cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(fromError) {
    if ("undefined" === typeof this._xhr || null === this._xhr) {
      return;
    }
    this._xhr.onreadystatechange = empty2;
    if (fromError) {
      try {
        this._xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete _Request.requests[this._index];
    }
    this._xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const data = this._xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this._cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}
var hasXHR2 = function() {
  const xhr = newRequest({
    xdomain: false
  });
  return xhr && xhr.responseType !== null;
}();
var XHR = class extends BaseXHR {
  constructor(opts) {
    super(opts);
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd }, this.opts);
    return new Request(newRequest, this.uri(), opts);
  }
};
function newRequest(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket.js
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var BaseWS = class extends Transport {
  get name() {
    return "websocket";
  }
  doOpen() {
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = this.createSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        try {
          this.doWrite(packet, data);
        } catch (e) {
        }
        if (lastPacket) {
          nextTick2(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.onerror = () => {
      };
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
};
var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var WS = class extends BaseWS {
  createSocket(uri, protocols, opts) {
    return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
  }
  doWrite(_packet, data) {
    this.ws.send(data);
  }
};

// node_modules/engine.io-client/build/esm/transports/webtransport.js
var WT = class extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((err) => {
      this.onError("webtransport error", err);
    });
    this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((stream) => {
        const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = createPacketEncoderStream();
        encoderStream.readable.pipeTo(stream.writable);
        this._writer = encoderStream.writable.getWriter();
        const read2 = () => {
          reader.read().then(({ done, value: value2 }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read2();
          }).catch((err) => {
          });
        };
        read2();
        const packet = { type: "open" };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this._writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      this._writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick2(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a;
    (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: XHR
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse(str) {
  if (str.length > 8e3) {
    throw "URI too long";
  }
  const src = str, b = str.indexOf("["), e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""), uri = {}, i = 14;
  while (i--) {
    uri[parts[i]] = m[i] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
var OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
  addEventListener("offline", () => {
    OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
  }, false);
}
var SocketWithoutUpgrade = class _SocketWithoutUpgrade extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(uri, opts) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    this._prevBufferLen = 0;
    this._pingInterval = -1;
    this._pingTimeout = -1;
    this._maxPayload = -1;
    this._pingTimeoutTime = Infinity;
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      const parsedUri = parse(uri);
      opts.hostname = parsedUri.host;
      opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
      opts.port = parsedUri.port;
      if (parsedUri.query)
        opts.query = parsedUri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = [];
    this._transportsByName = {};
    opts.transports.forEach((t3) => {
      const transportName = t3.prototype.name;
      this.transports.push(transportName);
      this._transportsByName[transportName] = t3;
    });
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    if (withEventListeners) {
      if (this.opts.closeOnBeforeunload) {
        this._beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this._beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this._offlineEventListener = () => {
          this._onClose("transport close", {
            description: "network connection lost"
          });
        };
        OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
      }
    }
    if (this.opts.withCredentials) {
      this._cookieJar = createCookieJar();
    }
    this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new this._transportsByName[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const transportName = this.opts.rememberUpgrade && _SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const transport = this.createTransport(transportName);
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open";
    _SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this._sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          this._resetPingTimeout();
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this._onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this._pingInterval = data.pingInterval;
    this._pingTimeout = data.pingTimeout;
    this._maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const delay = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + delay;
    this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, delay);
    if (this.opts.autoUnref) {
      this._pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen);
    this._prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this._getWritablePackets();
      this.transport.send(packets);
      this._prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const data = this.writeBuffer[i].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i > 0 && payloadSize > this._maxPayload) {
        return this.writeBuffer.slice(0, i);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return true;
    const hasExpired = Date.now() > this._pingTimeoutTime;
    if (hasExpired) {
      this._pingTimeoutTime = 0;
      nextTick2(() => {
        this._onClose("ping timeout");
      }, this.setTimeoutFn);
    }
    return hasExpired;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn2) {
    this._sendPacket("message", msg, options, fn2);
    return this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(msg, options, fn2) {
    this._sendPacket("message", msg, options, fn2);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(type, data, options, fn2) {
    if ("function" === typeof data) {
      fn2 = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn2 = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn2)
      this.once("flush", fn2);
    this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const close2 = () => {
      this._onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close2();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close2();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close2();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(err) {
    _SocketWithoutUpgrade.priorWebsocketSuccess = false;
    if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
      this.transports.shift();
      return this._open();
    }
    this.emitReserved("error", err);
    this._onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (withEventListeners) {
        if (this._beforeunloadEventListener) {
          removeEventListener("beforeunload", this._beforeunloadEventListener, false);
        }
        if (this._offlineEventListener) {
          const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
          if (i !== -1) {
            OFFLINE_EVENT_LISTENERS.splice(i, 1);
          }
        }
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this._prevBufferLen = 0;
    }
  }
};
SocketWithoutUpgrade.protocol = protocol;
var SocketWithUpgrade = class extends SocketWithoutUpgrade {
  constructor() {
    super(...arguments);
    this._upgrades = [];
  }
  onOpen() {
    super.onOpen();
    if ("open" === this.readyState && this.opts.upgrade) {
      for (let i = 0; i < this._upgrades.length; i++) {
        this._probe(this._upgrades[i]);
      }
    }
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onHandshake(data) {
    this._upgrades = this._filterUpgrades(data.upgrades);
    super.onHandshake(data);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    for (let i = 0; i < upgrades.length; i++) {
      if (~this.transports.indexOf(upgrades[i]))
        filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
};
var Socket = class extends SocketWithUpgrade {
  constructor(uri, opts = {}) {
    const o = typeof uri === "object" ? uri : opts;
    if (!o.transports || o.transports && typeof o.transports[0] === "string") {
      o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map((transportName) => transports[transportName]).filter((t3) => !!t3);
    }
    super(uri, o);
  }
};

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;

// node_modules/socket.io-client/build/esm/url.js
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-parser/build/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol3
});

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer3 = typeof ArrayBuffer === "function";
var isView2 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob2 = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer3 && (obj instanceof ArrayBuffer || isView2(obj)) || withNativeBlob2 && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var RESERVED_EVENTS = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
];
var protocol3 = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
function isObject(value2) {
  return Object.prototype.toString.call(value2) === "[object Object]";
}
var Decoder = class _Decoder extends Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start2 = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {
      }
      const buf = str.substring(start2, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start2 = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c)
          break;
        if (i === str.length)
          break;
      }
      p.nsp = str.substring(start2, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start2 = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length)
          break;
      }
      p.id = Number(str.substring(start2, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (_Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn2) {
  obj.on(ev, fn2);
  return function subDestroy() {
    obj.off(ev, fn2);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var RESERVED_EVENTS2 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
var Socket2 = class extends Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect)
      this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(ev, ...args) {
    var _a, _b, _c;
    if (RESERVED_EVENTS2.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
    const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
    const discardPacket = this.flags.volatile && !isTransportWritable;
    if (discardPacket) {
    } else if (isConnected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  /**
   * @private
   */
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    const fn2 = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, args);
    };
    fn2.withError = true;
    this.acks[id] = fn2;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(ev, ...args) {
    return new Promise((resolve, reject) => {
      const fn2 = (arg1, arg2) => {
        return arg1 ? reject(arg1) : resolve(arg2);
      };
      fn2.withError = true;
      args.push(fn2);
      this.emit(ev, ...args);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({ fromQueue: true }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(data) {
    this.packet({
      type: PacketType.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
    this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((id) => {
      const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
      if (!isBuffered) {
        const ack = this.acks[id];
        delete this.acks[id];
        if (ack.withError) {
          ack.call(this, new Error("socket has been disconnected"));
        }
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(id) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(packet) {
    const ack = this.acks[packet.id];
    if (typeof ack !== "function") {
      return;
    }
    delete this.acks[packet.id];
    if (ack.withError) {
      packet.data.unshift(null);
    }
    ack.apply(this, packet.data);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min2) {
  this.ms = min2;
};
Backoff.prototype.setMax = function(max2) {
  this.max = max2;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var Manager = class extends Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || esm_exports;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v;
    if (!v) {
      this.skipReconnect = true;
    }
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(fn2) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn2 && fn2();
    });
    const onError = (err) => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn2) {
        fn2(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn2) {
    return this.open(fn2);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(
      on(socket, "ping", this.onping.bind(this)),
      on(socket, "data", this.ondata.bind(this)),
      on(socket, "error", this.onerror.bind(this)),
      on(socket, "close", this.onclose.bind(this)),
      // @ts-ignore
      on(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    nextTick2(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(reason, description) {
    var _a;
    this.cleanup();
    (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var cache = {};
function lookup2(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup2, {
  Manager,
  Socket: Socket2,
  io: lookup2,
  connect: lookup2
});

// node_modules/frappe-ui/src/utils/socketio.js
function initSocket(options = {}) {
  let host = window.location.hostname;
  let siteName = import.meta.env.DEV ? host : window.site_name;
  let socketio_port = options.port || 9e3;
  let port = window.location.port ? `:${socketio_port}` : "";
  let protocol4 = port ? "http" : "https";
  let url2 = `${protocol4}://${host}${port}/${siteName}`;
  let socket = lookup2(url2, { withCredentials: true });
  return socket;
}

// node_modules/@vueuse/shared/index.mjs
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
function createEventHook() {
  const fns = /* @__PURE__ */ new Set();
  const off = (fn2) => {
    fns.delete(fn2);
  };
  const on2 = (fn2) => {
    fns.add(fn2);
    const offFn = () => off(fn2);
    tryOnScopeDispose(offFn);
    return {
      off: offFn
    };
  };
  const trigger = (...args) => {
    return Promise.all(Array.from(fns).map((fn2) => fn2(...args)));
  };
  return {
    on: on2,
    off,
    trigger
  };
}
function toValue2(r) {
  return typeof r === "function" ? r() : unref(r);
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
var isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var noop = () => {
};
var isIOS = getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function cacheStringFunction(fn2) {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn2(str));
  };
}
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function identity(arg) {
  return arg;
}
function containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function toRef2(...args) {
  if (args.length !== 1)
    return toRef(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function createUntil(r, isNot = false) {
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(
        r,
        (v) => {
          if (condition(v) !== isNot) {
            stop == null ? void 0 : stop();
            resolve(v);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue2(r)).finally(() => stop == null ? void 0 : stop())
      );
    }
    return Promise.race(promises);
  }
  function toBe(value2, options) {
    if (!isRef(value2))
      return toMatch((v) => v === value2, options);
    const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(
        [r, value2],
        ([v1, v2]) => {
          if (isNot !== (v1 === v2)) {
            stop == null ? void 0 : stop();
            resolve(v1);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue2(r)).finally(() => {
          stop == null ? void 0 : stop();
          return toValue2(r);
        })
      );
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value2, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value2) || array.includes(toValue2(value2));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(toValue2(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  }
}
function until(r) {
  return createUntil(r);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start2(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue2(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start2();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start: start2,
    stop
  };
}

// node_modules/@vueuse/core/index.mjs
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers2 = getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
var payloadMapping = {
  json: "application/json",
  text: "text/plain"
};
function isFetchOptions(obj) {
  return obj && containsProp(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
var reAbsolute = /^(?:[a-z][a-z\d+\-.]*:)?\/\//i;
function isAbsoluteURL(url2) {
  return reAbsolute.test(url2);
}
function headersToObject(headers) {
  if (typeof Headers !== "undefined" && headers instanceof Headers)
    return Object.fromEntries(headers.entries());
  return headers;
}
function combineCallbacks(combination, ...callbacks) {
  if (combination === "overwrite") {
    return async (ctx) => {
      const callback = callbacks[callbacks.length - 1];
      if (callback)
        return { ...ctx, ...await callback(ctx) };
      return ctx;
    };
  } else {
    return async (ctx) => {
      for (const callback of callbacks) {
        if (callback)
          ctx = { ...ctx, ...await callback(ctx) };
      }
      return ctx;
    };
  }
}
function createFetch(config2 = {}) {
  const _combination = config2.combination || "chain";
  const _options = config2.options || {};
  const _fetchOptions = config2.fetchOptions || {};
  function useFactoryFetch(url2, ...args) {
    const computedUrl = computed(() => {
      const baseUrl = toValue2(config2.baseUrl);
      const targetUrl = toValue2(url2);
      return baseUrl && !isAbsoluteURL(targetUrl) ? joinPaths(baseUrl, targetUrl) : targetUrl;
    });
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = {
          ...options,
          ...args[0],
          beforeFetch: combineCallbacks(_combination, _options.beforeFetch, args[0].beforeFetch),
          afterFetch: combineCallbacks(_combination, _options.afterFetch, args[0].afterFetch),
          onFetchError: combineCallbacks(_combination, _options.onFetchError, args[0].onFetchError)
        };
      } else {
        fetchOptions = {
          ...fetchOptions,
          ...args[0],
          headers: {
            ...headersToObject(fetchOptions.headers) || {},
            ...headersToObject(args[0].headers) || {}
          }
        };
      }
    }
    if (args.length > 1 && isFetchOptions(args[1])) {
      options = {
        ...options,
        ...args[1],
        beforeFetch: combineCallbacks(_combination, _options.beforeFetch, args[1].beforeFetch),
        afterFetch: combineCallbacks(_combination, _options.afterFetch, args[1].afterFetch),
        onFetchError: combineCallbacks(_combination, _options.onFetchError, args[1].onFetchError)
      };
    }
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url2, ...args) {
  var _a;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = {
    immediate: true,
    refetch: false,
    timeout: 0,
    updateDataOnError: false
  };
  const config2 = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = { ...options, ...args[0] };
    else
      fetchOptions = args[0];
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = { ...options, ...args[1] };
  }
  const {
    fetch: fetch2 = (_a = defaultWindow) == null ? void 0 : _a.fetch,
    initialData,
    timeout
  } = options;
  const responseEvent = createEventHook();
  const errorEvent = createEventHook();
  const finallyEvent = createEventHook();
  const isFinished = ref(false);
  const isFetching = ref(false);
  const aborted = ref(false);
  const statusCode = ref(null);
  const response = shallowRef(null);
  const error = shallowRef(null);
  const data = shallowRef(initialData || null);
  const canAbort = computed(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = () => {
    if (supportsAbort) {
      controller == null ? void 0 : controller.abort();
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = {
        ...fetchOptions,
        signal: controller.signal
      };
    }
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout)
    timer = useTimeoutFn(abort, timeout, { immediate: false });
  let executeCounter = 0;
  const execute = async (throwOnFailed = false) => {
    var _a2, _b;
    abort();
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    executeCounter += 1;
    const currentExecuteCounter = executeCounter;
    const defaultFetchOptions = {
      method: config2.method,
      headers: {}
    };
    if (config2.payload) {
      const headers = headersToObject(defaultFetchOptions.headers);
      const payload = toValue2(config2.payload);
      if (!config2.payloadType && payload && Object.getPrototypeOf(payload) === Object.prototype && !(payload instanceof FormData))
        config2.payloadType = "json";
      if (config2.payloadType)
        headers["Content-Type"] = (_a2 = payloadMapping[config2.payloadType]) != null ? _a2 : config2.payloadType;
      defaultFetchOptions.body = config2.payloadType === "json" ? JSON.stringify(payload) : payload;
    }
    let isCanceled = false;
    const context = {
      url: toValue2(url2),
      options: {
        ...defaultFetchOptions,
        ...fetchOptions
      },
      cancel: () => {
        isCanceled = true;
      }
    };
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch2) {
      loading(false);
      return Promise.resolve(null);
    }
    let responseData = null;
    if (timer)
      timer.start();
    return fetch2(
      context.url,
      {
        ...defaultFetchOptions,
        ...context.options,
        headers: {
          ...headersToObject(defaultFetchOptions.headers),
          ...headersToObject((_b = context.options) == null ? void 0 : _b.headers)
        }
      }
    ).then(async (fetchResponse) => {
      response.value = fetchResponse;
      statusCode.value = fetchResponse.status;
      responseData = await fetchResponse.clone()[config2.type]();
      if (!fetchResponse.ok) {
        data.value = initialData || null;
        throw new Error(fetchResponse.statusText);
      }
      if (options.afterFetch) {
        ({ data: responseData } = await options.afterFetch({
          data: responseData,
          response: fetchResponse
        }));
      }
      data.value = responseData;
      responseEvent.trigger(fetchResponse);
      return fetchResponse;
    }).catch(async (fetchError) => {
      let errorData = fetchError.message || fetchError.name;
      if (options.onFetchError) {
        ({ error: errorData, data: responseData } = await options.onFetchError({
          data: responseData,
          error: fetchError,
          response: response.value
        }));
      }
      error.value = errorData;
      if (options.updateDataOnError)
        data.value = responseData;
      errorEvent.trigger(fetchError);
      if (throwOnFailed)
        throw fetchError;
      return null;
    }).finally(() => {
      if (currentExecuteCounter === executeCounter)
        loading(false);
      if (timer)
        timer.stop();
      finallyEvent.trigger(null);
    });
  };
  const refetch = toRef2(options.refetch);
  watch(
    [
      refetch,
      toRef2(url2)
    ],
    ([refetch2]) => refetch2 && execute(),
    { deep: true }
  );
  const shell = {
    isFinished: readonly(isFinished),
    isFetching: readonly(isFetching),
    statusCode,
    response,
    error,
    data,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    // method
    get: setMethod("GET"),
    put: setMethod("PUT"),
    post: setMethod("POST"),
    delete: setMethod("DELETE"),
    patch: setMethod("PATCH"),
    head: setMethod("HEAD"),
    options: setMethod("OPTIONS"),
    // type
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config2.method = method;
        config2.payload = payload;
        config2.payloadType = payloadType;
        if (isRef(config2.payload)) {
          watch(
            [
              refetch,
              toRef2(config2.payload)
            ],
            ([refetch2]) => refetch2 && execute(),
            { deep: true }
          );
        }
        return {
          ...shell,
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        };
      }
      return void 0;
    };
  }
  function waitUntilFinished() {
    return new Promise((resolve, reject) => {
      until(isFinished).toBe(true).then(() => resolve(shell)).catch((error2) => reject(error2));
    });
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config2.type = type;
        return {
          ...shell,
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        };
      }
      return void 0;
    };
  }
  if (options.immediate)
    Promise.resolve().then(() => execute());
  return {
    ...shell,
    then(onFulfilled, onRejected) {
      return waitUntilFinished().then(onFulfilled, onRejected);
    }
  };
}
function joinPaths(start2, end2) {
  if (!start2.endsWith("/") && !end2.startsWith("/"))
    return `${start2}/${end2}`;
  return `${start2}${end2}`;
}
var defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
var keys3 = Object.keys(defaultState);
var DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
];
var _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
var TransitionPresets = Object.assign({}, { linear: identity }, _TransitionPresets);

// node_modules/frappe-ui/src/data-fetching/idbStore.ts
var IDBStore = class {
  constructor() {
    __publicField(this, "memoryStore", {});
    __publicField(this, "useIndexedDB");
    this.useIndexedDB = typeof window !== "undefined" && !!window.indexedDB;
  }
  set(key, data) {
    if (!this.validateKey(key)) {
      return Promise.resolve(null);
    }
    try {
      if (this.useIndexedDB) {
        return set(key, JSON.stringify(data));
      }
      this.memoryStore[key] = JSON.stringify(data);
      return Promise.resolve();
    } catch (error) {
      return this.handleError(error, "save to");
    }
  }
  setMany(data) {
    try {
      if (this.useIndexedDB) {
        let entries = [];
        for (const [key, value2] of Object.entries(data)) {
          entries.push([key, JSON.stringify(value2)]);
        }
        return setMany(entries);
      }
      for (const [key, value2] of Object.entries(data)) {
        this.memoryStore[key] = JSON.stringify(value2);
      }
      return Promise.resolve();
    } catch (error) {
      return this.handleError(error, "save to");
    }
  }
  delete(key) {
    if (!this.validateKey(key)) {
      return Promise.resolve(null);
    }
    try {
      if (this.useIndexedDB) {
        return del2(key);
      }
      delete this.memoryStore[key];
      return Promise.resolve();
    } catch (error) {
      return this.handleError(error, "delete from");
    }
  }
  get(key) {
    if (!this.validateKey(key)) {
      return Promise.resolve(null);
    }
    if (this.useIndexedDB) {
      return get(key).then((val) => {
        if (!val) return null;
        try {
          return JSON.parse(val);
        } catch (error) {
          return this.handleError(error, "parse data from");
        }
      });
    }
    try {
      const val = this.memoryStore[key];
      return Promise.resolve(val ? JSON.parse(val) : null);
    } catch (error) {
      return this.handleError(error, "parse data from");
    }
  }
  async keys() {
    try {
      if (this.useIndexedDB) {
        return keys2();
      }
      return Promise.resolve(Object.keys(this.memoryStore));
    } catch (error) {
      console.error(
        `Failed to get keys from ${this.useIndexedDB ? "IndexedDB" : "memory store"}:`,
        error
      );
      return Promise.resolve([]);
    }
  }
  validateKey(key) {
    return !!key;
  }
  handleError(error, operation) {
    console.error(
      `Failed to ${operation} ${this.useIndexedDB ? "IndexedDB" : "memory store"}:`,
      error
    );
    return Promise.resolve(null);
  }
};
var idbStore = new IDBStore();

// node_modules/frappe-ui/src/data-fetching/docStore.ts
var DocStore = class {
  constructor() {
    __publicField(this, "docs");
    __publicField(this, "lastFetched");
    __publicField(this, "cacheTimeout", 5 * 60 * 1e3);
    // 5 minutes
    __publicField(this, "storePrefix", "doc:");
    this.docs = /* @__PURE__ */ new Map();
    this.lastFetched = /* @__PURE__ */ new Map();
  }
  setCacheTimeout(minutes) {
    if (minutes < 1) {
      throw new Error("Cache timeout must be at least 1 minute");
    }
    this.cacheTimeout = minutes * 60 * 1e3;
  }
  async setDoc(doc3) {
    if (!(doc3 == null ? void 0 : doc3.doctype) || !(doc3 == null ? void 0 : doc3.name)) {
      throw new Error("Invalid doc: must have doctype and name");
    }
    doc3.name = doc3.name.toString();
    const key = this.getKey(doc3.doctype, doc3.name);
    try {
      await idbStore.set(this.storePrefix + key, doc3);
      if (!this.docs.has(key)) {
        this.docs.set(key, ref(null));
      }
      const docRef = this.docs.get(key);
      if (docRef) {
        docRef.value = doc3;
      }
      this.lastFetched.set(key, Date.now());
    } catch (error) {
      console.error("Failed to set doc in IDB:", error);
      throw error;
    }
  }
  getDoc(doctype, name) {
    const nameStr = toValue(name);
    if (!doctype || !nameStr) {
      throw new Error("doctype and name are required");
    }
    const key = this.getKey(doctype, nameStr);
    if (!this.docs.has(key)) {
      this.docs.set(key, ref(null));
      this.loadDoc(key, true);
    } else if (this.isStale(key)) {
      this.loadDoc(key, false);
    }
    return this.docs.get(key);
  }
  async loadDoc(key, isFirstLoad) {
    try {
      if (!isFirstLoad && this.isStale(key)) {
        await this.cleanup(key);
      }
      const idbDoc = await idbStore.get(this.storePrefix + key);
      if (idbDoc) {
        const docRef = this.docs.get(key);
        if (docRef) {
          docRef.value = idbDoc;
        }
        this.lastFetched.set(key, Date.now());
      }
    } catch (error) {
      console.error("Failed to load doc from IDB:", error);
      throw error;
    }
  }
  async setDocs(docs) {
    const docMap = {};
    for (const doc3 of docs) {
      if (!(doc3 == null ? void 0 : doc3.doctype) || !(doc3 == null ? void 0 : doc3.name)) continue;
      doc3.name = doc3.name.toString();
      const key = this.getKey(doc3.doctype, doc3.name);
      if (!this.docs.has(key)) {
        this.docs.set(key, ref(null));
      }
      const docRef = this.docs.get(key);
      if (docRef) {
        docRef.value = doc3;
      }
      this.lastFetched.set(key, Date.now());
      docMap[this.storePrefix + key] = doc3;
    }
    await idbStore.setMany(docMap);
  }
  async invalidateDoc(doctype, name) {
    if (!doctype || !name) return;
    const key = this.getKey(doctype, name);
    await this.cleanup(key);
  }
  removeDoc(doctype, name) {
    return this.invalidateDoc(doctype, name);
  }
  getKey(doctype, name) {
    return `${doctype.trim()}/${name.trim()}`;
  }
  isStale(key) {
    const fetchTime = this.lastFetched.get(key);
    if (!fetchTime) return true;
    return Date.now() - fetchTime > this.cacheTimeout;
  }
  async cleanup(key) {
    this.docs.delete(key);
    this.lastFetched.delete(key);
    await idbStore.delete(this.storePrefix + key);
  }
  async clearAll() {
    try {
      const allKeys = await idbStore.keys();
      const docKeys = allKeys.filter(
        (key) => key.startsWith(this.storePrefix)
      );
      await Promise.all(docKeys.map((key) => idbStore.delete(key)));
      this.docs.clear();
      this.lastFetched.clear();
    } catch (error) {
      console.error("Failed to clear all docs:", error);
      throw error;
    }
  }
};
var docStore = new DocStore();

// node_modules/frappe-ui/src/data-fetching/useList/listStore.ts
var ListStore = class {
  constructor() {
    __publicField(this, "byDocType");
    this.byDocType = {};
  }
  addList(doctype, list) {
    this.ensureList(doctype);
    this.byDocType[doctype].push(list);
  }
  updateRows(docs) {
    for (let doc3 of docs) {
      this.updateRow(doc3.doctype, doc3);
    }
  }
  updateRow(doctype, doc3) {
    this.ensureList(doctype);
    this.byDocType[doctype].forEach((list) => {
      list.updateRow(doc3);
    });
  }
  removeRow(doctype, name) {
    this.ensureList(doctype);
    this.byDocType[doctype].forEach((list) => {
      list.removeRow(name);
    });
  }
  ensureList(docType) {
    if (!this.byDocType[docType]) {
      this.byDocType[docType] = [];
    }
  }
};
var listStore = new ListStore();

// node_modules/frappe-ui/src/data-fetching/useFrappeFetch.ts
var useFrappeFetch = createFetch({
  options: {
    fetch: (...args) => fetch(...args),
    // required for vitest
    beforeFetch({ options }) {
      options.headers = setHeaders(options.headers || {});
      return { options };
    },
    afterFetch(ctx) {
      let responseData = JSON.parse(ctx.data);
      if (responseData.debug) {
        let path = ctx.response.url.replace(window.location.origin, "");
        console.group(path);
        for (let d of responseData.debug) {
          console.log(d == null ? void 0 : d.message);
        }
        console.groupEnd();
      }
      if (responseData.docs) {
        let docs = responseData.docs;
        for (let doc3 of docs) {
          doc3.name = doc3.name.toString();
        }
        docStore.setDocs(docs);
        listStore.updateRows(docs);
      }
      ctx.data = responseData.data;
      return ctx;
    },
    onFetchError(ctx) {
      var _a;
      if (((_a = ctx.response) == null ? void 0 : _a.ok) && ctx.error) {
        console.error(
          "Fetch request succeeded but there was a programming error:\n\n",
          ctx.error
        );
        return ctx;
      }
      try {
        let errorResponse = JSON.parse(ctx.data);
        let errors = errorResponse.errors;
        let error = errors[0];
        let errorDescription = error.message ? `: ${error.message}` : error.exception ? ` (Traceback)` : "";
        let frappeError = new Error(`${error.type}${errorDescription}`);
        frappeError.title = error.title;
        frappeError.type = error.type;
        frappeError.exception = error.exception;
        if (import.meta.env.DEV && error.exception) {
          console.log(error.exception);
        }
        ctx.error = frappeError;
        return ctx;
      } catch (e) {
        console.log("Error parsing error response:", e);
        return ctx;
      }
    }
  }
});
function setHeaders(headers) {
  let siteName = null;
  let csrfToken = null;
  if (typeof window !== "undefined") {
    siteName = window.location.hostname;
    csrfToken = window.csrf_token !== "{{ csrf_token }}" ? window.csrf_token : null;
  }
  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  };
  if (siteName) {
    defaultHeaders["X-Frappe-Site-Name"] = siteName;
  }
  if (csrfToken) {
    defaultHeaders["X-Frappe-CSRF-Token"] = csrfToken;
  }
  return { ...headers, ...defaultHeaders };
}

// node_modules/frappe-ui/src/data-fetching/utils.ts
function makeGetParams(params) {
  let url2 = new URLSearchParams();
  for (let key in params) {
    let value2 = params[key];
    if (value2 != null && !isEmptyObject(value2)) {
      url2.append(key, value2);
    }
  }
  return url2.toString();
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
function parseFilters(filters) {
  let parsedFilters = {};
  for (let key in filters) {
    let value2 = filters[key];
    if (Array.isArray(value2)) {
      let [operator, actualValue] = value2;
      operator = unref(operator);
      actualValue = unref(actualValue);
      if (operator === "like") {
        if (typeof actualValue != "string") {
          actualValue = String(actualValue);
        }
        if (actualValue == null || actualValue == "") {
          continue;
        }
        if (!actualValue.includes("%")) {
          actualValue = `%${actualValue}%`;
        }
      }
      parsedFilters[key] = [operator, actualValue];
    } else {
      parsedFilters[key] = unref(value2);
    }
  }
  if (isEmptyObject(parsedFilters)) {
    return null;
  }
  return parsedFilters;
}
function unrefObject(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = unref(obj[key]);
  }
  return newObj;
}
function normalizeCacheKey(cacheKey, prefix) {
  if (!cacheKey) {
    return null;
  }
  if (typeof cacheKey === "string") {
    cacheKey = [cacheKey];
  }
  if (prefix) {
    cacheKey = [prefix, ...cacheKey];
  }
  return JSON.stringify(cacheKey);
}

// node_modules/frappe-ui/src/data-fetching/useCall/useCall.ts
function useCall(options) {
  const {
    url: url2,
    method = "GET",
    params,
    immediate = true,
    refetch = false,
    baseUrl = "",
    initialData,
    cacheKey,
    transform,
    beforeSubmit
  } = options;
  let submitParams = ref(null);
  let resolve;
  let reject;
  let makePromise = () => new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  let promise = ref(makePromise());
  const computedParams = computed(() => {
    let out2;
    if (submitParams.value) {
      out2 = submitParams.value;
    } else if (typeof params === "function") {
      out2 = params();
    } else {
      out2 = params;
    }
    if (out2 === void 0) {
      return {};
    }
    return unrefObject(out2);
  });
  const computedUrl = computed(() => {
    const base2 = `${baseUrl}${unref(url2)}`;
    if (method === "GET" && computedParams.value) {
      return `${base2}?${makeGetParams(computedParams.value)}`;
    }
    return base2;
  });
  const fetchOptions = {
    immediate,
    refetch,
    initialData,
    afterFetch: handleAfterFetch(options),
    onFetchError: handleFetchError(options)
  };
  let result;
  if (method === "POST") {
    result = useFrappeFetch(computedUrl, fetchOptions).post(
      computedParams
    );
  } else if (method === "PUT") {
    result = useFrappeFetch(computedUrl, fetchOptions).put(
      computedParams
    );
  } else if (method === "DELETE") {
    result = useFrappeFetch(computedUrl, fetchOptions).delete(
      computedParams
    );
  } else {
    result = useFrappeFetch(computedUrl, fetchOptions).get();
  }
  const {
    data,
    error,
    isFetching,
    isFinished,
    canAbort,
    aborted,
    abort,
    execute: _execute,
    onFetchResponse,
    onFetchError
  } = result;
  function execute() {
    return _execute().then((r) => data.value);
  }
  onFetchResponse(() => {
    resolve();
    promise.value = makePromise();
  });
  onFetchError((error2) => {
    resolve();
    promise.value = makePromise();
  });
  let beforeSubmitError = ref(null);
  const submit = async (params2) => {
    if (beforeSubmit) {
      beforeSubmitError.value = null;
      try {
        await beforeSubmit(params2);
      } catch (e) {
        console.error("Error in beforeSubmit hook:", e);
        beforeSubmitError.value = e;
      }
    }
    if (params2 != null) {
      submitParams.value = params2;
    }
    if (!refetch) {
      return execute();
    }
  };
  const reset = () => {
    submitParams.value = null;
  };
  let normalizedCacheKey = normalizeCacheKey(cacheKey, "useCall");
  let cachedResponse = ref(null);
  const _data = computed(() => {
    if (normalizedCacheKey && (out.loading || !out.isFinished)) {
      let cachedData = cachedResponse.value;
      if (transform) {
        let returnValue = transform(cachedData);
        if (returnValue !== void 0) {
          cachedData = returnValue;
        }
      }
      return cachedData;
    }
    return data.value;
  });
  if (normalizedCacheKey) {
    idbStore.get(normalizedCacheKey).then((data2) => {
      if (data2) {
        cachedResponse.value = data2;
      }
    });
  }
  let out = reactive({
    data: _data,
    error: readonly(beforeSubmitError.value ? beforeSubmitError : error),
    loading: isFetching,
    isFetching,
    isFinished,
    canAbort,
    aborted,
    url: computedUrl,
    params: computedParams,
    promise,
    abort,
    execute,
    fetch: execute,
    reload: execute,
    reset,
    submit
  });
  return out;
}
function handleAfterFetch({
  transform,
  onSuccess,
  cacheKey
}) {
  return function(ctx) {
    if (transform) {
      let returnValue = transform(ctx.data);
      if (returnValue !== void 0) {
        ctx.data = returnValue;
      }
    }
    let normalizedCacheKey = normalizeCacheKey(cacheKey, "useCall");
    if (normalizedCacheKey) {
      idbStore.set(normalizedCacheKey, ctx.data);
    }
    if (onSuccess) {
      try {
        onSuccess(ctx.data);
      } catch (e) {
        console.error("Error in onSuccess hook:", e);
      }
    }
    return ctx;
  };
}
function handleFetchError({
  onError
}) {
  return function(ctx) {
    if (onError) {
      try {
        onError(ctx.error);
      } catch (e) {
        console.error("Error in onError hook:", e);
      }
    }
    return ctx;
  };
}

// node_modules/frappe-ui/src/data-fetching/useList/useList.ts
function useList(options) {
  const {
    doctype,
    fields,
    filters,
    orderBy,
    start: start2,
    limit,
    groupBy,
    parent,
    debug,
    initialData,
    immediate = true,
    refetch = true,
    cacheKey,
    baseUrl = "",
    url: url2 = "",
    transform
  } = options;
  const _start = ref(start2 || 0);
  const _limit = ref(limit || 20);
  const _url = computed(() => {
    const parsedFilters = parseFilters(filters ? toValue(filters) : {});
    const _fields = fields ? toValue(fields) : [];
    const params = makeGetParams({
      fields: _fields.length ? JSON.stringify(_fields) : null,
      filters: parsedFilters ? JSON.stringify(parsedFilters) : null,
      order_by: toValue(orderBy),
      start: _start.value,
      limit: _limit.value,
      group_by: groupBy,
      parent,
      debug
    });
    if (url2) {
      return `${baseUrl}${url2}?${params}`;
    }
    return `${baseUrl}/api/v2/document/${doctype}?${params}`;
  });
  const allData = ref(null);
  const hasNextPage = ref(true);
  const hasPreviousPage = computed(() => _start.value > 0);
  const fetchOptions = {
    immediate,
    refetch,
    initialData: initialData || null,
    afterFetch: handleAfterFetch2({
      ...options,
      allData,
      _start,
      _limit,
      hasNextPage
    }),
    onFetchError: handleFetchError2(options)
  };
  const {
    data,
    error,
    isFetching,
    isFinished,
    canAbort,
    aborted,
    abort,
    execute
  } = useFrappeFetch(_url, fetchOptions).get();
  let normalizedCacheKey = normalizeCacheKey(cacheKey, "useList");
  let cachedResponse = ref(null);
  const result = computed(() => {
    if (normalizedCacheKey && (out.loading || !out.isFinished)) {
      let data2 = cachedResponse.value;
      if (data2) {
        if (transform) {
          let returnValue = transform(data2);
          if (returnValue !== void 0) {
            return returnValue;
          }
        }
        return data2;
      }
    }
    return allData.value;
  });
  if (normalizedCacheKey) {
    idbStore.get(normalizedCacheKey).then((data2) => {
      if (data2) {
        cachedResponse.value = data2;
      }
    });
  }
  const next = () => {
    _start.value += _limit.value;
    if (!refetch) execute();
  };
  const previous = () => {
    _start.value = Math.max(0, _start.value - _limit.value);
    if (!refetch) execute();
  };
  const updateRow = (doc3) => {
    if (allData.value == null) return;
    let changed = false;
    for (let row of allData.value) {
      if (doc3.name && doc3.name === row.name) {
        for (let key in doc3) {
          if (key in row) {
            row[key] = doc3[key];
            changed = true;
          }
        }
        break;
      }
    }
    if (changed) {
      allData.value = [...allData.value];
    }
  };
  const removeRow = (name) => {
    if (allData.value == null) return;
    const index2 = allData.value.findIndex((row) => row.name === name);
    if (index2 > -1) {
      allData.value.splice(index2, 1);
      allData.value = [...allData.value];
    }
  };
  const insert = useCall({
    url: `/api/v2/document/${doctype}`,
    method: "POST",
    immediate: false,
    refetch: false,
    onSuccess() {
      if (refetch) execute();
    }
  });
  const setValueUrl = ref(`/api/v2/document/${doctype}/<name>`);
  const setValue = useCall({
    url: setValueUrl,
    method: "PUT",
    baseUrl,
    immediate: false,
    refetch: false,
    beforeSubmit(params) {
      if (params == null ? void 0 : params.name) {
        setValueUrl.value = `/api/v2/document/${doctype}/${params.name}`;
      }
    },
    onSuccess(data2) {
      docStore.setDoc({ doctype, ...data2 });
      listStore.updateRow(doctype, data2);
      if (refetch) execute();
    }
  });
  let deleteUrl = ref(`/api/v2/document/${doctype}/<name>`);
  const delete_ = useCall({
    url: deleteUrl,
    method: "DELETE",
    immediate: false,
    refetch: false,
    beforeSubmit(params) {
      if (params == null ? void 0 : params.name) {
        deleteUrl.value = `/api/v2/document/${doctype}/${params.name}`;
      }
    },
    onSuccess() {
      if (refetch) {
        execute();
      }
      if (delete_.params.name) {
        let { name } = delete_.params;
        docStore.removeDoc(doctype, name);
        listStore.removeRow(doctype, name);
      }
    }
  });
  function useEdit(name) {
    if (!allData.value) {
      throw new Error("Data not found");
    }
    let row = allData.value.find((row2) => row2.name === toValue(name));
    if (!row) {
      throw new Error(`Couldn't find row with name ${toValue(name)}`);
    }
    let originalRow = JSON.parse(JSON.stringify(row));
    let doc3 = reactive(row);
    const setValue2 = useCall({
      url: `/api/v2/document/${doctype}/${toValue(name)}`,
      method: "PUT",
      baseUrl,
      immediate: false,
      refetch: false,
      onSuccess(data2) {
        docStore.setDoc({ doctype, ...data2 });
        listStore.updateRow(doctype, data2);
      }
    });
    return {
      doc: doc3,
      reset: () => {
        for (let key in originalRow) {
          doc3[key] = originalRow[key];
        }
      },
      setValue: setValue2,
      update: () => setValue2.submit(doc3)
    };
  }
  let out = reactive({
    data: result,
    hasNextPage: readonly(hasNextPage),
    hasPreviousPage,
    start: readonly(_start),
    limit: readonly(_limit),
    error: readonly(error),
    loading: isFetching,
    isFetching,
    isFinished,
    canAbort,
    aborted,
    url: _url,
    abort,
    next,
    previous,
    execute,
    fetch: execute,
    reload: execute,
    updateRow,
    removeRow,
    insert,
    setValue,
    delete: delete_,
    edit: useEdit
  });
  listStore.addList(doctype, out);
  return out;
}
function handleAfterFetch2({
  transform,
  onSuccess,
  cacheKey,
  allData,
  _start,
  _limit,
  hasNextPage
}) {
  return function(ctx) {
    var _a;
    let resultData = ctx.data;
    if ((_a = resultData[0]) == null ? void 0 : _a.name) {
      resultData = resultData.map((item) => ({
        ...item,
        name: String(item.name)
      }));
    }
    hasNextPage.value = resultData.length < _limit.value ? false : true;
    if (transform) {
      const returnValue = transform(resultData);
      if (Array.isArray(returnValue)) {
        resultData = returnValue;
      }
    }
    if (_start.value === 0) {
      allData.value = resultData;
    } else {
      allData.value = [...allData.value || [], ...resultData];
    }
    ctx.data = allData.value;
    let normalizedCacheKey = normalizeCacheKey(cacheKey, "useList");
    if (normalizedCacheKey) {
      idbStore.set(normalizedCacheKey, ctx.data);
    }
    if (onSuccess) {
      try {
        onSuccess(allData.value);
      } catch (e) {
        console.error("Error in onSuccess hook:", e);
      }
    }
    return ctx;
  };
}
function handleFetchError2({ onError }) {
  return function(ctx) {
    if (onError) {
      try {
        onError(ctx.error);
      } catch (e) {
        console.error("Error in onError hook:", e);
      }
    }
    return ctx;
  };
}

// node_modules/frappe-ui/src/data-fetching/useDoc/useDoc.ts
function useDoc(options) {
  const {
    baseUrl = "",
    doctype,
    name,
    methods = {},
    immediate = true
  } = options;
  const url2 = computed(
    () => `${baseUrl}/api/v2/document/${doctype}/${toValue(name)}`
  );
  const successCallbacks = [];
  const triggerSuccessCallbacks = (doc4) => {
    for (let cb of successCallbacks) {
      try {
        cb(doc4);
      } catch (e) {
        console.error("Error in onSuccess hook:", e);
      }
    }
  };
  const fetchOptions = {
    immediate,
    refetch: true,
    afterFetch(ctx) {
      let doc4 = { doctype, ...ctx.data, name: String(ctx.data.name) };
      docStore.setDoc(doc4);
      listStore.updateRow(doctype, ctx.data);
      triggerSuccessCallbacks(doc4);
      return ctx;
    }
  };
  const {
    data,
    error,
    isFetching,
    isFinished,
    canAbort,
    aborted,
    abort,
    execute
  } = useFrappeFetch(url2, fetchOptions).get();
  let docMethods = {};
  if (methods) {
    for (let key in methods) {
      let option;
      if (typeof methods[key] === "string") {
        option = {
          name: methods[key]
        };
      } else {
        option = methods[key];
      }
      let callOptions = {
        immediate: false,
        refetch: false,
        method: "POST",
        ...option,
        baseUrl,
        url: computed(
          () => `/api/v2/document/${doctype}/${toValue(name)}/method/${option.name}`
        )
      };
      docMethods[key] = readonly(useCall(callOptions));
    }
  }
  let setValue = useCall({
    url: computed(() => `/api/v2/document/${doctype}/${toValue(name)}`),
    method: "PUT",
    baseUrl,
    immediate: false,
    refetch: false,
    onSuccess(data2) {
      docStore.setDoc({ doctype, ...data2 });
      listStore.updateRow(doctype, data2);
    }
  });
  const delete_ = useCall({
    url: computed(() => `/api/v2/document/${doctype}/${toValue(name)}`),
    method: "DELETE",
    baseUrl,
    immediate: false,
    refetch: false,
    onSuccess() {
      docStore.removeDoc(doctype, toValue(name));
      listStore.removeRow(doctype, toValue(name));
    }
  });
  const doc3 = docStore.getDoc(doctype, name);
  let out = reactive({
    doc: doc3,
    error,
    loading: isFetching,
    aborted,
    canAbort,
    isFetching,
    isFinished,
    execute,
    fetch: execute,
    reload: execute,
    abort,
    setValue,
    delete: delete_,
    onSuccess: (callback) => {
      successCallbacks.push(callback);
      return () => {
        const index2 = successCallbacks.indexOf(callback);
        if (index2 > -1) {
          successCallbacks.splice(index2, 1);
        }
      };
    },
    ...docMethods
  });
  return out;
}

// node_modules/frappe-ui/src/utils/plugin.js
var defaultOptions = {
  resources: true,
  call: true,
  socketio: true
};
var plugin_default2 = {
  install(app, options = {}) {
    options = Object.assign({}, defaultOptions, options);
    options.resources && app.use(plugin_default, options.resources);
    if (options.call) {
      let callFunction = typeof options.call == "function" ? options.call : call;
      app.config.globalProperties.$call = callFunction;
    }
    if (options.socketio) {
      app.config.globalProperties.$socket = initSocket(options.socketio);
    }
  }
};

// node_modules/frappe-ui/src/utils/confirmDialog.js
import ConfirmDialog from "/home/nihal/project/anther/formost/antpos/frappe-bench/apps/ant_pos/AntPos/node_modules/frappe-ui/src/components/ConfirmDialog.vue";
function confirmDialog({ title = "Untitled", message = "", onConfirm, onCancel }) {
  renderDialog(
    h(ConfirmDialog, {
      title,
      message,
      onConfirm,
      onCancel
    })
  );
}
var dialogs = ref([]);
function renderDialog(component) {
  component.id = dialogs.length;
  dialogs.value.push(component);
}
export {
  default2 as Alert,
  default3 as Autocomplete,
  default4 as Avatar,
  default70 as AxisChart,
  default5 as Badge,
  default6 as Breadcrumbs,
  default7 as Button,
  default67 as Calendar,
  default33 as Card,
  default9 as Checkbox,
  default31 as CircularProgressBar,
  default8 as Combobox,
  default64 as CommandPalette,
  default65 as CommandPaletteItem,
  default34 as DatePicker,
  default36 as DateRangePicker,
  default35 as DateTimePicker,
  default10 as Dialog,
  default37 as Dialogs,
  default11 as Divider,
  default72 as DonutChart,
  default12 as Dropdown,
  default74 as ECharts,
  default13 as ErrorMessage,
  default38 as FeatherIcon,
  fileUploadHandler_default as FileUploadHandler,
  default14 as FileUploader,
  default15 as FormControl,
  default39 as FormLabel,
  plugin_default2 as FrappeUI,
  default69 as FrappeUIProvider,
  default73 as FunnelChart,
  default40 as GreenCheckIcon,
  default41 as Input,
  default42 as Link,
  default51 as List,
  default54 as ListEmptyState,
  default66 as ListFilter,
  default62 as ListFooter,
  default59 as ListGroupHeader,
  default60 as ListGroupRows,
  default58 as ListGroups,
  default52 as ListHeader,
  default53 as ListHeaderItem,
  default43 as ListItem,
  default56 as ListRow,
  default57 as ListRowItem,
  default55 as ListRows,
  default61 as ListSelectBanner,
  default50 as ListView,
  default44 as LoadingIndicator,
  default45 as LoadingText,
  default68 as NestedPopover,
  default71 as NumberChart,
  default17 as Popover,
  default16 as Progress,
  default18 as Rating,
  default46 as Resource,
  default19 as Select,
  default20 as Spinner,
  default21 as Switch,
  default22 as TabButtons,
  default48 as TabList,
  default49 as TabPanel,
  default47 as Tabs,
  default26 as TextEditor,
  default27 as TextEditorBubbleMenu,
  EditorContent as TextEditorContent,
  default28 as TextEditorFixedMenu,
  default29 as TextEditorFloatingMenu,
  default23 as TextInput,
  default24 as Textarea,
  default63 as Toast,
  default30 as Tooltip,
  default32 as Tree,
  call,
  confirmDialog,
  createCall,
  createDocumentResource,
  createListResource,
  createResource,
  dayjs3 as dayjs,
  dayjsLocal,
  debounce3 as debounce,
  file_to_base64_default as fileToBase64,
  frappeRequest,
  getCachedDocumentResource,
  getCachedListResource,
  getCachedResource,
  getConfig,
  initSocket,
  onOutsideClick_default as onOutsideClickDirective,
  pageMeta_default as pageMetaPlugin,
  request,
  plugin_default as resourcesPlugin,
  setConfig,
  toast,
  useCall,
  useDoc,
  useFrappeFetch,
  useList,
  usePageMeta,
  visibility_default as visibilityDirective
};
//# sourceMappingURL=frappe-ui.js.map
