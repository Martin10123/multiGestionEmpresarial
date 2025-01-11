import { PreviewFile } from "@/interfaces/pages/FilesType";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaRegTrashAlt } from "react-icons/fa";

interface SelectFilesProps {
  previewFiles: PreviewFile[];
  setPreviewFiles: (
    files: PreviewFile[] | ((files: PreviewFile[]) => PreviewFile[])
  ) => void;
}

export const SelectFiles = ({
  previewFiles,
  setPreviewFiles,
}: SelectFilesProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const updatedFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file as Blob),
        })
      );

      setPreviewFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    },
    [setPreviewFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
  });

  const removeFile = (file: PreviewFile) => {
    URL.revokeObjectURL(file.preview);
    const newFiles = previewFiles.filter((previewFile) => previewFile !== file);

    setPreviewFiles(newFiles);
  };

  return (
    <div>
      <label
        htmlFor="text"
        className="w-max block mb-2 text-sm font-medium text-gray-900"
      >
        Imagenes
      </label>

      <div
        {...getRootProps()}
        className="cursor-pointer p-12 flex justify-center bg-transparent border border-dashed border-gray-300 rounded-xl"
      >
        <div className="text-center">
          <span className="inline-flex justify-center items-center size-16 bg-gray-100 text-gray-800 rounded-full">
            <svg
              className="shrink-0 size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" x2="12" y1="3" y2="15"></line>
            </svg>
          </span>

          <input {...getInputProps()} />

          <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-800">
            <span className="pe-1 font-medium text-gray-800">
              {isDragActive
                ? "Sueltalo aquí..."
                : "Arrastra y sueltalas imagenes aquí o"}{" "}
            </span>
            <span className="bg-transparent font-semibold text-white hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2">
              Selecciona las imagenes
            </span>
          </div>

          <p className="mt-1 text-xs text-gray-400 dark:text-neutral-400">
            PNG, JPG, JPEG
          </p>
        </div>
      </div>

      {previewFiles.length != 0 && (
        <ul className="bg-transparent rounded-lg py-2 mt-4">
          {previewFiles.map((file) => (
            <li
              className="p-2 rounded-lg border-b border-gray-300"
              key={file.name}
            >
              <figure className="flex gap-2">
                <img
                  className="size-20 rounded-lg object-contain"
                  src={file.preview}
                  alt={file.name}
                />

                <figcaption>
                  <h1 className="text-sm font-semibold text-gray-900 mb-1">
                    {file.name}
                  </h1>
                  <p className="text-xs text-gray-400">{file.size / 1000} KB</p>
                </figcaption>
              </figure>

              <button
                className="w-full px-2 py-1 rounded-lg font-semibold flex justify-end text-white"
                onClick={() => removeFile(file)}
              >
                <FaRegTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
