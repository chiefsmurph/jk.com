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
        maxWidth: "100%",
        overflow: "hidden", // prevents the horizontal scroll trap
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
                alt={item.label}
                width={44}
                height={44}
                style={{
                  display: "block",
                  background: "rgba(255, 255, 255, 0.8)", // you were missing the closing )
                  borderRadius: "8px",
                  flexShrink: 0, // prevents icon squishing
                  filter:
                    "drop-shadow(0 0 6px #00eaff) drop-shadow(0 0 12px #00eaff)",
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
