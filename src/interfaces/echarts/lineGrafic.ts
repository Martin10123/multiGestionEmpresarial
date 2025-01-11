import {
  BarSeriesOption,
  ComposeOption,
  DatasetComponentOption,
  GridComponentOption,
  LineSeriesOption,
  TitleComponentOption,
  TooltipComponentOption,
} from "echarts";

export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;
