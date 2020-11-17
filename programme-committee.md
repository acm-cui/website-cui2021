---
label: Programme Committee
description: The Programme Committee for the 2021 Conversational User Interfaces conference.
order: 2
---

# Programme Committee

The following people are members of the CUI 2021 Promgramme Committee:

{% assign num_pc_members = site.data.pc | size %}
{% assign half_num_pc_members = num_pc_members | divided_by: 2 %}
{% assign half_num_pc_members = half_num_pc_members %}

<div class="row">
	<div class="col-lg-6 col-12">
		<ul class="list-unstyled mb-0">
            {% for pc_member in site.data.pc offset:0 limit:half_num_pc_members %}
                <li class="pb-1">{{ pc_member.name }}<br><em class="text-muted small">{{ pc_member.institution }}, {{ pc_member.country }}</em></li>
            {% endfor %}
		</ul>
	</div>

	<div class="col-lg-6 col-12">
		<ul class="list-unstyled mb-0">
            {% for pc_member in site.data.pc offset:half_num_pc_members %}
                <li class="pb-1">{{ pc_member.name }}<br><em class="text-muted small">{{ pc_member.institution }}, {{ pc_member.country }}</em></li>
            {% endfor %}
		</ul>
	</div>
</div>