"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  projectCategories,
  type ProjectCategory,
  type ProjectCategoryIcon,
} from "@/data/portfolio";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";

interface ProjectCategoriesProps {
  visible: boolean;
}

function CategoryIcon({ name }: { name: ProjectCategoryIcon }) {
  if (name === "clip") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M15.9 3.8 20.2 8.1 8.6 19.7H4.3v-4.3L15.9 3.8zm1.5 1.5-1.4-1.4 1.6-1.6 1.4 1.4-1.6 1.6z"
        />
      </svg>
    );
  }

  if (name === "design") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" rx="1.4" fill="currentColor" />
        <rect x="13" y="4" width="7" height="7" rx="1.4" fill="currentColor" opacity="0.55" />
        <rect x="4" y="13" width="7" height="7" rx="1.4" fill="currentColor" opacity="0.55" />
        <rect x="13" y="13" width="7" height="7" rx="1.4" fill="currentColor" />
      </svg>
    );
  }

  if (name === "fanart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.2 9.2c0-3 2.1-5.4 4.8-5.4s4.8 2.4 4.8 5.4c1.6.4 2.7 1.7 2.7 3.4 0 2.1-2.3 3.6-5.2 3.6h-.5c-.4 1.5-1.5 2.6-3 2.6h-1.2c-1.4 0-2.4-1-2.4-2.2 0-.3 0-.6.1-.8C5.4 15.2 4 13.8 4 12c0-1.6 1.1-2.9 3.2-2.8z"
        />
      </svg>
    );
  }

  if (name === "toonz") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="8.5" width="12" height="9" rx="1.6" fill="currentColor" opacity="0.45" />
        <rect x="7" y="6.5" width="12" height="9" rx="1.6" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.2 3 6 13.2h5.1L10 21 18.4 9.6h-5.4L13.2 3z"
      />
    </svg>
  );
}

export function ProjectCategories({ visible }: ProjectCategoriesProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [itemIndex, setItemIndex] = useState(0);
  const [portalReady, setPortalReady] = useState(false);

  const openCategory = projectCategories.find((category) => category.id === openId);
  const activeItem = openCategory?.items[itemIndex];
  const isImageCategory = openCategory?.kind === "image";

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!openCategory) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openCategory]);

  const openCategoryViewer = (category: ProjectCategory) => {
    setOpenId(category.id);
    setItemIndex(0);
  };

  return (
    <>
      <ScrollReveal visible={visible} className="project-gallery pa" keepMounted>
        <div className="project-gallery__header">
          <p className="project-gallery__kicker">My Projects</p>
          <h2>Explore My Creative Journey</h2>
          <p className="project-gallery__tags">Art • Design • Animation • More</p>
        </div>

        {projectCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`project-card project-card--${category.theme} project-card--${category.id} pa`}
              onClick={() => openCategoryViewer(category)}
            >
              <span className="project-card__sparkle" aria-hidden="true" />
              <span className="project-card__top">
                <span className="project-card__icon">
                  <CategoryIcon name={category.icon} />
                </span>
                <span className="project-card__copy">
                  <strong>{category.title}</strong>
                  <em>{category.subtitle}</em>
                </span>
              </span>

              <span className="project-card__preview">
                <span className="project-card__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9.2 7.4 17 12 9.2 16.6z" />
                  </svg>
                </span>
              </span>

              <span className="project-card__meta">
                <span>
                  <i />
                  {category.items.length}{" "}
                  {category.kind === "image" ? "Images" : "Videos"}
                </span>
                <span>View →</span>
              </span>
            </button>
        ))}
      </ScrollReveal>

      {portalReady && openCategory && activeItem
        ? createPortal(
            <div
              className="project-viewer"
              onClick={() => setOpenId(null)}
              role="presentation"
            >
              <div
                className="project-viewer__panel"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={openCategory.title}
              >
                <button
                  type="button"
                  className="project-viewer__close"
                  onClick={() => setOpenId(null)}
                >
                  Close
                </button>
                {isImageCategory ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={activeItem + itemIndex}
                    src={activeItem}
                    alt=""
                    className="project-viewer__media"
                  />
                ) : (
                  <video
                    key={activeItem + itemIndex}
                    src={activeItem}
                    controls
                    autoPlay
                  />
                )}
                {openCategory.items.length > 1 ? (
                  <div className="project-viewer__list">
                    {openCategory.items.map((src, index) => (
                      <button
                        key={src + index}
                        type="button"
                        className={index === itemIndex ? "is-active" : ""}
                        onClick={() => setItemIndex(index)}
                      >
                        {isImageCategory ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={src} alt="" />
                        ) : (
                          <video src={src} muted playsInline preload="metadata" />
                        )}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
