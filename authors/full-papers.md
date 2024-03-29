---
label: Full Papers
description: "The Full Papers track at !!conference.short_name!! !!conference.year!! is for original contributions from a broad range of disciplines including: human-computer interaction, computer science, engineering, speech technology, linguistics, psychology, cognitive sciences, sociology and other cognate disciplines."

#cta:
#  text: Submissions closed
#  title: Go to EasyChair to manage your paper submission
#  link: /2021/authors/submission/
  
track:
  chairs: full_papers
  dates: full_papers
---

# Full Papers

Full Papers are original contributions from a broad range of disciplines including: human-computer interaction, computer science, engineering, speech technology, linguistics, psychology, cognitive sciences, sociology and other cognate disciplines. 

<div class="row">
	<div class="col-xl-8 col-lg-7 col-md-6 col-12">
		<h2>Track information</h2>
		<p>
			Submissions must be anonymised (<strong>approx. 6,000 words excluding references</strong>) using the <a href="https://www.acm.org/publications/taps/word-template-workflow#h-2.-the-workflow-and-templates" title="ACM template information">ACM author templates</a> (Word users should use the <em>Submission Template</em>, LaTeX users should use the "manuscript" document class in the <em>Master Article Template</em>).
		</p>
		<p>
			Each submission will be peer reviewed by 3 expert reviewers. Submissions must be made through the conference submission system. Please see the <a href="{{ "/authors/submission-guidance/" | relative_url }}" title="Additional submission guidance for {{ site.conference.short_name }} {{ site.conference.year }}">submission guidance page</a> for information on the changes made to the conference from previous years, the submission process, making your submission accessible, and the various rules and policies that you must agree to when making your submission.
		</p>
		<p>
			Accepted Full Papers will be archived in the <a href="http://dl.acm.org/" title="The ACM Digital Library">ACM Digital Library</a> and authors will be given an oral presentation slot at the conference and invited to take part in a panel discussion. At least one author of each accepted paper must register for the conference.
		</p>
		<h2>Any questions?</h2>
		<p>
			Please contact the <a href="{{ site.data.oc['tracks']['roles'][page.track.chairs]['email'] }}" title="Contact the {{ site.conference.short_name }} {{ site.conference.year }} {{ site.data.oc['tracks']['roles'][page.track.chairs]['label'] }} if you have any questions">{{ site.data.oc['tracks']['roles'][page.track.chairs]['label'] }}</a> if you have any questions.
		</p>
	</div>

	<div class="col-xl-4 col-lg-5 col-md-6 col-12">
		<h2>Important dates</h2>
		<p>
			{% for date in site.data.track_dates[page.track.dates] %}
			{{ date.label }}: {% if date.extended_date %}<strike>{{ date.date }}</strike> <strong>{{ date.extended_date }}</strong>{% else %}<strong>{{ date.date }}</strong>{% endif %}<br>
			{% endfor %}
		</p>
		<p>
			<em class="small">All deadlines are at 23:59 Anywhere on Earth</em>
		</p>
	</div>
</div>
