import { ViewStyle } from "react-native";

interface DropdowProps<T> extends ViewStyle {
  setC: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  data: T[] | undefined;
  renderItem: React.FC<{ item: T }>;
  onSelect: (item: T | string) => void;
  value: string | undefined;
  clean: () => void
}
export default DropdowProps