import React, { Fragment, FC } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../hooks/useStoreHooks";
import { hideModal } from "../reducers/ui";

type Props = {
  maxWidth?: string;
};

const AppModal: FC<Props> = ({ children, maxWidth }) => {
  const showModal = useAppSelector((state) => state.ui.showModal);
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(hideModal());
  };

  return (
    <>
      <Transition appear show={showModal} as="div">
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <div
              className={clsx(
                `inline-block w-full ${
                  maxWidth ? `max-w-${maxWidth}` : "max-w-md"
                } p-6 my-8 overflow-hidden text-left align-middle bg-white transition-all transform  shadow-xl rounded-2xl`,
                theme === "light" ? "bg-white" : "bg-neutral-800"
              )}
            >
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {children}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AppModal;
