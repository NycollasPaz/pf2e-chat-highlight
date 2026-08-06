Hooks.on("renderChatMessage", (message, html) => {

    html.find("a.content-link").each(function () {

        const link = $(this);

        const uuid = link.attr("data-uuid");

        if (!uuid) return;

        if (
            uuid.includes("Item") ||
            uuid.includes("Condition")
        ) {
            link.addClass("pf2e-chat-highlight");
        }

    });

});
