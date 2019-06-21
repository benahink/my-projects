public class Tiger extends Felines{

  private String name;
  private String sound = "Roar...";

  Tiger(String name){
    super(name);
  }

  public String getSound(){
    return sound;
  }

  public static void main(String args[]){
    Lion mufasa = new Lion("Mufasa");
    System.out.println("Name: " + mufasa.getName());
    System.out.println("Sound: " + mufasa.getSound());
  }
}