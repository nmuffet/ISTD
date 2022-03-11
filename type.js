window.onload = function () {
    var getheader = document.getElementsByTagName('h1');
    var getbody = document.getElementsByTagName('p');

    var header = "In reality, what we need is systemic change.";

    var body = "Suppose a different individual CEO came in and said, \“Let\’s tell the population the truth. Let\’s tell them that we are destroying the prospects for organized human life on earth. Let\’s tell them that we are going to stop doing it. We\’re going to move to renewable energy, because we care about your grandchildren and ours.\” He would be out in five minutes. That\’s part of the institutional structure. If you aren\’t maximizing profit and market share, you aren\’t going to stand. Of course, there is a point to criticizing individuals, but the real point is that, within the system, they don\’t have a lot of choices. Therefore, we have to ask, \“What is it about the structure of our institutions that is leading us in this direction?\”";

    body.replace(/\\([\s\S])|(")/, "\\$1$2");

    for (obj of getheader) {
        obj.innerHTML = header;
    }

    for (obj of getbody) {
        obj.innerHTML = body;
    }
}