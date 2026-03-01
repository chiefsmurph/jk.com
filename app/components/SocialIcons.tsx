import { Glitch } from "@/components/Glitch";

type SocialLink = {
  iconUrl: string;
  linkUrl: string;
  label: string;
  subtext: string;
};

export const socialLinks: SocialLink[] = [
  {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
    linkUrl: "https://instagram.com/johnnyblakeactor",
    label: "Instagram",
    subtext: "@johnnyblakeactor",
  },
  {
    iconUrl:
      "https://actorsaccess.com/global/assets/images/logos/logo_actors_access_plus_by_breakdown_services_left.svg", // use local upload (recommended)
    linkUrl: "https://resumes.actorsaccess.com/johnny-blake",
    label: "Actors Access",
    subtext: "/johnny-blake",
  },
  {
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODQ4IDM1Ni41NCI+PHRpdGxlPkJhY2tzdGFnZV9Xb3JkbWFya19CbGFja19SR0I8L3RpdGxlPjxwYXRoIGQ9Ik02OS4yOCwyMDYuNDV2OTUuNDhIOTAuMTdjMzIuNjcsMCw0MS43OC0xNy4xLDQxLjc4LTQ3LjQ3LDAtMjkuNzktOS4xMS00OC00MS43OC00OFptMC01Mi40M0g4OGMzMi4xMywwLDM5LjY0LTE3LjY3LDM5LjY0LTQ0LjE2UzEyMC4xNiw2NC4wNSw4OCw2NC4wNUg2OS4yOFpNOTYuNiwzNTcuMTNINVY5LjQxSDk1YzcwLjE3LDAsOTQuMjcsMzcuNTQsOTQuMjcsOTIuMTcsMCw0Mi41LTIzLDcwLjY1LTU2LjI0LDc2LjcyLDQwLjE4LDcuNzMsNjIuNjgsMzYuNDMsNjIuNjgsODIuNzksMCw2MC43MS0yOS40Nyw5Ni05OS4xLDk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNSAtNSkiLz48cGF0aCBkPSJNMjkxLDIyOS42M2g0OC4yMUwzMTYuNzQsMTA0LjloLTIuMTVaTTM1Ni45MSw5LjQxbDcxLjc4LDM0Ny43MkgzNjIuMjdsLTEzLjkzLTc1LjA3aC02N2wtMTMuOTIsNzUuMDdIMjA2LjRMMjc4LjE3LDkuNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNSAtNSkiLz48cGF0aCBkPSJNNTA2LjE0LDI0MC4xMmMwLDQwLjI5LDUuMzUsNjUuNjgsMzAuNTMsNjUuNjgsMjUuNzEsMCwzMC0yNS4zOSwzMC02NS42OFYyMDguNjZoNjQuODJWMjIzYzAsODMuMzQtMjMsMTM4LjUzLTkzLjIxLDEzOC41My03Mi44NSwwLTEwMC43LTU0LjY0LTEwMC43LTE1My40NFYxNTguNDNDNDM3LjU4LDU5LjY0LDQ2NS40Myw1LDUzOC4yOCw1YzcwLjE3LDAsOTMuMjEsNTUuMTksOTMuMjEsMTM4LjUzdjE0LjM1SDU2Ni42N1YxMjYuNDJjMC00MC4yOS00LjI5LTY1LjY4LTMwLTY1LjY4LTI1LjE4LDAtMzAuNTMsMjUuMzktMzAuNTMsNjUuNjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNSAtNSkiLz48cG9seWdvbiBwb2ludHM9Ijc4OC4wOCAzNTIuMTMgNzQ1Ljc2IDIxOC41NyA3MjUuOTUgMjY5Ljg5IDcyNS45NSAzNTIuMTMgNjU5LjUzIDM1Mi4xMyA2NTkuNTMgNC40MiA3MjUuOTUgNC40MiA3MjUuOTUgMTY5Ljk5IDc4OC4wOCA0LjQyIDg1Ni42NSA0LjQyIDc5NS41OCAxNTYuMTkgODU3LjcyIDM1Mi4xMyA3ODguMDggMzUyLjEzIi8+PHBhdGggZD0iTTkyNywyMzcuMzZ2MjFjMCwyOS44LDExLjc4LDQ4LjU3LDM0LjI4LDQ4LjU3LDIwLjM1LDAsMzAuNTMtMTMuOCwzMC41My0zNywwLTI0LjgzLTEyLjg1LTMzLjY2LTMzLjIxLTQ3LjQ2bC0yNy44NS0xOC4yMmMtMzIuNjgtMjEtNjEuNi00NC43LTYxLjYtMTAyLjY2UzkwNCw1LDk1OC4wNSw1YzU4LjM5LDAsODkuNDUsMzYuNDIsODkuNDUsMTAzLjIxdjE5Ljg3SDk4OS4xMVYxMDcuNjZjMC0zMS40Ni05LjY0LTQ4LTMxLjA2LTQ4LTE4Ljc1LDAtMjcuODYsMTQuOS0yNy44NiwzNy41MywwLDIzLjE4LDEwLjE4LDM0Ljc3LDI3LjMyLDQ1LjgxTDk4OCwxNjIuODVjMzkuMSwyMy43Myw2NS4zNSw0OCw2NS4zNSwxMDEuNTUsMCw2Mi4zNy0zNi40Miw5Ny4xNC05Mi4xMyw5Ny4xNC01Ni43OCwwLTkzLjItMzQuNzctOTMuMi0xMDQuMzFWMjM3LjM2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUgLTUpIi8+PHBvbHlnb24gcG9pbnRzPSIxMTE4Ljk0IDM1Mi4xMyAxMTE4Ljk0IDYwLjcxIDEwNTUuNzMgNjAuNzEgMTA1NS43MyA0LjQyIDEyNTAuMTcgNC40MiAxMjUwLjE3IDYwLjcxIDExODUuMzYgNjAuNzEgMTE4NS4zNiAzNTIuMTMgMTExOC45NCAzNTIuMTMiLz48cGF0aCBkPSJNMTMxOC45MSwyMjkuNjNoNDguMmwtMjIuNS0xMjQuNzNoLTIuMTRaTTEzODQuNzksOS40MWw3MS43OCwzNDcuNzJoLTY2LjQzbC0xMy45Mi03NS4wN2gtNjdsLTEzLjkzLDc1LjA3aC02MS4wNkwxMzA2LjA1LDkuNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNSAtNSkiLz48cGF0aCBkPSJNMTYxNC42NSwzNTcuMTMsMTYwOS4yOSwzMjRjLTcuNSwyNS4zOS0zMS4wNywzNy41My01Ni43OCwzNy41My02My4yMSwwLTg5LjQ1LTU0LjY0LTg5LjQ1LTE1My40NFYxNTguNDNDMTQ2My4wNiw1OS42NCwxNDkyLDUsMTU2My4yMiw1YzcwLjcxLDAsOTUuMzUsNDkuNjcsOTUuMzUsMTMzdjcuNzNoLTY0LjgxVjEyNi40MmMwLTQwLjI5LTQuODMtNjUuNjgtMzAuNTQtNjUuNjhzLTMxLjYsMjUuMzktMzEuNiw2NS42OHYxMTJjMCw0MC44NSw3LjUsNjYuMjMsMzIuNjcsNjYuMjNzMzIuMTUtMjUuMzgsMzIuMTUtNjYuMjN2LTYuNjJoLTI3Ljg2VjE4MGg5MC41MlYzNTcuMTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNSAtNSkiLz48cG9seWdvbiBwb2ludHM9IjE2ODkuOTkgNC40MiAxNjg5Ljk5IDM1Mi4xMyAxODQ4IDM1Mi4xMyAxODQ4IDI5NS44MyAxNzU0LjggMjk1LjgzIDE3NTQuOCAyMDIuNTUgMTgyMy45IDIwMi41NSAxODIzLjkgMTQ2LjI2IDE3NTQuOCAxNDYuMjYgMTc1NC44IDYwLjcxIDE4NDYuOTMgNjAuNzEgMTg0Ni45MyA0LjQyIDE2ODkuOTkgNC40MiIvPjwvc3ZnPg==", // use local upload (recommended)
    linkUrl: "https://www.backstage.com/u/johnnyblakeactor/",
    label: "Backstage",
    subtext: "/u/johnnyblakeactor/",
  },
  {
    iconUrl:
      "data:image/webp;base64,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",
    linkUrl: "https://www.imdb.me/johnnyblake",
    label: "IMDb",
    subtext: "imdb.me/johnnyblake",
  },
];

