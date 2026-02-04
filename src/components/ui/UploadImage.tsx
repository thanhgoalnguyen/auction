import { useState, useCallback, useMemo } from "react";

import camera from "@/assets/icon/uploadImage/camera.svg";
import deleteIcon from "@/assets/icon/uploadImage/delete.svg";

import getBase64 from "@/utils/getBase64";

type UploadImageProps = {
    className?: string;
    listImage?: string[];
    onChangeImage?: (value: string[]) => void;
};

const MAX_IMAGES = 20;

export default function UploadImage({ 
    listImage = [], 
    onChangeImage, 
    className = "" 
}: UploadImageProps) {
    const [loading, setLoading] = useState(false);

    const validNumberImages = useMemo(() => MAX_IMAGES - listImage.length, [listImage.length]);

    const handleChangeList = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (!fileList || fileList.length === 0) return;

        setLoading(true);
        const files = Array.from(fileList).slice(0, validNumberImages);

        try {
            const newList = await Promise.all(
                files.map((file) => getBase64(file))
            );

            const validImages = newList.filter((img): img is string => !!img);
            
            onChangeImage?.([...listImage, ...validImages]);
            
            event.target.value = "";
        } catch (error) {
            console.error("Upload error:", error);
        } finally {
            setLoading(false);
        }
    }, [listImage, onChangeImage, validNumberImages]);

    const handleDeleteList = useCallback((itemIndex: number) => {
        onChangeImage?.(listImage.filter((_, index) => index !== itemIndex));
    }, [listImage, onChangeImage]);

    return (
        <div className={`w-full ${className} ${loading && "opacity-50 pointer-events-none"}`}>
            <p className={`text-[11px] leading-[13px] text-neutral-500 ${listImage.length > 0 ? "mb-[18px]" : "mb-2"}`}>
                出品画像（最大{MAX_IMAGES}枚）
            </p>

            {listImage.length > 0 && (
                <ul className="grid grid-cols-4 gap-1 px-2 mb-7">
                    {listImage.map((item, index) => (
                        <li className="relative aspect-square overflow-hidden" key={`${item.slice(0, 20)}-${index}`}>
                            <img 
                                src={item} 
                                alt={`product-${index}`} 
                                className="w-full h-full"
                                loading="lazy"
                            />
                            <button
                                type="button"
                                onClick={() => handleDeleteList(index)}
                                className="absolute top-[3px] left-[3px] z-[1]"
                            >
                                <img src={deleteIcon} alt="delete" className="w-[13px] h-[13px]"/>
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <label
                className={`flex justify-center items-center gap-2 w-full h-[32px] text-[11px] leading-[13px] text-red-200 border border-red-200 rounded-[4px] 
                ${validNumberImages > 0 ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
            >
                <img src={camera} alt="camera" className="w-[15px] h-[11px]"/>
                <span>画像を選択する</span>
                {validNumberImages > 0 && (
                    <input 
                        type="file" 
                        multiple 
                        accept="image/jpeg,image/png,image/webp"
                        className="hidden" 
                        onChange={handleChangeList}
                        disabled={loading}
                    />
                )}
            </label>
        </div>
    );
}