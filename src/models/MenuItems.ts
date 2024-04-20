import mongoose, { Document} from 'mongoose';

export interface IMenuItem extends Document {
  name: string;
  price: string;
  ingredients: string;
  isSpicy: boolean;
  category: string;
}

const MenuItemSchema = new mongoose.Schema<IMenuItem>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  isSpicy: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
export default mongoose.models?.MenuItems ||
  mongoose.model<IMenuItem>('MenuItems', MenuItemSchema);