export default function SocialIcons() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "16px",
        flexWrap: "wrap", // key: allows wrap instead of overflow
        padding: "0 16px", // keeps left item reachable
        maxWidth: "84%",
        margin: "auto",
        // overflow: "hidden", // prevents the horizontal scroll trap
      }}
    >
      {socialLinks.map((item, index) => (
        <Glitch
          delay={0.6 + index * 0.4}
          className="glitch"
          key={`sociallink-${index}`}
        >
          <a
            href={item.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              color: "#00eaff",

              // responsive sizing:
              flex: "1 1 220px", // grows, shrinks, wraps at ~220px
              maxWidth: "320px", // stops it from getting huge on wide screens
              minWidth: "200px",

              // optional: keep it from looking cramped
              padding: "10px 12px",
              borderRadius: "12px",
            }}
          >
            {item.iconUrl && (
              <img
                src={item.iconUrl}
                alt={`Johnny Blake Actor - ${item.label}`}
                width={44}
                height={44}
                style={{
                  display: "block",
                  background: "rgba(255, 255, 255, 0.8)", // you were missing the closing )
                  borderRadius: "8px",
                  flexShrink: 0, // prevents icon squishing// Change your drop-shadow and text color
                  color: "#ffcc00",
                  filter:
                    "drop-shadow(0 0 6px #ffcc00) drop-shadow(0 0 12px #ffcc00)",
                }}
              />
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.05,
                minWidth: 0, // allows text to wrap instead of forcing overflow
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label.toUpperCase()}
              </span>

              <span
                style={{
                  fontSize: "10px",
                  opacity: 0.6,
                  letterSpacing: "0.5px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                title={item.subtext}
              >
                {item.subtext}
              </span>
            </div>
          </a>
        </Glitch>
      ))}
    </div>
  );
}
