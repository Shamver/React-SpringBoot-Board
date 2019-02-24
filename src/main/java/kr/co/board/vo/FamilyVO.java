package kr.co.board.vo;

public class FamilyVO {
    Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    String name;
    String relShip;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRelShip() {
        return relShip;
    }

    public void setRelShip(String relShip) {
        this.relShip = relShip;
    }

    @Override
    public String toString() {
        return "FamilyVO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", relShip='" + relShip + '\'' +
                '}';
    }
}
