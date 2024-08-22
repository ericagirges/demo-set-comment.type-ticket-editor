(function () {
    const client = ZAFClient.init();
    console.log("hello?")
    client.invoke("resize", { width: "400px", height: "150px" });

    document.getElementById('test-button').addEventListener('click', async () => {
        console.log("TEST");

        await client.set('comment.type', 'internalNote')

        client.invoke('comment.appendHtml', 'Am I an internal note?')
    });
})();

