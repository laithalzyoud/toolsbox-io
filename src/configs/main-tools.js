import React from "react";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import ImageIcon from "@material-ui/icons/Image";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import CodeIcon from "@material-ui/icons/Code";
import MapIcon from "@material-ui/icons/Map";

export const tools = [
  {
    title: "PDF",
    subheader: "Split and Merge PDFs",
    icon: <PictureAsPdfIcon fontSize="large" />,
    link: "/pdf",
  },
  {
    title: "OCR",
    subheader: "Convert Images to text",
    icon: <AspectRatioIcon fontSize="large" />,
    link: "/ocr",
  },
  {
    title: "Images",
    subheader: "Resize and recolor images",
    icon: <ImageIcon fontSize="large" />,
    link: "/images",
  },
  {
    title: "JSON",
    subheader: "Validate and lint JSON files",
    icon: <CodeIcon fontSize="large" />,
    link: "/json",
  },
  {
    title: "GeoJSON",
    subheader: "Preview GeoJSON files on the map with some nice tools",
    icon: <MapIcon fontSize="large" />,
    link: "/geojson",
  },
];
