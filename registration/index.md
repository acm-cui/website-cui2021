---
label: Registration
description: Details about registration for the !!conference.year!! !!conference.full_name!! conference.

registration_open: true
---

# Registration

{% if page.registration_open %}
Registration for {{ site.conference.short_name }} {{ site.conference.year }} is now open.
{% endif %} Although {{ site.conference.short_name }} {{ site.conference.year }} is a virtual conference, we require attendees to register and pay a small fee to cover the costs of running the event (e.g., the various licences we have purchased as part of administering the conference and publishing the conference proceedings).

We are committed to ensuring that is an accessible conference for all attendees. The {{ site.data.oc['conference']['roles']['sv_diversity']['label'] }} and {{ site.data.oc['conference']['roles']['virtual']['label'] }} are progressively assembling information regarding [accessibility on a separate page]({{ "/accessibility/" | relative_url }}). If you have questions or wish to raise a point regarding our efforts to ensure all attendees can participate, please contact the <a href="{{ site.data.oc['conference']['roles']['sv_diversity']['email'] }}" title="Contact the {{ site.conference.short_name }} {{ site.conference.year }} {{ site.data.oc['conference']['roles']['sv_diversity']['label'] }} if you have any questions">{{ site.data.oc['conference']['roles']['sv_diversity']['label'] }}</a> directly.

<div class="d-block py-5 mb-2 text-center">
{% if page.registration_open %}
	<a href="https://sisweb.ucd.ie/usis/W_HU_MENU.P_PUBLISH?p_tag=CONFHCI" class="btn btn-lg btn-primary" title="Register for {{ site.conference.short_name }} {{ site.conference.year }}">Register for {{ site.conference.short_name }} {{ site.conference.year }} &rarr;</a>
{% else %}
	<a class="btn btn-lg btn-outline-primary disabled">Registration is currently closed</a>
{% endif %}
</div>

Authors with papers accepted must register by **1st July 2021**.
Registration for attendees closes on **26th July 2021**.

## Registration fees

There are three different rates for registration at {{ site.conference.short_name }} {{ site.conference.year }}. Please ensure you register at the correct rate---if you do not, you will be liable to pay the difference.

* Standard Rate: **80€**
* Reduced Rate: **50€**
* Student Rate: **30€**

The Reduced Rate is only open to individuals in economically developing countries—[please check this list of countries]({{ "/registration/reduced-rates/" | relative_url }} "Registration Reduced Rate Eligibility") to determine if you are eligible. The Student Rate is restricted  to students, and you must upload valid student ID during registration to prove your student status.

At least one author of each accepted paper must register for the conference. A paper without a corresponding registration may be withheld from publication. 


## Need support or have questions?

<p>If you need any support or have questions about the registration process, please contact <a href="https://spamty.eu/show/v6/908/23efe01f29d0aca74ed28cd5/" title="Retrieve the email address for help with {{ site.conference.short_name }} {{ site.conference.year }} registration">Benjamin Cowan and Stephan Schlögl</a>.</p>
