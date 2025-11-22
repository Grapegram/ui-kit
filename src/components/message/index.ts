import Message from './Message.vue'
import MessageContent from './MessageContent.vue'
import MessageHeader from './MessageHeader.vue'
import MessageTail from './MessageTail.vue'
import MessageFooter from './MessageFooter.vue'
import ImagesContent from './ImagesContent.vue'
import TextContent from './TextContent.vue'

export {
  Message,
  MessageContent,
  MessageHeader,
  MessageTail,
  MessageFooter,
  ImagesContent,
  TextContent,
}
export type {
  Side,
  Color,
  Variants,
  User,
  MessageContent as MessageContentType,
  MessageStatus,
  Props,
} from './Message.vue'
export type { MessageStatus as FooterMessageStatus } from './MessageFooter.vue'
