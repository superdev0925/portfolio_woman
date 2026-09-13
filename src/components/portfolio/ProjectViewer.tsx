"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { projectCategories } from "@/data/portfolio";

function isVideoFile(src: string) {
  return /\.(mp4|mov|webm|ogg)(\?|$)/i.test(src);
}

interface ProjectViewerProps {
  categoryId: string | null;
  onClose: () => void;
}

export function ProjectViewer({ categoryId, onClose }: ProjectViewerProps) {
  const [itemIndex, setItemIndex] = useState(0);
  const [portalReady, setPortalReady] = useState(false);

  const category = projectCategories.find((item) => item.id === categoryId);
  const activeItem = category?.items[itemIndex];
  const isImage = activeItem ? !isVideoFile(activeItem) : false;

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    setItemIndex(0);
  }, [categoryId]);

  useEffect(() => {
    if (!category) return;

    const html = document.documentElement;
    const { scrollY } = window;

    html.classList.add("modal-open");

    const isInPanel = (target: EventTarget | null) =>
      target instanceof Element && target.closest(".project-viewer__panel");

    const preventPageScroll = (event: WheelEvent | TouchEvent) => {
      if (isInPanel(event.target)) return;
      event.preventDefault();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End", " "].includes(
          event.key,
        ) &&
        !isInPanel(event.target)
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventPageScroll, { passive: false });
    window.addEventListener("touchmove", preventPageScroll, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      html.classList.remove("modal-open");
      window.scrollTo(0, scrollY);
      window.removeEventListener("wheel", preventPageScroll);
      window.removeEventListener("touchmove", preventPageScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [category, onClose]);

  if (!portalReady || !category || !activeItem) {
    return null;
  }

  return createPortal(
    <div className="project-viewer" onClick={onClose} role="presentation">
      <div
        className="project-viewer__panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={category.title}
      >
        <div className="project-viewer__header">
          <h3>{category.title}</h3>
          <button type="button" className="project-viewer__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="project-viewer__body">
          {isImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={activeItem + itemIndex}
              src={activeItem}
              alt=""
              className="project-viewer__media"
            />
          ) : (
            <video key={activeItem + itemIndex} src={activeItem} controls autoPlay />
          )}
          {category.items.length > 1 ? (
            <div className="project-viewer__list">
              {category.items.map((src, index) => (
                <button
                  key={src + index}
                  type="button"
                  className={index === itemIndex ? "is-active" : ""}
                  onClick={() => setItemIndex(index)}
                >
                  {isVideoFile(src) ? (
                    <video src={src} muted playsInline preload="metadata" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt="" />
                  )}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}
