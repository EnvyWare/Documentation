import Link from "@docusaurus/Link";
import React from "react";
import styles from "../css/subpages.module.css";

const subPages = [
    {
        title: "General Help",
        description:
            "Here you can find some general help for the different projects we have. For example, you can find the general config section which applies to all the projects.",
        link: "/docs/general-help/SUMMARY/"
    },
    {
        title: "Mods",
        description: "Here you can find details about all of the mods that are available and made by EnvyWare Ltd.",
        link: "docs/mods/SUMMARY/"
    },
    {
        title: "Premium Mods",
        description: "These are the premium mods that are available and made by EnvyWare Ltd. To get access to these mods, you must purchase them, and you can enquire about this through our Discord server.",
        link: "docs/premium-mods/SUMMARY/"
    },
    {
        title: "API",
        description: "Here you can find information on how to use the API to create your own mods, plugins, and more.",
        link: "docs/api/"
    }
];

function Page(page) {
    return (
        <div className={styles.page}>
            <div className={styles.flex}>
                <Link className={styles.pageTitleFormat}>
                    {page.title}
                </Link>
                <p>{page.description}</p>
            </div>
            <div>
                <Link className="button button--success" to={page.link}>
                    Go
                </Link>
            </div>
        </div>
    );
}

export default function SubPages() {
    return (
        <section className={styles.pages}>
            <div className={styles.pagesContainer}>
                {subPages.map((page, index) => (
                    <Page key={index} {...page} />
                ))}
            </div>
        </section>
    );
}