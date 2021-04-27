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


<div class="d-block py-5 mt-0 text-center">
{% if page.registration_open %}
	<a href="https://example.com/" class="btn btn-lg btn-primary" title="Register for {{ site.conference.short_name }} {{ site.conference.year }}">Register for {{ site.conference.short_name }} {{ site.conference.year }} &rarr;</a>
{% else %}
	<a class="btn btn-lg btn-outline-primary disabled">Registration is not open</a>
{% endif %}
</div>


## Registration fees

There are three different rates for registration at {{ site.conference.short_name }} {{ site.conference.year }}. Please ensure you register at the correct rate---if you do not, you will be liable to pay the difference in fees.

* Standard Rate: **50€**
* Reduced Rate: **30€**
* Student Rate: **20€**

The Reduced Rate is only open to individuals in Economically Developing Countries, as considered by ACM ([please check this list of countries](/registration/reduced-rates/ "Registration Reduced Rate Eligibility")). The Student Rate is restricted  to students, and you must upload valid student ID during registration to prove your student status.

## ACM publication fees

At least one author of each accepted paper must both pay a registration fee and the ACM publication fees. We ask that authors ensure that the fees have been paid for each paper. A paper without a corresponding publication fee may be withheld from publication.

The ACM publication fee is **20€**.

