// import { ref } from "..";

export interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    // children?:
  }
  
 export const Map: React.FC<MapProps> = ({
    onClick,
    onIdle,
    // children,
    style,
    ...options
  }) => {
    return null;
    // return <div ref={ref} style={style} />;
  }