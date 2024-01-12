select
	uf,
	sum(homicidios) as total_homicidios,
	sum(populacao) as total_populacao,
	1.0 * sum(homicidios)/ sum(populacao) as taxa_homicidios
from
	homicidios
group by
	uf
order by
	taxa_homicidios desc;

CREATE VIEW view_taxa_homicidios AS
SELECT
    uf,
    SUM(homicidios) AS total_homicidios,
    SUM(populacao) AS total_populacao,
    1.0 * SUM(homicidios) / SUM(populacao) AS taxa_homicidios
FROM
    homicidios
GROUP BY
    uf
ORDER BY
    taxa_homicidios DESC;
