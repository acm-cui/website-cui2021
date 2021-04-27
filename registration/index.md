---
label: Registration
description: Details about registration for !!conference.year!! !!conference.full_name!!.

registration_open: false

---

# Registration

{% if page.registration_open %}
Registration for {{ site.conference.short_name }} {{ site.conference.year }} is now open.
{% endif %} Although {{ site.conference.short_name }} {{ site.conference.year }} is a virtual conference, we require attendees to register and pay a small fee to cover the costs of running the event (e.g., the various licences we have purchased as part of administering the conference).

Authors of accepted papers are required to pay an additional *ACM publication fee*, which we will use to cover publication of the conference proceedings through the ACM International Conference Proceedings Series (ICPS) in the ACM Digital Library.

We are committed to ensuring that is an accessible conference for all attendees. The {{ site.data.oc['conference']['roles']['sv_diversity']['label'] }} and {{ site.data.oc['conference']['roles']['virtual']['label'] }} are progressively assembling information regarding [accessibility on a separate page]({{ "/registration/accessibility/" | relative_url }}). If you have questions or wish to raise a point regarding our efforts to ensure all attendees can participate, please contact the <a href="{{ site.data.oc['conference']['roles']['sv_diversity']['email'] }}" title="Contact the {{ site.conference.short_name }} {{ site.conference.year }} {{ site.data.oc['conference']['roles'][sv_diversity]['label'] }} if you have any questions">{{ site.data.oc['conference']['roles']['sv_diversity']['label'] }}</a> directly.



<div class="d-block py-5 mt-0 text-center">
{% if page.registration_open %}
	<a href="https://example.com/" class="btn btn-lg btn-primary" title="Register for {{ site.conference.short_name }} {{ site.conference.year }}">Register for {{ site.conference.short_name }} {{ site.conference.year }} &rarr;</a>
{% else %}
	<a class="btn btn-lg btn-outline-primary disabled">Registration is currently closed</a>
{% endif %}
</div>


## Registration fee

There are three different rates for registration at {{ site.conference.short_name }} {{ site.conference.year }}. Please ensure you register at the correct rate---if you do not, you will be liable to pay the difference in fees.

* Standard Rate: **60€**
* Reduced Rate: **30€**
* Student Rate: **20€**

The Reduced Rate is only open to individuals in Economically Developing Countries—[please check this list of countries]({{ "/registration/reduced-rates/" | relative_url }} "Registration Reduced Rate Eligibility") to determine if you are eligible. The Student Rate is restricted  to students, and you must upload valid student ID during registration to prove your student status.

## ACM publication fee

At least one author of each accepted paper must both pay a registration fee and the ACM publication fee for each accepted paper. We ask that authors ensure that the fee has been paid for each paper. A paper without a corresponding publication fee may be withheld from publication.

The ACM publication fee is **20€**.

Authors with papers accepted must register and pay the publication fee by **1st July 2021**.

## Need support or have questions?

{% for group in site.data.oc %}
	{% for role in group[1]['roles'] %}
		{% if role[1]['contact'] %}
<p>If you need any support or have questions about the registration process, please contact <a href="{{ role[1].email }}" title="Retrieve the email address for the {{ site.conference.short_name }} {{ site.conference.year }} {{ role[1].label }}">{{ site.conference.short_name }} {{ site.conference.year }} {{ role[1].label }}</a>, 
		{% assign use_and = role[1]['people'] | size | plus: -1 %}
		{% for person in role[1]['people'] %}{{ person.name }}{% if forloop.index == use_and %} and {% else %}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}.</p>
		{% break %}
		{% endif %}
	{% endfor %}
{% endfor %}

